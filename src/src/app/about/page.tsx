import Image from "next/image";
import Link from "next/link";
import {Card} from "@/app/components/card";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Natasha Russo",
    description:
        "Meet Natasha Russo, Cognitive Behavioural Hypnotherapist. Learn about her background, approach, and therapeutic style.",
    alternates: { canonical: "/about" },
};

export default function About() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-5xl px-6 pt-10 text-center sm:pt-14">
                <h1 className="text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">About</h1>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-10 md:grid-cols-2 md:items-start">
                    <div className="w-full flex justify-center md:justify-start">
                        <div className="relative w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] aspect-square overflow-hidden rounded-full border-2 mt-3">
                            <Image
                                src="/about.webp"
                                alt="Natasha Russo"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 80vw"
                                priority
                            />
                        </div>
                    </div>

                    <Card>
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

                <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-stretch">
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
                            If it feels helpful, we can begin with a{' '}
                            <Link href="/contact" className="font-bold italic">
                                Free 20-minute initial chat
                            </Link>
                        </p>
                    </Card>

                    <Card className="h-full flex flex-col">
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

                <div className="relative z-10 mt-5 md:mt-10 mb-10">
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
