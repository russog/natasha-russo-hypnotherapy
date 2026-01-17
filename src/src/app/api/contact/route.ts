import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    return NextResponse.json({ ok: true, route: "contact", runtime: "nodejs" });
}

export async function POST(req: Request) {
    try {
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

        if (!RESEND_API_KEY) {
            return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
        }
        if (!CONTACT_TO_EMAIL) {
            return NextResponse.json({ error: "Missing CONTACT_TO_EMAIL" }, { status: 500 });
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

        await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>",
            to: CONTACT_TO_EMAIL,
            subject: `New contact form message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
        });

        return new Response("OK", {status: 200});
    } catch (err: unknown) {
        console.error("CONTACT_FORM_ERROR:", err);

        let message = "Internal Server Error";

        if (err instanceof Error) {
            message = err.message;
        }

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
