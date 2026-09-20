import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Working with me",
    description:
        "Learn how sessions work, what to expect, confidentiality, format and fees for cognitive behavioural hypnotherapy.",
    alternates: { canonical: "/working-with-me" },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";
const textClass = "text-base leading-7 text-[#5B554D]";

const steps = [
    ["1) Initial contact", "You’re welcome to get in touch by email or book a brief introductory conversation. This is a chance to ask questions, get a sense of how I work, and decide whether it feels like a good fit — with no pressure to commit."],
    ["2) First session: understanding and focus", "The first session is slightly longer and gives us time to understand what has been happening for you, what you would like help with, and how we might work together. We begin shaping a clear focus at a pace that feels manageable."],
    ["3) Ongoing sessions: working with patterns", "Subsequent sessions focus on actively working with thoughts, emotions, and behavioural responses. We use practical, evidence-based methods, both in session and, where helpful, through small reflections or experiments between sessions."],
    ["4) Reviewing and adjusting", "We regularly pause to review how the work is going — what is helping, what feels less useful, and whether anything needs adjusting. The process remains collaborative and responsive to you."],
    ["5) Finishing well", "Endings are planned thoughtfully, with an emphasis on consolidating learning, strengthening confidence, and supporting your independence beyond therapy."],
];

const formatItems = [
    {
        title: "Number of sessions",
        body: "Many people find that around 5-6 sessions are enough to work through a specific difficulty, though this varies depending on what you are bringing and how you’d like to work.",
    },
    {
        title: "Session length",
        body: "Standard sessions are 60 minutes.",
    },
    {
        title: "First session",
        body: "Approximately 90 minutes, allowing time to understand what has been happening for you and agree a clear focus for our work.",
    },
    {
        title: "Frequency",
        body: "Sessions are often weekly to begin with, as this supports continuity while allowing time to reflect and try things out between meetings.",
    },
    {
        title: "Between-session work",
        body: "There may be simple things to notice or try between sessions. These are collaborative, manageable, and always agreed together.",
    },
    {
        title: "Format",
        body: "Sessions are held online via secure video, so you can take part from your own space. Many people find that being in a familiar environment makes it easier to settle into the process and engage with the work. The sessions remain structured and focused, in the same way as they would be in person.",
    },
];

