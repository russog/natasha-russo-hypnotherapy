import Link from "next/link";
import React from "react";

export default function ThanksPage() {
    return (
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <div className="mx-auto max-w-2xl rounded-2xl border border-[#4F5A54]/15 bg-[#f8f7f3] p-10 text-center">
                    <h1 className="text-3xl font-medium">Thank you</h1>
                    <p className="mt-4 text-neutral-700">
                        Your message has been sent. I’ll get back to you as soon as I can.
                    </p>
                    <Link
                        className="mt-6 inline-block underline underline-offset-2 hover:no-underline"
                        href="/"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    );
}
