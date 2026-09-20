"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    FiChevronLeft,
    FiChevronRight,
    FiCompass,
    FiHeadphones,
    FiMessageCircle,
    FiMoon,
    FiRepeat,
    FiSlash,
    FiTarget,
    FiWind,
} from "react-icons/fi";
import ExpandableMiniCard from "@/app/components/ExpandableMiniCard";

const familiar = [
    <>
        You find yourself caught in cycles of worry, what-ifs, or worst-case thinking that are hard to
        interrupt, and may find it difficult to step back from anxious thoughts when they feel so
        convincing.
    </>,
    <>You notice familiar patterns repeating, even when you understand them logically.</>,
    <>
        You struggle to fully switch off or stay present, even when things are going well.
    </>,
];

const helpCards = [
    {
        title: "Anxiety",
        text: "Support to reduce ongoing worry, calm your nervous system, and feel more at ease day-to-day.",
        iconName: "anxiety" as const,
        details: (
            <>
                <p>
                    Anxiety doesn&apos;t always look dramatic. For many people, it shows up as constant background worry,
                    tension in the body,{" "}
                    <Link href="/blog/why-switching-off-at-night-Is-harder-than-it-should-be" className="underline underline-offset-2 hover:no-underline">
                        difficulty switching off
                    </Link>
                    , or a sense that something is always slightly &apos;wrong&apos;, even when life looks fine on the outside.
                </p>
                <p className="mt-2">
                    In my work, anxiety is approached by understanding what&apos;s keeping it going - the patterns of
                    thought, attention, and response that have developed over time. This can include{" "}
                    <Link href="/blog/understanding-the-safety-behaviours-that-keep-anxiety-going" className="underline underline-offset-2 hover:no-underline">
                        safety behaviours that keep anxiety going
                    </Link>
                    . We work collaboratively to change how you relate to these patterns, so anxiety has less space to take over.
                </p>
            </>
        ),
    },
    {
        title: "Overthinking",
        text: "Help stepping out of mental loops and developing a more flexible relationship with your thoughts.",
        iconName: "overthinking" as const,
        details: (
            <>
                <p>
                    Overthinking often isn&apos;t about thinking too much - it&apos;s about feeling stuck in the same thoughts.
                    You might find your mind constantly analysing, replaying conversations, second-guessing decisions, or
                    trying to anticipate every possible outcome. Even when you understand something logically, your mind
                    doesn&apos;t seem to let it go. Rest doesn&apos;t always feel restful, because the thinking carries on in
                    the background. You can read more in{" "}
                    <Link href="/blog/when-thinking-becomes-overthinking" className="underline underline-offset-2 hover:no-underline">
                        When Thinking Becomes Overthinking
                    </Link>
                    .
                </p>
                <p className="mt-2">
                    I approach overthinking by understanding how patterns of attention and interpretation develop - and
                    why the mind gets pulled back into the{" "}
                    <Link href="/blog/why-overthinking-turns-toward-what-if-scenarios" className="underline underline-offset-2 hover:no-underline">
                        same overthinking loops
                    </Link>
                    . We work collaboratively to change how you relate to your thoughts, so they have less power to pull
                    you in or run the show. The aim isn&apos;t to stop thinking, but to develop more choice and flexibility
                    in how you respond.
                </p>
            </>
        ),
    },
    {
        title: "Confidence & self-doubt",
        text: "Support to build inner confidence, reduce self-criticism, and trust your own judgement more.",
        iconName: "confidence" as const,
        details: (
            <>
                <p>
                    <Link href="/blog/how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing" className="underline underline-offset-2 hover:no-underline">
                        Confidence
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/when-you-know-you-can-but-still-feel-unsure" className="underline underline-offset-2 hover:no-underline">
                        self-doubt
                    </Link>{" "}
                    often show up internally rather than on the surface. You might appear capable and functioning, yet
                    privately question your decisions, downplay your strengths, or feel unsure of yourself even when
                    things are going well. You may find yourself comparing, over-preparing, or worrying about getting
                    things &apos;wrong&apos;, while others assume you&apos;re coping just fine.
                </p>
                <p className="mt-2">
                    Many capable people also find themselves overlooking their own progress, quickly moving on from
                    achievements, or feeling as though what they have done is never quite enough. You can read more about
                    this in{" "}
                    <Link href="/blog/why-it-never-feels-like-enough" className="underline underline-offset-2 hover:no-underline">
                        Why It Never Feels Like Enough
                    </Link>
                    .
                </p>
                <p className="mt-2">
                    Here, with me, confidence is not treated as something you either have or don&apos;t have. Instead, we
                    look at the patterns of thinking, expectation, and self-evaluation that shape how you relate to
                    yourself. By understanding how self-doubt is maintained, we work on developing a more balanced and
                    realistic relationship with your thoughts - one that allows confidence to grow gradually, without
                    pressure to &apos;perform&apos; or push yourself beyond what feels manageable.
                </p>
                <p className="mt-2">
                    If you&apos;ve ever wondered why small everyday experiences can gradually shape confidence and
                    self-doubt, you may also find{" "}
                    <Link href="/blog/why-do-we-take-things-so-personally" className="underline underline-offset-2 hover:no-underline">
                        Why Do We Take Things So Personally?
                    </Link>{" "}
                    helpful.
                </p>
            </>
        ),
    },
];

