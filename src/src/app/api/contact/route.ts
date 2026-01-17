import {Resend} from "resend";
import {NextResponse} from "next/dist/server/web/spec-extension/response";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    try {
        const formData = await req.formData();

        if (formData.get("company")) {
            return new Response("OK");
        }

        if (!process.env.RESEND_API_KEY) {
            console.error("Missing RESEND_API_KEY");
            return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
        }
        if (!process.env.CONTACT_TO_EMAIL) {
            console.error("Missing CONTACT_TO_EMAIL");
            return NextResponse.json({ error: "Missing CONTACT_TO_EMAIL" }, { status: 500 });
        }

        const name = formData.get("name")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";
        const message = formData.get("message")?.toString() || "";

        if (!name || !email || !message) {
            return new Response("Missing required fields", {status: 400});
        }

        await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL!,
            replyTo: email,
            subject: `New contact form message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
        });

        return new Response("OK", {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("Error sending message", {status: 500});
    }
}
