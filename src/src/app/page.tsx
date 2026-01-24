import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Card} from "@/app/components/card";
import ExpandableMiniCard from "@/app/components/ExpandableMiniCard";

export default function Home() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                 aria-hidden/>
            <div className="absolute inset-0 bg-white/35" aria-hidden/>
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mx-auto max-w-4xl text-3xl leading-tight tracking-tight text-neutral-800 sm:text-5xl">
                    Calm, evidence-based therapy
                    <br/>
                    for people whose minds feel busy, repetitive, or hard to switch off
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                    A thoughtful integration of cognitive-behavioural therapy, hypnotherapy, and mindfulness techniques – supporting clearer, more manageable change
                </p>
                <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Sessions are held online from the comfort of your own home
                </p>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/contact"
                        className="inlin e-flex items-center justify-center rounded-xl bg-neutral-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">
                        Book a free 20-minute chat
                    </Link>
                </div>
            </div>

        </section>
        <section className="py- sm:py-10">
            <div className="mx-auto max-w-5xl px-4">
                <div className="grid gap-8 md:grid-cols-[5fr_7fr] md:gap-12">
                    <div className="relative w-full aspect-4/5 md:aspect-auto md:h-100 md:row-start-1 md:col-start-1">
                        <Image
                            src="/me.webp"
                            alt="Natasha Russo"
                            width={267}
                            height={400}
                            className="rounded-sm"
                            sizes="(min-width: 768px) 50vw, 100vw"
                            priority
                        />
                    </div>
                    <div className="text-left md:row-start-1 md:col-start-2 space-y-6">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            My approach is grounded, practical, and collaborative
                        </h2>

                        <p className="mb-6 text-lg leading-relaxed text-neutral-700">
                            Sessions are structured, thoughtful and shaped around your goals. The work moves at a pace that feels manageable, with no expectation to explore anything before you are ready.
                        </p>

                        <p className="text-lg leading-relaxed text-neutral-700">
                            The focus is on making sense of what’s been going on for you and working together to find ways of responding that feel steadier and more deliberate.
                        </p>

                        <p className="text-lg leading-relaxed text-neutral-700">
                            <Link className="inlin e-flex items-center justify-center rounded-xl bg-neutral-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2" href={"/working-with-me"}>Learn more about how I work</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative pb-12 overflow-hidden isolate">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-top"
                 aria-hidden/>
            <div className="absolute inset-0 bg-white/35" aria-hidden/>

            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10">
                <Card>
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Does any of this sound familiar?
                    </h2>

                    <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You find yourself caught in cycles of worry, what-ifs, or worse-case thinking that are hard to interrupt
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
                You struggle to fully switch off or stay present, even when things are going well
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
                        className="w-full max-w-md rounded-lg">
                        <source src="/intro.mp4#t=1.400" type="video/mp4" />
                    </video>
                </div>

                <Card className="bg-white/70">
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        How I can help
                    </h2>

                    <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl">
                        I help adults make sense of difficulties that show up in thoughts, emotions, and everyday life, using practical, evidence-based approaches.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <ExpandableMiniCard
                            title="Anxiety"
                            body="Support to reduce ongoing worry, calm your nervous system, and feel more at ease day-to-day."
                            details={
                                <>
                                    <p>
                                        Anxiety doesn’t always look dramatic. For many people, it shows up as constant background worry, tension in the body, difficulty switching off, or a sense that something is always slightly’ wrong’, even when life looks fine on the outside.
                                    </p>
                                    <p className="mt-2">
                                        In my work, anxiety is approached by understanding what’s keeping it going – the patterns of thought, attention, and response that have developed over time. We work collaboratively to change how you relate to these patterns, so anxiety has less space to take over.
                                    </p>
                                </>
                            }
                        />
                        <ExpandableMiniCard
                            title="Overthinking"
                            body="Help stepping out of mental loops and developing a more flexible relationship with your thoughts."
                            details={
                                <>
                                    <p>
                                        Overthinking often isn’t about thinking too much – it’s about feeling stuck in the same thoughts. You might find your mind constantly analysing, replaying conversations, second-guessing decisions, or trying to anticipate every possible outcome. Even when you understand something logically, your mind doesn’t seem to let it go. Rest doesn’t always feel restful, because the thinking carries on in the background.
                                    </p>
                                    <p className="mt-2">
                                        I approach overthinking by understanding how patterns of attention and interpretation develop – and why the mind gets pulled back into the same loops. We work collaboratively to change how you relate to your thoughts, so they have less power to pull you in or run the show. The aim isn’t to stop thinking, but to develop more choice and flexibility in how you respond.
                                    </p>
                                </>
                            }
                        />
                        <ExpandableMiniCard
                            title="Confidence & self-doubt"
                            body="Support to build inner confidence, reduce self-criticism, and trust your own judgement more."
                            details={
                                <>
                                    <p>
                                        Confidence and self-doubt often show up internally rather than on the surface. You might appear capable and functioning, yet privately question your decisions, downplay your strengths, or feel unsure of yourself even when things are going well. You may find yourself comparing, over-preparing, or worrying about getting things ‘wrong’, while others assume you’re coping just fine.
                                    </p>
                                    <p className="mt-2">
                                        Here, with me, confidence is not treated as something you either have or don’t have. Instead, we look at the patterns of thinking, expectation, and self-evaluation that shape how you relate to yourself. By understanding how self-doubt is maintained, we work on developing a more balanced and realistic relationship with your thoughts – one that allows confidence to grow gradually, without pressure to ‘perform’ or push yourself beyond what feels manageable.
                                    </p>
                                </>
                            }
                        />

                    </div>


                </Card>

                <Card className="bg-emerald-50/50">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Areas people often seek support for
                    </h2>

                    <p className="mt-4 text-stone-700 leading-relaxed max-w-3xl">
                        People come to therapy for many different reasons. Often, what brings someone here is just the surface expression of deeper patterns that we can explore and work with together
                    </p>

                    <ul className="mt-6 space-y-4 text-stone-700">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Stress and life transitions</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Phobias and specific fears
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Habits you’d like to change</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Difficulty sleeping or switching off</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Difficulty being assertive, setting boundaries, or speaking up</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Feeling stuck, overwhelmed or emotionally drained</span>
                        </li>
                    </ul>

                    <p className="mt-6 text-stone-700 italic">
                        You are welcome to <Link href={"/contact"} className="font-semibold">get in touch,</Link>even if what you are dealing with doesn’t fit neatly into a box
                    </p>
                </Card>

                <Card className="bg-emerald-50/50">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        A calm, structured way of working
                    </h2>

                    <p className="mt-4 text-stone-700 leading-relaxed max-w-3xl">
                        I combine hypnotherapy with cognitive-behavioural approaches to help you understand what’s keeping difficulties going, develop practical skills, and move forward at a pace that feels right for you.
                    </p>

                    <ul className="mt-6 space-y-4 text-stone-700">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Make sense of what’s going on, and how certain patterns are being maintained</span>
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
                        Hypnotherapy here involves using your own focused attention and imagination in supportive ways – it is safe, evidence-based, and always led by you and your goals
                    </p>
                </Card>
            </div>
        </section>
    </>);
}

