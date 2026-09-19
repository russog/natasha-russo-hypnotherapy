import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fees & Cancellation Policy",
    description:
        "Session fees and cancellation policy for Natasha Russo Hypnotherapy.",
    alternates: { canonical: "/fees-cancellation" },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";
const textClass = "text-base leading-7 text-[#5B554D]";

const sections = [
    {
        title: "Session fees",
        body: [
            <>Standard Cognitive Behavioural Hypnotherapy sessions usually last approximately <strong>60</strong> minutes and are charged at <strong>£60</strong> per session.</>,
            <>The first session usually lasts approximately <strong>90</strong> minutes and is charged at <strong>£90</strong>, allowing additional time for assessment and conceptualisation.</>,
            <>A block of four standard 60-minute sessions is available for <strong>£220</strong>.</>,
            <>Fees may be reviewed periodically. Any changes to fees will apply to new clients and will not affect the fee already agreed with you for your current course of therapy.</>,
        ],
    },
    {
        title: "Payment",
        body: [
            "Session fees must be paid in advance and received at least 48 hours before the scheduled appointment, unless otherwise agreed.",
            "Payment can be made by bank transfer. Payment details will be provided when the appointment is arranged.",
            "If payment has not been received by the 48-hour deadline, the appointment may be released and will not be considered confirmed unless otherwise agreed.",
        ],
    },
    {
        title: "Cancellations and rescheduling",
        body: [
            "If you need to cancel or reschedule a session, please provide at least 48 hours' notice.",
            "Cancellations or requests to reschedule made with less than 48 hours' notice, and missed appointments, will normally be charged at the full session fee, as the appointment time has been reserved for you and may not be possible to offer to another client at short notice.",
            "I understand that unexpected circumstances can arise, and these will be considered on an individual basis.",
            "If I need to cancel or reschedule a session, I will give you as much notice as reasonably possible. Any payment already made for that session will either be transferred to the rearranged appointment or refunded in full if the session cannot be rearranged.",
        ],
    },
    {
        title: "Ending therapy",
        body: [
            "You are free to end therapy at any time.",
            "Where possible, it can be helpful to discuss ending therapy so that we can review the work completed and consider any next steps, but a final session is not required.",
            "I may also recommend ending or pausing therapy if I believe that another form of support would be more appropriate, or if continuing would fall outside my professional scope of practice. Where appropriate, I will discuss this with you and may suggest that you seek support from another suitably qualified professional.",
        ],
    },
];

export default function FeesCancellationStylePreview() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">

            <section className="border-b border-[#EEE6DB] bg-[#FFFDF9] py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className={eyebrowClass}>Practical arrangements</p>
                    <h1 className="mt-5 max-w-4xl !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                        Fees & cancellation policy.
                    </h1>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                    {sections.map((section) => (
                        <article key={section.title} className="border-t border-[#D8D1C6] pt-6">
                            <h2 className={`${titleClass} text-3xl sm:text-4xl`}>{section.title}.</h2>
                            <div className="mt-5 space-y-4">
                                {section.body.map((paragraph, index) => (
                                    <p key={index} className={textClass}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <section className="mt-14 border-t border-[#D8D1C6] pt-8">
                    <p className={eyebrowClass}>Questions</p>
                    <h2 className={`${titleClass} mt-4 max-w-3xl`}>Ask before we begin.</h2>
                    <p className={`${textClass} mt-5 max-w-3xl`}>
                        If you have any questions about fees, payments, cancellations or any other practical
                        arrangements, please contact me at:
                    </p>
                    <p className="mt-4 text-base leading-7 text-[#5B554D]">
                        <Link href="mailto:contact@natasharussohypnotherapy.co.uk" className="font-semibold no-underline">
                            contact@natasharussohypnotherapy.co.uk
                        </Link>
                    </p>
                    <p className={`${textClass} mt-4 max-w-3xl`}>
                        Transparency is important, and I&apos;m happy to clarify anything before we begin.
                    </p>
                    <p className="mt-4 text-sm text-[#8A8174]">Last updated: 02.09.2026</p>
                </section>
            </section>
        </div>
    );
}
