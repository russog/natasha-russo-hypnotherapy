import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contactFormErrorMessage =
    "We’re sorry, your message could not be sent. Please try again, or contact Natasha directly by email.";

const minimumSubmitTimeMs = 2500;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxSubmissions = 5;
const duplicateWindowMs = 60 * 60 * 1000;
const duplicateRapidWindowMs = 10 * 60 * 1000;

type SubmissionRecord = {
    at: number;
    email: string;
    ip: string;
};

const submissionsByIp = new Map<string, number[]>();
const submissionsByMessage = new Map<string, SubmissionRecord[]>();

export async function GET() {
    // Visit /api/contact in the browser. If you don't see this, your route isn't deployed/running.
    return NextResponse.json({ ok: true, route: "contact", runtime: "nodejs" });
}

function logContactSendFailure(details?: { providerCode?: string; statusCode?: number | null }) {
    console.error("CONTACT_FORM_SEND_FAILED", {
        providerCode: details?.providerCode,
        statusCode: details?.statusCode,
    });
}

function getRequestOrigin(req: Request) {
    const origin = req.headers.get("origin");
    if (origin) return origin;

    const forwardedProto = req.headers.get("x-forwarded-proto") ?? "https";
    const forwardedHost = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    if (forwardedHost) return `${forwardedProto}://${forwardedHost}`;

    return new URL(req.url).origin;
}

function getRequestIp(req: Request) {
    const forwardedFor = req.headers.get("x-forwarded-for");
    if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";

    return (
        req.headers.get("cf-connecting-ip") ??
        req.headers.get("x-real-ip") ??
        "unknown"
    );
}

function normalizeMessage(message: string) {
    return message
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function pruneTimestamps(timestamps: number[], now: number, windowMs: number) {
    return timestamps.filter((timestamp) => now - timestamp <= windowMs);
}

function pruneMessageRecords(records: SubmissionRecord[], now: number) {
    return records.filter((record) => now - record.at <= duplicateWindowMs);
}

function silentlyAccept(req: Request) {
    const origin = getRequestOrigin(req);
    return NextResponse.redirect(`${origin}/contact/thanks`, 303);
}

function failsSubmitTimingCheck(formStartedAt: FormDataEntryValue | null, now: number) {
    if (!formStartedAt) return true;

    const startedAt = Number(formStartedAt);
    if (!Number.isFinite(startedAt)) return true;

    return now - startedAt < minimumSubmitTimeMs;
}

function isRateLimited(ip: string, now: number) {
    const recent = pruneTimestamps(submissionsByIp.get(ip) ?? [], now, rateLimitWindowMs);
    submissionsByIp.set(ip, recent);

    return recent.length >= rateLimitMaxSubmissions;
}

function isConservativeDuplicateSpam({
    email,
    ip,
    messageKey,
    now,
}: {
    email: string;
    ip: string;
    messageKey: string;
    now: number;
}) {
    if (!messageKey || messageKey.length < 30) return false;

    const recent = pruneMessageRecords(submissionsByMessage.get(messageKey) ?? [], now);
    submissionsByMessage.set(messageKey, recent);

    const sameIpDuplicate = recent.some((record) => record.ip === ip);
    const sameEmailDuplicate = recent.some((record) => record.email === email);
    const rapidDuplicateBurst = recent.filter((record) => now - record.at <= duplicateRapidWindowMs).length >= 2;

    return sameIpDuplicate || sameEmailDuplicate || rapidDuplicateBurst;
}

function rememberSubmission({
    email,
    ip,
    messageKey,
    now,
}: {
    email: string;
    ip: string;
    messageKey: string;
    now: number;
}) {
    const recentIpSubmissions = pruneTimestamps(submissionsByIp.get(ip) ?? [], now, rateLimitWindowMs);
    submissionsByIp.set(ip, [...recentIpSubmissions, now]);

    if (!messageKey || messageKey.length < 30) return;

    const recentMessageSubmissions = pruneMessageRecords(submissionsByMessage.get(messageKey) ?? [], now);
    submissionsByMessage.set(messageKey, [
        ...recentMessageSubmissions,
        { at: now, email, ip },
    ]);
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const now = Date.now();
        const ip = getRequestIp(req);

        if (formData.get("company") || formData.get("website")) {
            return silentlyAccept(req);
        }

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();
        const messageKey = normalizeMessage(message);

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Please provide name, email, and message." },
                { status: 400 }
            );
        }

        if (
            failsSubmitTimingCheck(formData.get("formStartedAt"), now) ||
            isRateLimited(ip, now) ||
            isConservativeDuplicateSpam({ email: email.toLowerCase(), ip, messageKey, now })
        ) {
            return silentlyAccept(req);
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

        if (!RESEND_API_KEY) {
            logContactSendFailure({ providerCode: "missing_server_configuration" });
            return NextResponse.json({ error: contactFormErrorMessage }, { status: 500 });
        }
        if (!CONTACT_TO_EMAIL) {
            logContactSendFailure({ providerCode: "missing_server_configuration" });
            return NextResponse.json({ error: contactFormErrorMessage }, { status: 500 });
        }

        const resend = new Resend(RESEND_API_KEY);

        const result = await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>",
            to: CONTACT_TO_EMAIL,
            subject: `New contact form message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
        });

        if (result.error || !result.data?.id) {
            logContactSendFailure({
                providerCode: result.error?.name,
                statusCode: result.error?.statusCode,
            });

            return NextResponse.json({ error: contactFormErrorMessage }, { status: 502 });
        }

        rememberSubmission({ email: email.toLowerCase(), ip, messageKey, now });

        const origin = getRequestOrigin(req);
        return NextResponse.redirect(`${origin}/contact/thanks`, 303);


    } catch {
        logContactSendFailure({ providerCode: "unexpected_exception" });

        return NextResponse.json({ error: contactFormErrorMessage }, { status: 500 });
    }
}
