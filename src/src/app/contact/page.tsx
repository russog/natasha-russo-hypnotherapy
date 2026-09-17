import Link from "next/link";
import { ContactForm } from "@/app/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Natasha Russo Hypnotherapy. Free 20-minute initial chat available. Online sessions and confidential support.",
    alternates: { canonical: "/contact" },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";
const textClass = "text-base leading-7 text-[#5B554D]";

export default function ContactStylePreview() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">
            <script dangerouslySetInnerHTML={{ __html: "window.localStorage.setItem('natasha-russo-cookie-consent','declined');" }} />
            <style>{`[aria-label="Cookie notice"]{display:none!important;}`}</style>

            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.42fr_0.58fr]">
                <div className="md:pt-10">
                    <p className={eyebrowClass}>Contact</p>
                    <h1 className="mt-5 !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                        Get in touch.
                    </h1>
                    <div className="mt-8 space-y-5">
                        <p className={textClass}>
                            If you&apos;re considering hypnotherapy and would like to ask a few questions, you&apos;re very
                            welcome to get in touch.
                        </p>
                        <p className={textClass}>
                            This is simply a space to make initial contact — there&apos;s no obligation to book, and no
                            need to have everything worked out yet.
                        </p>
                        <p className={textClass}>
                            I&apos;m happy to briefly discuss what you&apos;re dealing with, how cognitive behavioural
                            hypnotherapy works, and whether this approach feels like a good fit for you.
                        </p>
                    </div>

                    <div className="mt-10 border-t border-[#D8D1C6] pt-6 text-sm leading-6 text-[#5B554D]">
                        <p>Free 20-minute initial chat available.</p>
                        <p className="mt-3">
                            You can also listen to a{" "}
                            <Link href="/free-relaxation-audio" className="font-semibold no-underline">
                                free relaxation audio
                            </Link>.
                        </p>
                        <p className="mt-3">
                            Email:{" "}
                            <a href="mailto:contact@natasharussohypnotherapy.co.uk" className="font-semibold no-underline">
                                contact@natasharussohypnotherapy.co.uk
                            </a>
                        </p>
                        <p className="mt-3">Business phone: +44 7719 695769</p>
                        <p className="mt-3">I usually reply within 1 working day.</p>
                    </div>
                </div>
                <div className="rounded-sm border border-[#E6DDD1] bg-[#FFFDF9] p-6 shadow-[0_18px_45px_rgba(52,44,35,0.05)] sm:p-8">
                    <p className={eyebrowClass}>Send a message</p>
                    <h2 className={`${titleClass} mt-4 mb-8`}>Start with a conversation.</h2>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