export default function WorkingWithMe() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">

            <section className="relative isolate overflow-hidden border-b border-[#E7DDD2] bg-[#EFE7DC]">
                <div className="working-hero-background-soft absolute inset-y-0 -right-28 z-0 w-full opacity-100 [mask-image:linear-gradient(to_right,transparent_0%,transparent_5%,black_18%,black_100%)] sm:-right-20 md:inset-0 md:w-auto md:[mask-image:linear-gradient(to_right,transparent_0%,transparent_20%,black_44%,black_100%)]">
                    <Image src="/working-with-me-inline.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[74%_18%] md:object-[68%_20%]" />
                </div>
                <div className="working-hero-sharp-photo absolute inset-y-0 right-0 z-30 hidden w-[60%] md:block">
                    <Image src="/working-with-me-inline.jpg" alt="Natasha Russo in session" fill priority sizes="60vw" className="object-cover object-[72%_top] contrast-[1.05] saturate-[1.04]" />
                </div>
                <div className="absolute inset-0 z-20 bg-[linear-gradient(to_right,rgba(251,248,242,1)_0%,rgba(251,248,242,0.86)_22%,rgba(251,248,242,0.08)_39%,rgba(251,248,242,0)_51%)] md:hidden" />
                <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#EFE7DC] via-[#EFE7DC]/74 to-transparent md:hidden" />
                <div className="absolute inset-0 z-20 hidden bg-gradient-to-r from-[#FBF8F2] via-[#FBF8F2]/88 to-[#FBF8F2]/10 md:block" />
                <div className="absolute inset-x-0 bottom-0 z-20 hidden h-24 bg-gradient-to-t from-[#FBF8F2] to-transparent md:block" />
                <div className="relative z-40 mx-auto grid min-h-[580px] max-w-6xl px-6 py-20 md:grid-cols-[0.54fr_0.46fr] md:items-center">
                    <div>
                        <p className={eyebrowClass}>Working with me</p>
                        <h1 className="mt-5 max-w-[15rem] !font-sans text-[2rem] font-semibold leading-[1.04] tracking-normal text-[#1F1D19] sm:max-w-2xl sm:text-6xl sm:leading-[0.98]">
                            A structured and collaborative process.
                        </h1>
                        <p className="mt-14 max-w-xl text-lg font-medium leading-7 text-[#1F1D19] md:mt-6 md:font-normal md:text-[#524D45]">
                            This page gives a clear sense of how sessions usually unfold, what the process involves,
                            and how we each contribute to the work.
                        </p>
                        <div className="relative mt-8 hidden h-72 overflow-hidden rounded-sm [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)]">
                            <Image src="/working-with-me-inline.jpg" alt="Natasha Russo in session" fill sizes="100vw" className="object-cover object-[68%_top] contrast-[1.05] saturate-[1.04]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <p className={eyebrowClass}>How the work usually unfolds</p>
                <h2 className={`${titleClass} mt-4 max-w-3xl`}>A clear path, with room to adjust.</h2>
                <div className="mt-10 grid gap-5 md:grid-cols-5">
                    {steps.map(([title, body]) => (
                        <article key={title} className="border-t border-[#D8D1C6] pt-5">
                            <h3 className="!font-sans text-xl font-semibold leading-tight tracking-normal text-[#1F1D19]">{title}</h3>
                            <p className="mt-4 text-sm leading-6 text-[#5B554D]">{body}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-[#EEE6DB] bg-[#FFFDF9] py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div>
                        <p className={eyebrowClass}>Your role and my role</p>
                        <h2 className={titleClass}>Structure, guidance, curiosity and honesty.</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            <p className={textClass}>
                                <em>My role</em> is to provide structure, guidance, and evidence-based methods to help you
                                understand and change unhelpful patterns.
                            </p>
                            <p className={textClass}>
                                <em>Your role</em> is to bring curiosity, honesty, and a willingness to experiment – even
                                when things feel uncertain or imperfect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <p className={eyebrowClass}>Session format and structure</p>
                <h2 className={`${titleClass} mt-4 max-w-3xl`}>What to expect practically.</h2>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {formatItems.map((item) => (
                        <p key={item.title} className="border-t border-[#D8D1C6] pt-4 text-sm leading-6 text-[#5B554D]">
                            <strong>{item.title}:</strong> {item.body}
                        </p>
                    ))}
                </div>
                <p className="mt-8 max-w-3xl text-sm italic leading-6 text-[#5B554D]">
                    Hypnosis is used as a brief, focused technique to support cognitive and behavioural strategies - for
                    example, to practise new responses or strengthen helpful coping skills. If you&apos;d like a brief
                    explanation of how it&apos;s used in my practice, you can read more in the{" "}
                    <Link href="/faq" className="font-semibold">FAQs</Link>.
                </p>
                <p className="mt-10 max-w-3xl text-sm italic leading-6 text-[#5B554D]">
                    The process usually begins with a <Link href="/contact" className="font-semibold">free 20-minute initial chat</Link>, allowing us to consider whether this type of structured support is likely to be suitable before arranging a first session.
                </p>
            </section>

            <section className="border-y border-[#EEE6DB] bg-[#FFFDF9] py-16">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
                    <article>
                        <p className={eyebrowClass}>Confidentiality & suitability</p>
                        <h2 className={titleClass}>Clear, respectful boundaries.</h2>
                        <p className={`${textClass} mt-6`}>
                            What you share in sessions is treated as confidential. In most circumstances, what we discuss
                            stays between us. There are a small number of legal and ethical exceptions to confidentiality
                            — for example, if there is a serious risk of harm to you or someone else. These limits are
                            discussed clearly at the start, so you know where you stand.
                        </p>
                        <p className={`${textClass} mt-5`}>
                            For further details, please refer to my{" "}
                            <Link href="/privacy-policy" className="font-semibold">
                                Privacy Notice
                            </Link>.
                        </p>
                        <p className={`${textClass} mt-5`}>
                            Different approaches suit different people, and part of the process is making sure this way
                            of working feels like a good fit for you. If you are unsure whether this is right for you,
                            we can discuss it in an initial conversation. Where longer-term or specialist support would
                            be more appropriate, this can also be discussed during the consultation.
                        </p>
                    </article>
                    <article>
                        <p className={eyebrowClass}>Fees</p>
                        <h2 className={titleClass}>Simple session fees.</h2>
                        <ul className="mt-8 space-y-4 text-[#5B554D]">
                            <li>Standard sessions (60 minutes): <strong>£60</strong></li>
                            <li>First session (90 minutes): <strong>£90</strong></li>
                            <li>Block of 4 sessions: <strong>£220</strong></li>
                        </ul>
                        <p className={`${textClass} mt-6`}>
                            Fees are payable in advance. Cancellation arrangements are outlined clearly before we begin.
                            For full details, please refer to the{" "}
                            <Link href="/fees-cancellation" className="font-semibold">
                                Fees &amp; Cancellation Policy
                            </Link>.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
}