const supportAreas = [
    { id: "stress", label: <>Stress and life transitions</>, icon: FiWind },
    { id: "fears", label: <>Managing specific fears</>, icon: FiTarget },
    { id: "habits", label: <>Habits you&apos;d like to change</>, icon: FiRepeat },
    { id: "smoking", label: <>Stopping smoking (<Link href="/smoking-cessation" className="underline underline-offset-2 hover:no-underline">smoking cessation</Link>)</>, icon: FiSlash },
    { id: "sleep", label: <>Difficulty sleeping or switching off</>, icon: FiMoon },
    { id: "assertiveness", label: <>Difficulty being assertive, setting boundaries, or speaking up</>, icon: FiMessageCircle },
    { id: "stuck", label: <>Feeling stuck, overwhelmed or emotionally drained</>, icon: FiCompass },
];

const testimonials = [
    {
        title: "Anxiety and overthinking",
        quote:
            "Natasha was calm, supportive, and completely non-judgemental. She taught me practical techniques that genuinely help when I feel anxious.",
        name: "L.W",
    },
    {
        title: "Assertiveness and communication",
        quote:
            "Our work on assertiveness gave me practical tools I still use today. Natasha combines warmth with real professionalism, and I'd happily recommend her.",
        name: "Su",
    },
    {
        title: "Feeling more in control",
        quote:
            "Natasha helped me feel safe, supported, and in control throughout. Her calm, professional approach gave me practical tools and powerful insights that led to real progress.",
        name: "S.C",
    },
    {
        title: "Letting go of guilt and pressure",
        quote:
            "I feel much less guilty when I want to relax. Natasha helped me set an achievable, realistic goal and was flexible with exercises, making sure I got the most from each session.",
        name: "I.D",
    },
];

