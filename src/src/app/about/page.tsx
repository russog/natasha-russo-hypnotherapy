import Image from "next/image";
import Link from "next/link";
import {Card} from "@/app/components/card";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About me | Natasha Russo",
    description:
        "Meet Natasha Russo, Cognitive Behavioural Hypnotherapist. Learn about her background, approach, and therapeutic style.",
    alternates: { canonical: "/about" },
};

export default function About() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-5xl px-6 pt-10 text-center sm:pt-14">
                <h1 className="text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">About me</h1>
            </div>

            <div className="mt-8 sm:mt-10 md:grid md:grid-cols-2 md:auto-rows-min">
                <div className="md:mt-15 mx-auto md:ml-5 md:row-start-1 md:col-start-1 w-full flex justify-center">
                    <div className="relative w-[70%] sm:w-[60%] md:w-[52%] lg:w-[64%] aspect-[1/1.1] overflow-hidden rounded-lg border border-white/70 mt-3 shadow-[0_18px_45px_rgba(79,90,84,0.18)]">
                        <Image
                            src="/about-natasha-green-cardigan-sharp.webp"
                            alt="Natasha Russo"
                            fill
                            className="object-cover object-top"
                            sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 80vw"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-10 mt-5 md:mt-24 mx-auto max-w-5xl px-6 md:row-start-1 md:col-start-2">
                    <Card className="mx-auto md:ml-10">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            Meet Natasha
                        </h2>

                        <p className="mt-6 text-stone-700">
                            Hi, I’m Natasha — a cognitive-behavioural hypnotherapist.
                        </p>
                        <p className="mt-6 text-stone-700">
                            I’m someone who tends to listen carefully, think things through, and take people seriously.
                            I’m interested in how our inner worlds work, particularly when thoughts feel repetitive,
                            confusing, or harder to manage than we’d like.
                        </p>
                        <p className="mt-6 text-stone-700">
                            People who meet me often notice that I’m calm, attentive, and direct in a gentle way. I
                            value clarity and understanding over quick solutions or dramatic techniques.
                        </p>
                        <p className="mt-6 text-stone-700">
                            My aim is to offer a space that feels steady and respectful — somewhere you can slow things
                            down, think more clearly, and explore what’s going on without pressure or judgement.
                        </p>
                    </Card>
                </div>

                <div className="order-4 md:order-none mt-5 md:mt-15 mx-auto max-w-5xl px-6 md:row-start-2 md:col-start-1 md:w-full">
                    <Card className="h-full flex flex-col">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            My style
                        </h2>

                        <p className="mt-6 text-stone-700">
                            In sessions, I aim to offer a clear and steady way of working, so you can begin to
                            understand why certain thoughts, feelings, or responses keep showing up. We don’t just talk
                            things through for the sake of it — we look at what’s happening and gently work with it,
                            using practical tools that can make a real difference over time.
                        </p>

                        <p className="mt-6 text-stone-700">
                            My style is collaborative and thoughtful. There’s no pressure to analyse everything in
                            depth, no expectation that you need to “fix” yourself, and no requirement to arrive with
                            things neatly worked out.
                        </p>

                        <p className="mt-6 text-stone-700">
                            You’re welcome to bring whatever feels present — even if it’s unclear or messy. We take
                            things at a pace that feels manageable, experimenting carefully with new ways of responding
                            and noticing together what genuinely helps.
                        </p>

                        <p className="mt-6 text-stone-700">
                            If it feels helpful, we can begin with a <Link href="/contact" className="font-bold italic">free 20-minute initial chat</Link> to briefly discuss what&apos;s been going on for you and whether this approach sounds like it might be a helpful fit.
                        </p>
                    </Card>
                </div>

                <div className="order-3 md:order-none relative z-10 mt-5 md:mt-15 mx-auto max-w-5xl px-6 md:row-start-2 md:col-start-2">
                    <Card className="h-full flex flex-col mt-0 md:ml-10">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            How I came to this work
                        </h2>

                        <p className="mt-6 text-stone-700">
                            My route into this work developed gradually, shaped by both psychology training and
                            real-life experience.
                        </p>
                        <p className="mt-6 text-stone-700">
                            With a background in psychology, I’ve always been interested in how people think, interpret
                            their experiences, and respond under pressure. Over time, what stood out wasn’t diagnosis or
                            labels, but how easily capable, thoughtful people can become stuck in the same patterns of
                            worry, overthinking, or self-doubt — especially when life feels demanding.
                        </p>
                        <p className="mt-6 text-stone-700">
                            Earlier in my career, working in school settings with neurodivergent children reinforced how
                            much context, expectations, and environment shape how people cope, and how important it is
                            that support is flexible, respectful, and led by the individual.
                        </p>
                        <p className="mt-6 text-stone-700">
                            Alongside this, experiencing periods of anxiety and everyday stress myself made it clear
                            that reassurance or advice alone often isn’t enough. Understanding what’s happening and
                            learning how to respond differently — matters.
                        </p>
                        <p className="mt-6 text-stone-700">
                            Cognitive-behavioural hypnotherapy brought these strands together. It offered an
                            evidence-based, practical way of working with attention, thinking patterns, and responses,
                            without force or pressure — and that’s the framework I work from today.
                        </p>
                    </Card>
                </div>

                <div className="relative z-10 mt-5 md:mt-15 md:col-span-2 px-6">
                    <Card className="mx-auto max-w-5xl">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            Qualifications and professional memberships
                        </h2>

                        <p className="text-stone-700">
                            My professional background and training include:
                        </p>

                        <ul className="mt-5 list-disc space-y-3 pl-6 text-stone-700">
                            <li>BSc Psychology</li>
                            <li>MSc Cross-Cultural Psychology</li>
                            <li>Graduate Member of the British Psychological Society (BPS)</li>
                            <li>Level 5 Diploma in Cognitive Behavioural Hypnotherapy</li>
                            <li>
                                Cognitive Behavioural Hypnotherapy training completed with the UK College of Hypnosis
                                and Hypnotherapy on a BPS CPD-approved programme
                            </li>
                            <li>
                                Member of the{" "}
                                <Link
                                    href="https://www.the-ncip.org/member-of-ncip/natasha-russo?from=badge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    National Council of Integrative Psychotherapists
                                </Link>{" "}
                                (NCIP)
                            </li>
                        </ul>
                    </Card>
                </div>

                <div className="relative z-10 mt-5 md:mt-15 md:col-span-2 px-6 mb-10">
                    <p className="mt-6 mx-auto text-stone-700 italic text-center max-w-xl">
                        If you’d like to understand more about how sessions work in practice,
                        <br/>
                        you can read more on the{' '}
                        <Link href="/working-with-me" className="font-bold italic">
                            Working with me page.
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
