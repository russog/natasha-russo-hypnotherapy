"use client";

import Link from "next/link";
import React, { useState } from "react";

const contactFormErrorMessage =
    "We’re sorry, your message could not be sent. Please try again, or contact Natasha directly by email.";

export function ContactForm() {
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: new FormData(event.currentTarget),
            });

            if (response.redirected && new URL(response.url).pathname === "/contact/thanks") {
                window.location.assign("/contact/thanks");
                return;
            }

            if (!response.ok) {
                setError(contactFormErrorMessage);
                return;
            }

            window.location.assign("/contact/thanks");
        } catch {
            setError(contactFormErrorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="space-y-6" method="post" action="/api/contact" onSubmit={handleSubmit}>
            <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
            />
            <Field label="Name">
                <Input name="name" autoComplete="name" required />
            </Field>

            <Field label="Email address">
                <Input name="email" type="email" autoComplete="email" required />
            </Field>

            <Field label="Phone number (optional)">
                <Input name="phone" type="tel" autoComplete="tel" />
            </Field>

            <Field
                label="Message"
                description="Please keep your message brief and avoid including detailed medical, psychological or other sensitive personal information at this stage."
            >
                <Textarea
                    name="message"
                    placeholder={
                        "You can share as much or as little as you'd like.\n\nFor example, you might tell me what's prompted you to get in touch, or what you're hoping to understand or change."
                    }
                    aria-describedby={error ? "contact-form-error" : undefined}
                    required
                />
            </Field>

            {error ? (
                <p
                    id="contact-form-error"
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-relaxed text-red-900"
                >
                    {error}
                </p>
            ) : null}

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-[#4F6B5A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f5b4d] focus:outline-none focus:ring-2 focus:ring-[#4F6B5A]/40 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isSubmitting ? "Sending..." : "Send message"}
            </button>

            <p className="pt-2 text-sm text-neutral-600">
                Messages sent through this form are treated as confidential and handled in
                line with my{" "}
                <Link href="/privacy-policy"
                      className="underline underline-offset-2 hover:no-underline">
                    privacy policy
                </Link>
                .
            </p>
        </form>
    );
}

function Field({
    label,
    description,
    children,
}: {
    label: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block space-y-2">
            <span className="block text-sm font-medium text-neutral-700">{label}</span>
            {description ? (
                <span className="block text-sm leading-relaxed text-neutral-700">
                    {description}
                </span>
            ) : null}
            {children}
        </label>
    );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={[
                "w-full rounded-lg border border-[#4F5A54]/20 bg-white/60 px-4 py-3 text-sm text-neutral-900",
                "placeholder:text-neutral-400",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
                "focus:outline-none focus:ring-2 focus:ring-[#4F6B5A]/30",
            ].join(" ")}
        />
    );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            rows={6}
            className={[
                "w-full resize-none rounded-lg border border-[#4F5A54]/20 bg-white/60 px-4 py-3 text-sm text-neutral-900",
                "placeholder:text-neutral-400",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
                "focus:outline-none focus:ring-2 focus:ring-[#4F6B5A]/30",
            ].join(" ")}
        />
    );
}