export function HomeClient() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const activeTestimonial = testimonials[testimonialIndex];
    const showPreviousTestimonial = () => {
        setTestimonialIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    };
    const showNextTestimonial = () => {
        setTestimonialIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    };

    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">
            <section className="relative min-h-[680px] overflow-hidden border-b border-[#E7DDD2] bg-[#E9DFD2] md:hidden">
                <Image
                    src="/home-cosy-table.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="pointer-events-none object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBF8F2] via-[#FBF8F2]/88 to-[#FBF8F2]/18" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FBF8F2] to-transparent" />

                <div className="relative z-20 mx-auto grid max-w-6xl px-6 py-20">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7C766C]">
                            Cognitive behavioural hypnotherapy
                        </p>
                        <h1 className="mt-5 max-w-xl text-5xl leading-[0.98] text-[#292621]">
                            Support for adults experiencing anxiety, overthinking, or self-doubt.
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-7 text-[#524D45]">
                            Helping people understand and gradually change the patterns that keep unhelpful cycles going.
                        </p>
                        <p className="mt-3 max-w-lg text-base leading-7 text-[#615B52]">
                            A thoughtful integration of cognitive-behavioural therapy, hypnotherapy, and mindfulness
                            techniques - supporting clearer, more manageable change.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#4F5A54] px-5 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_34px_rgba(48,55,50,0.18)]"
                        >
                            Book a free 20-minute chat <FiChevronRight aria-hidden />
                        </Link>
                        <Link
                            href="/free-relaxation-audio"
                            className="mt-3 inline-flex items-center gap-2 rounded-sm border border-[#D8D1C6] bg-white/82 px-5 py-3 text-sm font-semibold text-[#3D3932] no-underline shadow-[0_14px_30px_rgba(52,44,35,0.10)]"
                        >
                            <FiHeadphones aria-hidden /> Free relaxation audio
                        </Link>
                        <p className="mt-5 max-w-md text-sm leading-6 text-[#615B52]">
                            Based in Putney, South West London, with online sessions available throughout the UK and
                            worldwide.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative min-h-[680px] overflow-hidden border-b border-[#E7DDD2] bg-[#E9DFD2] max-md:hidden">
                <Image
                    src="/home-cosy-table.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="pointer-events-none object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBF8F2] via-[#FBF8F2]/88 to-[#FBF8F2]/18" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FBF8F2] to-transparent" />

                <div className="relative z-20 mx-auto grid max-w-6xl px-6 py-20 md:grid-cols-[0.88fr_1.12fr] md:py-28">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7C766C]">
                            Cognitive behavioural hypnotherapy
                        </p>
                        <h1 className="mt-5 max-w-xl text-5xl leading-[0.98] text-[#292621] sm:text-6xl">
                            Support for adults experiencing anxiety, overthinking, or self-doubt.
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-7 text-[#524D45]">
                            Helping people understand and gradually change the patterns that keep unhelpful cycles going.
                        </p>
                        <p className="mt-3 max-w-lg text-base leading-7 text-[#615B52]">
                            A thoughtful integration of cognitive-behavioural therapy, hypnotherapy, and mindfulness
                            techniques - supporting clearer, more manageable change.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#4F5A54] px-5 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_34px_rgba(48,55,50,0.18)]"
                        >
                            Book a free 20-minute chat <FiChevronRight aria-hidden />
                        </Link>
                        <Link
                            href="/free-relaxation-audio"
                            className="mt-3 inline-flex items-center gap-2 rounded-sm border border-[#D8D1C6] bg-white/82 px-5 py-3 text-sm font-semibold text-[#3D3932] no-underline shadow-[0_14px_30px_rgba(52,44,35,0.10)] md:hidden"
                        >
                            <FiHeadphones aria-hidden /> Free relaxation audio
                        </Link>
                        <p className="mt-5 max-w-md text-sm leading-6 text-[#615B52]">
                            Based in Putney, South West London, with online sessions available throughout the UK and
                            worldwide.
                        </p>
                    </div>
                </div>

                <Link
                    href="/free-relaxation-audio"
                    className="pointer-events-auto absolute bottom-8 right-8 z-30 hidden w-64 items-center gap-4 rounded-sm border border-white/70 bg-white/88 p-4 text-left no-underline shadow-[0_18px_45px_rgba(52,44,35,0.12)] backdrop-blur-[1px] md:flex"
                >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFE7DC] text-[#4F5A54]">
                        <FiHeadphones aria-hidden />
                    </span>
                    <span className="block text-sm font-semibold text-[#3D3932]">Free relaxation audio</span>
                </Link>
            </section>

            <section className="border-y border-[#EEE6DB] bg-[#FFFDF9] py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                        Does any of this sound familiar?
                    </p>
                    <h2 className="mx-auto mt-4 max-w-3xl !font-sans text-center text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl">
                        If this resonates, it may be a sign that a different way of responding could help.
                    </h2>
                    <div className="mt-12 grid gap-0 divide-y divide-[#E7DDD2] md:grid-cols-3 md:divide-x md:divide-y-0">
                        {familiar.map((item, index) => (
                            <div key={index} className="px-8 py-4 text-center md:py-0">
                                <p className="mx-auto max-w-xs text-sm leading-6 text-[#625C53]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-end">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                            How I can help
                        </p>
                        <h2 className="mt-4 !font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl">
                            Support for thoughts, emotions, and everyday life.
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-base leading-7 text-[#5B554D]">
                            I support adults in managing difficulties that show up in thoughts, emotions, and everyday life,
                            using practical, evidence-based approaches.
                        </p>
                        <p className="text-base leading-7 text-[#5B554D]">
                            These approaches are typically suited to present-day difficulties and focus on helping you
                            change patterns in how you think and respond, rather than exploring past experiences in depth.
                        </p>
                    </div>
                </div>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {helpCards.map((card) => (
                        <ExpandableMiniCard
                            key={card.title}
                            title={card.title}
                            body={card.text}
                            details={card.details}
                            iconName={card.iconName}
                        />
                    ))}
                </div>
            </section>

            <section className="border-y border-[#EEE6DB] bg-[#FFFDF9] py-14">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                                Areas people often seek support from me
                            </p>
                            <h2 className="mt-4 !font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl">
                                Areas people often seek support from me
                            </h2>
                            <p className="mt-5 text-base leading-7 text-[#5B554D]">
                                People come to therapy for many different reasons. Often, what brings someone here is
                                part of a pattern that can be understood and changed.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {supportAreas.map(({ id, label, icon: Icon }) => (
                                <div key={id} className="flex items-center gap-4 border-b border-[#E6DDD1] pb-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8D1C6] text-[#4F5A54]">
                                        <Icon aria-hidden />
                                    </span>
                                    <p className="text-sm leading-5 text-[#5E584F]">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="mt-8 max-w-3xl text-sm italic leading-6 text-[#5B554D]">
                        You are welcome to <Link href="/contact" className="font-semibold">get in touch</Link> even if
                        what you are dealing with doesn&apos;t fit neatly into a box.
                    </p>
                </div>
            </section>

            <section className="relative isolate overflow-hidden border-b border-[#EEE6DB] bg-[#FBF8F2]">
                <div className="absolute inset-y-0 -right-36 z-0 w-full opacity-100 [mask-image:linear-gradient(to_right,transparent_0%,transparent_9%,black_25%,black_100%)] md:right-0 md:block md:w-[62%] md:opacity-25 md:[mask-image:none]">
                    <Image
                        src="/about-natasha-close-green.jpg"
                        alt=""
                        fill
                        sizes="(min-width: 768px) 62vw, 100vw"
                        className="object-cover object-center md:blur-[1px]"
                    />
                </div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(251,248,242,1)_0%,rgba(251,248,242,0.86)_18%,rgba(251,248,242,0.04)_34%,rgba(251,248,242,0)_43%)] md:hidden" />
                <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#FBF8F2] via-[#FBF8F2]/74 to-transparent md:hidden" />
                <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-[#FBF8F2] via-[#FBF8F2]/92 to-[#FBF8F2]/0 md:block" />
                <div className="absolute inset-y-0 left-0 z-10 hidden w-2/3 bg-[#FBF8F2]/25 md:block" />
                <div className="absolute inset-y-0 right-0 z-20 hidden [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)] md:block md:w-[48%]">
                    <Image
                        src="/about-natasha-close-green.jpg"
                        alt="Natasha Russo"
                        fill
                        sizes="(min-width: 768px) 48vw, 100vw"
                        className="object-cover object-center"
                    />
                </div>
                <div className="relative z-30 mx-auto grid min-h-[560px] max-w-6xl px-6 py-16 md:grid-cols-[0.62fr_0.38fr] md:items-center">
                    <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                            Grounded, practical, collaborative
                        </p>
                        <h2 className="mt-4 !font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl">
                            My approach is grounded, practical, and collaborative.
                        </h2>
                        <p className="mt-5 text-base leading-7 text-[#5B554D]">
                            Sessions are structured, thoughtful and shaped around your goals. The work moves at a pace
                            that feels manageable, with no expectation to explore anything before you are ready.
                        </p>
                        <p className="mt-4 text-base leading-7 text-[#5B554D]">
                            The focus is on understanding what&apos;s been going on for you and working together to find
                            ways of responding that feel steadier and more deliberate.
                        </p>
                        <Link href="/working-with-me" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold no-underline">
                            Learn more about how I work <FiChevronRight aria-hidden />
                        </Link>
                        <div className="relative mt-8 hidden h-72 overflow-hidden rounded-sm [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)]">
                            <Image
                                src="/about-natasha-close-green.jpg"
                                alt="Natasha Russo"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                        A calm, structured way of working
                    </p>
                    <h2 className="mt-4 max-w-3xl !font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl">
                        Develop practical skills, and move forward at a pace that feels right for you.
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-[#5B554D]">
                        I combine hypnotherapy with cognitive-behavioural approaches to help you understand what&apos;s
                        keeping difficulties going, develop practical skills, and move forward at a pace that feels
                        right for you.
                    </p>
                    <ul className="mt-9 grid gap-4 text-sm leading-6 text-[#5B554D] md:grid-cols-3">
                        <li className="border-t border-[#D8D1C6] pt-4">
                            Make sense of what&apos;s going on, and how certain patterns are being maintained.
                        </li>
                        <li className="border-t border-[#D8D1C6] pt-4">
                            Develop practical tools to work more effectively with your thoughts, emotions, and behaviours.
                        </li>
                        <li className="border-t border-[#D8D1C6] pt-4">
                            Feel supported, respected, and in control throughout the process.
                        </li>
                    </ul>
                    <p className="mt-8 max-w-3xl text-sm italic leading-6 text-[#5B554D]">
                        Hypnotherapy here involves using your own focused attention and imagination in supportive ways -
                        it is safe, evidence-based, and always led by you and your goals.
                    </p>
                </div>
            </section>

            <section className="border-t border-[#EEE6DB] bg-[#FFFDF9] py-14">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.4fr_0.6fr] md:items-center">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                            What clients say
                        </p>
                        <h2 className="mt-4 !font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl">
                            Client experiences
                        </h2>
                        <Link href="/testimonials" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold no-underline">
                            Read more in Client Testimonials <FiChevronRight aria-hidden />
                        </Link>
                    </div>
                    <div className="rounded-sm border border-[#E6DDD1] bg-[#FBF8F2] p-6 shadow-[0_18px_45px_rgba(52,44,35,0.05)]">
                        <blockquote>
                            <p className="text-sm font-semibold text-[#3D3932]">{activeTestimonial.title}</p>
                            <p className="mt-4 font-serif text-2xl italic leading-relaxed text-[#4D463E]">
                                &quot;{activeTestimonial.quote}&quot;
                            </p>
                            <p className="mt-5 text-xs font-semibold text-[#8A8174]">- {activeTestimonial.name}</p>
                        </blockquote>
                        <div className="mt-7 flex items-center justify-between border-t border-[#E6DDD1] pt-5">
                            <p className="text-xs text-[#8A8174]">
                                {testimonialIndex + 1} / {testimonials.length}
                            </p>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={showPreviousTestimonial}
                                    aria-label="Previous testimonial"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D1C6] text-[#4F5A54] transition hover:bg-[#F5F8F2]"
                                >
                                    <FiChevronLeft aria-hidden />
                                </button>
                                <button
                                    type="button"
                                    onClick={showNextTestimonial}
                                    aria-label="Next testimonial"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D1C6] text-[#4F5A54] transition hover:bg-[#F5F8F2]"
                                >
                                    <FiChevronRight aria-hidden />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
