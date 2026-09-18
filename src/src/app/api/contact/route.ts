import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contactFormErrorMessage =
    "We’re sorry, your message could not be sent. Please try again, or contact Natasha directly by email.";

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

export async function POST(req: Request) {
    try {
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

        const formData = await req.formData();

        // honeypot
        if (formData.get("company")) {
            return NextResponse.json({ ok: true, spam: true });
        }

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Please provide name, email, and message." },
                { status: 400 }
            );
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

        const origin = getRequestOrigin(req);
        return NextResponse.redirect(`${origin}/contact/thanks`, 303);


    } catch {
        logContactSendFailure({ providerCode: "unexpected_exception" });

        return NextResponse.json({ error: contactFormErrorMessage }, { status: 500 });
    }
}
