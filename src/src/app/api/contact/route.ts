import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    try {
        const formData = await req.formData();

        if (formData.get("company")) {
            return new Response("OK");
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
