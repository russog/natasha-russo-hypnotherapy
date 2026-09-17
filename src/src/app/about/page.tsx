import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About me | Natasha Russo",
    description:
        "Meet Natasha Russo, Cognitive Behavioural Hypnotherapist. Learn about her background, approach, and therapeutic style.",
    alternates: { canonical: "/about" },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";
const textClass = "text-base leading-7 text-[#5B554D]";

export default function AboutStylePreview() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">
            <script
                dangerouslySetInnerHTML={{
                    __html: "window.localStorage.setItem('natasha-russo-cookie-consent','declined');",
                }}
            />
            <style>{`[aria-label="Cookie notice"]{display:none!important;}`}</style>

            <section className="relative isolate overflow-hidden border-b border-[#E7DDD2] bg-[#EFE7DC]">
                <div className="absolute inset-0 z-0 opacity-100">
                    <Image
                        src="/about-new.jpg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[58%_24%]"
                    />
                </div>
                <div className="absolute inset-y-0 right-0 z-30 hidden w-[58%] [mask-image:linear-gradient(to_right,transparent_0%,black_14%,black_100%)] md:block">
                    <Image
                        src="/about-new.jpg"
                        alt="Natasha Russo"
                        fill
                        priority
                        sizes="58vw"
                        className="object-cover object-[58%_24%]"
                    />
                </div>
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#FBF8F2] via-[#FBF8F2]/86 to-[#FBF8F2]/12" />
                <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#FBF8F2] to-transparent" />
                <div className="relative z-40 mx-auto grid min-h-[640px] max-w-6xl px-6 py-20 md:grid-cols-[0.52fr_0.48fr] md:items-center">
                    <div>
                        <p className={eyebrowClass}>About me</p>
                        <h1 className="mt-5 max-w-xl !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                            Meet Natasha.
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-7 text-[#524D45]">
                            Hi, I&apos;m Natasha — a cognitive behavioural hypnotherapist.
                        </p>
                        <p className="mt-3 max-w-lg text-base leading-7 text-[#615B52]">
                            I offer a steady, respectful space where you can slow things down, think more clearly,
                            and explore what&apos;s going on without pressure or judgement.
                        </p>
                        <div className="relative mt-8 h-80 overflow-hidden rounded-sm [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)] md:hidden">
                            <Image
                                src="/about-new.jpg"
                                alt="Natasha Russo"
                                fill
                                sizes="100vw"
                                className="object-cover object-[50%_24%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#EEE6DB] bg-[#FFFDF9] py-16">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.42fr_0.58fr] md:items-start">
                    <div>
                        <p className={eyebrowClass}>Meet Natasha</p>
                        <h2 className={titleClass}>Calm, attentive, and direct in a gentle way.</h2>
                    </div>
                    <div className="space-y-5">
                        <p className={textClass}>
                            I&apos;m someone who tends to listen carefully, think things through, and take people
                            seriously. I&apos;m interested in how our inner worlds work, particularly when thoughts feel
                            repetitive, confusing, or harder to manage than we&apos;d like.
                        </p>
                        <p className={textClass}>
                            People who meet me often notice that I&apos;m calm, attentive, and direct in a gentle way. I
                            value clarity and understanding over quick solutions or dramatic techniques.
                        </p>
                        <p className={textClass}>
                            My aim is to offer a space that feels steady and respectful — somewhere you can slow things
                            down, think more clearly, and explore what&apos;s going on without pressure or judgement.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
                <article className="border-t border-[#D8D1C6] pt-8">
                    <p className={eyebrowClass}>My style</p>
                    <h2 className={titleClass}>A clear and steady way of working.</h2>
                    <div className="mt-6 space-y-5">
                        <p className={textClass}>
                            In sessions, I aim to offer a clear and steady way of working, so you can begin to
                            understand why certain thoughts, feelings, or responses keep showing up. We don&apos;t just
                            talk things through for the sake of it — we look at what&apos;s happening and gently work with
                            it, using practical tools that can make a real difference over time.
                        </p>
                        <p className={textClass}>
                            My style is collaborative and thoughtful. There&apos;s no pressure to analyse everything in
                            depth, no expectation that you need to “fix” yourself, and no requirement to arrive with
                            things neatly worked out.
                        </p>
                        <p className={textClass}>
                            You&apos;re welcome to bring whatever feels present — even if it&apos;s unclear or messy. We
                            take things at a pace that feels manageable, experimenting carefully with new ways of
                            responding and noticing together what genuinely helps.
                        </p>
                    </div>
                </article>

                <article className="border-t border-[#D8D1C6] pt-8">
                    <p className={eyebrowClass}>How I came to this work</p>
                    <h2 className={titleClass}>A route shaped by psychology and real-life experience.</h2>
                    <div className="mt-6 space-y-5">
                        <p className={textClass}>
                            My route into this work developed gradually, shaped by both psychology training and
                            real-life experience.
                        </p>
                        <p className={textClass}>
                            With a background in psychology, I&apos;ve always been interested in how people think,
                            interpret their experiences, and respond under pressure. Over time, what stood out wasn&apos;t
                            diagnosis or labels, but how easily capable, thoughtful people can become stuck in the same
                            patterns of worry, overthinking, or self-doubt — especially when life feels demanding.
                        </p>
                        <p className={textClass}>
                            Cognitive-behavioural hypnotherapy brought these strands together. It offered an
                            evidence-based, practical way of working with attention, thinking patterns, and responses,
                            without force or pressure — and that&apos;s the framework I work from today.
                        </p>
                    </div>
                </article>
            </section>

            <section className="border-y border-[#EEE6DB] bg-[#FFFDF9] py-14">
                <div className="mx-auto max-w-6xl px-6">
                    <p className={eyebrowClass}>Qualifications and professional memberships</p>
                    <h2 className={`${titleClass} mt-4 max-w-3xl`}>Professional background and training.</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-6 text-[#5B554D] md:grid-cols-2">
                        <li className="border-t border-[#D8D1C6] pt-4">BSc (Hons) Psychology (The Open University)</li>
                        <li className="border-t border-[#D8D1C6] pt-4">MSc Cross-Cultural Psychology (Brunel University)</li>
                        <li className="border-t border-[#D8D1C6] pt-4">Graduate Member of the British Psychological Society (BPS)</li>
                        <li className="border-t border-[#D8D1C6] pt-4">
                            Level 5 Diploma in Cognitive Behavioural Hypnotherapy.
                        </li>
                        <li className="border-t border-[#D8D1C6] pt-4 md:col-span-2">
                            Member of the National Council of Integrative Psychotherapists (NCIP).
                        </li>
                    </ul>
                    <p className="mt-10 max-w-xl text-sm italic leading-6 text-[#5B554D]">
                        If you&apos;d like to understand more about how sessions work in practice, you can read more on the{" "}
                        <Link href="/working-with-me" className="font-semibold no-underline">
                            Working with me page
                        </Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
