import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Natasha Russo Hypnotherapy. Free 20-minute initial chat available. Online sessions and confidential support.",
    alternates: { canonical: "/contact" },
};

export default function Contact() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14 text-center">
                <section className="px-6 py-10">
                        <div
                            className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#4F5A54]/15 bg-[#f6f4ef]">
                            <div className="grid md:grid-cols-2">
                                <div className="relative p-6 sm:p-10 md:p-12">
                                    <div className="pointer-events-none absolute inset-0 opacity-30">
                                        <div
                                            className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#4F5A54]/10 blur-2xl"/>
                                        <div
                                            className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#4F5A54]/10 blur-2xl"/>
                                    </div>

                                    <div className="relative z-10 max-w-md space-y-6 text-neutral-800">
                                        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight">Get in touch</h1>

                                        <p>
                                            If you&apos;re considering hypnotherapy and would like to ask a few
                                            questions, you&apos;re very welcome to get in touch.
                                        </p>

                                        <p>
                                            This is simply a space to make initial contact — there&apos;s no
                                            obligation to book, and no need to have everything worked out yet.
                                        </p>

                                        <p>
                                            I&apos;m happy to briefly discuss what you&apos;re dealing with, how
                                            cognitive behavioural hypnotherapy works, and whether this approach
                                            feels like a good fit for you.
                                        </p>

                                        <p>
                                            Free 20-minute initial chat available.
                                        </p>

                                        <p>
                                            You can also listen to a <Link href="/free-relaxation-audio" className="underline underline-offset-2 hover:no-underline">free relaxation audio</Link>.
                                        </p>

                                        <p>
                                            Email:{" "}
                                            <a
                                                href="mailto:contact@natasharussohypnotherapy.co.uk"
                                                className="break-all underline underline-offset-2 hover:no-underline"
                                            >
                                                contact@natasharussohypnotherapy.co.uk
                                            </a>
                                        </p>

                                        <p>
                                            Business phone:{" "}
                                            <a
                                                href="tel:+447719695769"
                                                className="underline underline-offset-2 hover:no-underline"
                                            >
                                                +44 7719 695769
                                            </a>
                                        </p>

                                        <p>I usually reply within 1 working day.</p>
                                    </div>
                                </div>

                                <div
                                    className="border-t border-[#4F5A54]/15 bg-[#f8f7f3] p-6 sm:p-10 md:border-t-0 md:border-l md:p-12">
                                    <form className="space-y-6" method="post" action="/api/contact">
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
                                            <Input name="email" type="email" autoComplete="email" required/>
                                        </Field>

                                        <Field label="Phone number (optional)">
                                            <Input name="phone" type="tel" autoComplete="tel"/>
                                        </Field>

                                        <Field label="Message">
                                            <Textarea
                                                name="message"
                                                placeholder={
                                                    "You can share as much or as little as you'd like.\n\nFor example, you might tell me what's prompted you to get in touch, or what you're hoping to understand or change."
                                                }
                                            required/>
                                        </Field>

                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center rounded-lg bg-[#4F6B5A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f5b4d] focus:outline-none focus:ring-2 focus:ring-[#4F6B5A]/40"
                                        >
                                            Send message
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
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    );

    /** Small helpers (keep in same file or move out) */
    function Field({label, children}: { label: string; children: React.ReactNode }) {
        return (
            <label className="block space-y-2">
                <span className="text-sm font-medium text-neutral-700">{label}</span>
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
}
