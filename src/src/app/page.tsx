import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Card} from "@/app/card";
import {MiniCard} from "@/app/miniCard";

export default function Home() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                 aria-hidden/>
            <div className="absolute inset-0 bg-white/35" aria-hidden/>
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mx-auto max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                    Calm, evidence-based hypnotherapy
                    <br/>
                    to help you worry less and live more
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Gentle, structured support for anxiety, overthinking, and confidence issues — online, from the
                    comfort of your own home.
                </p>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-neutral-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">
                        Book a free 20-minute chat
                    </Link>
                </div>
            </div>
        </section>

        <section className="py-6 sm:py-10">
            <div className="mx-auto max-w-5xl px-4">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
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
                    <div className="text-left md:row-start-1 md:col-start-2">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            I’m Natasha Russo, a cognitive behavioural hypnotherapist
                        </h2>

                        <p className="mb-6 text-lg leading-relaxed text-neutral-700">
                            I work in a calm, structured, and collaborative way, helping people
                            reduce anxiety, overthinking, and self-doubt using evidence-based
                            approaches.
                        </p>

                        <p className="text-lg leading-relaxed text-neutral-700">
                            Sessions are practical, focused, and adapted to your pace — with no
                            pressure to revisit anything you don’t want to.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-16 overflow-hidden isolate">
            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-top"
            />
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-b via-stone-50 to-emerald-50/40"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10">
                <Card>
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Does this sound familiar?
                    </h2>

                    <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You find yourself caught in cycles of worry, “what ifs”, or worst-case thinking.
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You feel stuck in patterns of anxiety, overthinking, or self-doubt that you’d really
                like to change.
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                You struggle to fully switch off or stay present, even when things are going well.
              </span>
                        </li>
                    </ul>

                    <p className="mt-6 text-center text-stone-700">
                        If any of this resonates, you’re not alone — and{" "}
                        <em className="not-italic font-medium">it doesn’t have to stay this way.</em>
                    </p>
                </Card>

                <Card className="bg-white/70">
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        How I can help
                    </h2>

                    <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl">
                        I work with adults who want practical, evidence-based support for emotional and
                        cognitive difficulties such as:
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <MiniCard
                            title="Anxiety"
                            body="Learn ways to calm your nervous system, reduce constant worry, and feel more at ease in everyday life."
                        />
                        <MiniCard
                            title="Overthinking"
                            body="Step out of rumination and mental loops, and develop a more balanced, flexible relationship with your thoughts."
                        />
                        <MiniCard
                            title="Confidence & self-doubt"
                            body="Build inner confidence, reduce self-criticism, and feel more able to trust yourself and your decisions."
                        />
                    </div>

                    <p className="mt-8 text-center text-stone-700">
                        If you recognise yourself here, we can explore this{" "}
                        <em className="not-italic font-medium">together</em>.
                    </p>
                </Card>

                <Card className="bg-emerald-50/50">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        A calm, structured way of working
                    </h2>

                    <p className="mt-4 text-stone-700 leading-relaxed max-w-3xl">
                        My approach is grounded, collaborative, and tailored to you. I combine hypnotherapy
                        with proven cognitive-behavioural techniques to help you understand your patterns,
                        develop practical skills, and create lasting change — at a pace that feels right for you.
                    </p>

                    <ul className="mt-6 space-y-4 text-stone-700">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Understand the root of your concerns and how they’re maintained.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>
                Develop practical tools to manage thoughts, emotions, and behaviours more effectively.
              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Feel supported, respected, and in control throughout the process.</span>
                        </li>
                    </ul>

                    <p className="mt-6 text-stone-700">
                        Sessions are focused and <em className="not-italic font-medium">structured</em>, with no
                        pressure to revisit anything you’re not ready to explore.
                    </p>
                </Card>
            </div>
        </section>
    </>);
}

