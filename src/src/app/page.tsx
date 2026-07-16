import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import {Card} from "@/app/components/card";
import ExpandableMiniCard from "@/app/components/ExpandableMiniCard";
import { FiCompass, FiMessageCircle, FiMoon, FiRepeat, FiSlash, FiTarget, FiWind } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Cognitive Behavioural Hypnotherapy | Natasha Russo",
    description:
        "Calm, evidence-based cognitive behavioural hypnotherapy for anxiety, overthinking, confidence and emotional wellbeing.",
    alternates: { canonical: "/" },
};

export default function Home() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mx-auto max-w-5xl text-3xl leading-tight tracking-tight text-neutral-800 sm:text-5xl">
                    Support for adults experiencing
                    <br />
                    anxiety, overthinking, or self-doubt
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                    A thoughtful integration of cognitive-behavioural therapy, hypnotherapy, and mindfulness techniques
                    - supporting clearer, more manageable change
                </p>
                <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                    Helping people understand and gradually change the patterns that keep unhelpful cycles going
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Based in Putney, South West London, with{" "}
                    <Link href="/working-with-me#format" className="underline underline-offset-2 hover:no-underline">online sessions available throughout the UK and worldwide</Link>.
                </p>
                <p className="mx-auto mt-1 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    - Supporting you to work from a space where you already feel comfortable and at ease.
                </p>
                <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    <Link href="/free-relaxation-audio" className="underline underline-offset-2 hover:no-underline">Free relaxation audio</Link>
                </p>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-[#4F5A54] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3F4843] focus:outline-none focus:ring-2 focus:ring-[#8EA095] focus:ring-offset-2">
                        Book a free 20-minute chat
                    </Link>
                </div>
            </div>

        </section>
        <section className="py-10 sm:py-14 relative z-10">
            <div className="mx-auto max-w-5xl px-4">
                <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-12 md:items-start">
                    <div className="flex md:block justify-center">
                        <div
                            className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden rounded-lg border border-white/70 shadow-[0_18px_45px_rgba(79,90,84,0.18)] md:row-start-1 md:col-start-1">
                            <Image
                                src="/about-new.jpg"
                                alt="Natasha Russo"
                                fill
                                sizes="(min-width: 768px) 40vw, 80vw"
                                className="object-cover object-[50%_32%]"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 text-left">
                        <h2 className="text-3xl sm:text-4xl font-medium leading-snug ">
                            My approach is grounded, practical, and collaborative
                        </h2>

                        <p className="text-lg leading-relaxed">
                            Sessions are structured, thoughtful and shaped around your goals. The work moves at a pace
                            that feels manageable, with no expectation to explore anything before you are ready.
                        </p>

                        <p className="text-lg leading-relaxed">
                            The focus is on understanding what's been going on for you and working together to find
                            ways of responding that feel steadier and more deliberate.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/working-with-me"
                                className="inline-flex items-center justify-center rounded-lg bg-[#4F5A54] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3F4843] focus:outline-none focus:ring-2 focus:ring-[#8EA095] focus:ring-offset-2"
                            >
                                Learn more about how I work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative pb-12 overflow-hidden isolate">

            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10 mt-5">
                <Card>
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Does any of this sound familiar?
                    </h2>

                    <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You find yourself caught in <Link href="/blog/why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it" className="underline underline-offset-2 hover:no-underline">cycles of worry</Link>, what-ifs, or worst-case thinking that are hard to interrupt, and may recognise <Link href="/blog/why-anxiety-feels-so-convincing-and-how-it-starts-to-loosen" className="underline underline-offset-2 hover:no-underline">why anxiety can feel so convincing</Link>
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You notice familiar patterns repeating, even when you understand them logically
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You struggle to fully <Link href="/blog/when-everything-feels-like-it-needs-your-attention" className="underline underline-offset-2 hover:no-underline">switch off</Link> or stay present, even when things are going well
              </span>
                        </li>
                    </ul>

                    <p className="mt-6 text-center text-stone-700 italic">
                        If this resonates, it may be a sign that a different way of responding could help
                    </p>


                </Card>

                <div>
                    <video
                        playsInline
                        webkit-playsinline="true"
                        muted
                        loop
                        controls
                        preload="metadata"
                        poster="/intro-poster-openeyes.jpg?v=7"
                        className="w-full max-w-sm rounded-lg">
                        <source src="/intro.mp4?v=7" type="video/mp4"/>
                    </video>
                </div>

                <div id="support-icons" className="scroll-mt-8">
                <Card className="bg-[#F3F8F2]/90">
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        How I can help
                    </h2>

                    <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl">
                        I support adults in managing difficulties that show up in thoughts, emotions, and everyday life,
                        using practical, evidence-based approaches. These approaches are typically suited to present-day difficulties and focus on helping you change patterns in how you think and respond, rather than exploring past experiences in depth.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <ExpandableMiniCard
                            title="Anxiety"
                            iconName="anxiety"
                            body="Support to reduce ongoing worry, calm your nervous system, and feel more at ease day-to-day."
                            details={
                                <>
                                    <p>
                                        Anxiety doesn't always look dramatic. For many people, it shows up as constant
                                        background worry, tension in the body, <Link href="/blog/why-switching-off-at-night-Is-harder-than-it-should-be" className="underline underline-offset-2 hover:no-underline">difficulty switching off</Link>, or a sense that
                                        something is always slightly 'wrong', even when life looks fine on the outside.
                                    </p>
                                    <p className="mt-2">
                                        In my work, anxiety is approached by understanding what's keeping it going - the
                                        patterns of thought, attention, and response that have developed over time. This can include{' '}
                                        <Link href="/blog/understanding-the-safety-behaviours-that-keep-anxiety-going" className="underline underline-offset-2 hover:no-underline">safety behaviours that keep anxiety going</Link>. We
                                        work collaboratively to change how you relate to these patterns, so anxiety has
                                        less space to take over.
                                    </p>
                                </>
                            }
                        />
                        <ExpandableMiniCard
                            title="Overthinking"
                            iconName="overthinking"
                            body="Help stepping out of mental loops and developing a more flexible relationship with your thoughts."
                            details={
                                <>
                                    <p>
                                        Overthinking often isn't about thinking too much - it's about feeling stuck in
                                        the same thoughts. You might find your mind constantly analysing, replaying
                                        conversations, second-guessing decisions, or trying to anticipate every possible
                                        outcome. Even when you understand something logically, your mind doesn't seem to
                                        let it go. Rest doesn't always feel restful, because the thinking carries on in
                                        the background. You can read more in <Link href="/blog/when-thinking-becomes-overthinking" className="underline underline-offset-2 hover:no-underline">When Thinking Becomes Overthinking</Link>.
                                    </p>
                                    <p className="mt-2">
                                        I approach overthinking by understanding how patterns of attention and
                                        interpretation develop - and why the mind gets pulled back into the <Link href="/blog/why-overthinking-turns-toward-what-if-scenarios" className="underline underline-offset-2 hover:no-underline">same overthinking loops</Link>.
                                        We work collaboratively to change how you relate to your thoughts, so they have
                                        less power to pull you in or run the show. The aim isn't to stop thinking, but
                                        to develop more choice and flexibility in how you respond.
                                    </p>
                                </>
                            }
                        />
                        <ExpandableMiniCard
                            title="Confidence & self-doubt"
                            iconName="confidence"
                            body="Support to build inner confidence, reduce self-criticism, and trust your own judgement more."
                            details={
                                <>
                                    <p>
                                        <Link href="/blog/how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing" className="underline underline-offset-2 hover:no-underline">Confidence</Link> and <Link href="/blog/when-you-know-you-can-but-still-feel-unsure" className="underline underline-offset-2 hover:no-underline">self-doubt</Link> often show up internally rather than on the surface.
                                        You might appear capable and functioning, yet privately question your decisions,
                                        downplay your strengths, or feel unsure of yourself even when things are going
                                        well. You may find yourself comparing, over-preparing, or worrying about getting
                                        things 'wrong', while others assume you're coping just fine.
                                    </p>
                                    <p className="mt-2">
                                        Many capable people also find themselves overlooking their own progress, quickly
                                        moving on from achievements, or feeling as though what they have done is never
                                        quite enough. You can read more about this in <Link href="/blog/why-it-never-feels-like-enough" className="underline underline-offset-2 hover:no-underline">Why It Never Feels Like Enough</Link>.
                                    </p>
                                    <p className="mt-2">
                                        Here, with me, confidence is not treated as something you either have or don't
                                        have. Instead, we look at the patterns of thinking, expectation, and
                                        self-evaluation that shape how you relate to yourself. By understanding how
                                        self-doubt is maintained, we work on developing a more balanced and realistic
                                        relationship with your thoughts - one that allows confidence to grow gradually,
                                        without pressure to 'perform' or push yourself beyond what feels manageable.
                                    </p>
                                    <p className="mt-2">
                                        If you’ve ever wondered why small everyday experiences can gradually shape
                                        confidence and self-doubt, you may also find this article helpful:{" "}
                                        <Link
                                            href="/blog/why-do-we-take-things-so-personally"
                                            className="underline underline-offset-2 hover:no-underline"
                                        >
                                            Why Do We Take Things So Personally?
                                        </Link>
                                    </p>
                                </>
                            }
                        />

                    </div>


                </Card>
                </div>

                <div id="support-list" className="scroll-mt-8">
                <Card className="bg-[#F7F4EE]/90">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Areas people often seek support for
                    </h2>

                    <p className="mt-4 text-stone-700 leading-relaxed max-w-3xl">
                        People come to therapy for many different reasons. Often, what brings someone here is part of a
                        pattern that can be understood and changed using practical cognitive and behavioural strategies.
                    </p>

                    <ul className="mt-6 space-y-4 text-stone-700">
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiWind className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Stress and life transitions</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiTarget className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Managing specific fears
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiRepeat className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Habits you'd like to change</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiSlash className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Stopping smoking (<Link href="/smoking-cessation" className="underline underline-offset-2 hover:no-underline">smoking cessation</Link>)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiMoon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Difficulty sleeping or <Link href="/blog/why-switching-off-at-night-Is-harder-than-it-should-be" className="underline underline-offset-2 hover:no-underline">switching off</Link></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiMessageCircle className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Difficulty <Link href="/blog/why-it-is-sometimes-hard-to-say-or-do-what-you-want-assertiveness-in-everyday-life" className="underline underline-offset-2 hover:no-underline">being assertive</Link>, setting boundaries, or speaking up</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <FiCompass className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span><Link href="/blog/feeling-stuck-even-when-trying-to-move-forward" className="underline underline-offset-2 hover:no-underline">Feeling stuck</Link>, overwhelmed or <Link href="/blog/why-do-capable-people-feel-mentally-exhausted-even-when-they-are-coping" className="underline underline-offset-2 hover:no-underline">emotionally drained</Link></span>
                        </li>
                    </ul>

                    <p className="mt-6 text-stone-700 italic">
                        You are welcome to <Link href={"/contact"} className="font-semibold italic">get in touch</Link> even
                        if
                        what you are dealing with doesn't fit neatly into a box.
                    </p>
                </Card>
                </div>

                <Card className="border-[#CFAF94] bg-[#ECD9C7]/96 shadow-[0_18px_42px_rgba(112,87,65,0.13)]">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        A calm, structured way of working
                    </h2>

                    <p className="mt-4 text-stone-700 leading-relaxed max-w-3xl">
                        I combine hypnotherapy with cognitive-behavioural approaches to help you understand what's
                        keeping difficulties going, develop practical skills, and move forward at a pace that feels
                        right for you.
                    </p>

                    <ul className="mt-6 space-y-4 text-stone-700">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Make sense of what's going on, and how certain patterns are being maintained</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Develop practical tools to work more effectively with your thoughts, emotions, and behaviours
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Feel supported, respected, and in control throughout the process</span>
                        </li>
                    </ul>

                    <p className="mt-6 text-stone-700 italic">
                        Hypnotherapy here involves using your own focused attention and imagination in supportive ways -
                        it is safe, evidence-based, and always led by you and your goals.
                    </p>
                </Card>

                <Card className="border-[#EEE4DF] !bg-[#FCF5F1] shadow-[0_18px_42px_rgba(112,82,68,0.04)]">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        What clients say
                    </h2>

                    <p className="mt-4 text-stone-700 font-medium">Anxiety and overthinking</p>
                    <p className="mt-2 text-stone-700 italic max-w-3xl">
                        “Natasha was calm, supportive, and completely non-judgemental. She taught me practical techniques that genuinely help when I feel anxious.”
                        <br />— L.W
                    </p>

                    <p className="mt-4 text-stone-700 font-medium">Assertiveness and communication</p>
                    <p className="mt-2 text-stone-700 italic max-w-3xl">
                        “Our work on assertiveness gave me practical tools I still use today. Natasha combines warmth with real professionalism, and I’d happily recommend her.”
                        <br />— Su
                    </p>

                    <p className="mt-4 text-stone-700 font-medium">Feeling more in control</p>
                    <p className="mt-2 text-stone-700 italic max-w-3xl">
                        “Natasha helped me feel safe, supported, and in control throughout. Her calm, professional approach gave me practical tools and powerful insights that led to real progress.”
                        <br />— S.C
                    </p>

                    <p className="mt-4 text-stone-700 font-medium">Letting go of guilt and pressure</p>
                    <p className="mt-2 text-stone-700 italic max-w-3xl">
                        “I feel much less guilty when I want to relax. Natasha helped me set an achievable, realistic goal and was flexible with exercises, making sure I got the most from each session.”
                        <br />— I.D
                    </p>
                    <p className="mt-6 text-stone-700 italic">
                        Read more in <Link
                        href="/testimonials">
                        Client Testimonials
                    </Link>
                    </p>
                </Card>
            </div>
        </section>
    </>);
}
