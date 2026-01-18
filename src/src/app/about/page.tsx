import Image from "next/image";
import Link from "next/link";
import { Card } from "@/app/card";
import React from "react";

export default function About() {
    return (
        <section className="relative overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                aria-hidden
            />
            <div className="absolute inset-0 bg-white/35" aria-hidden />

            <div className="md:grid md:grid-cols-2 md:auto-rows-min">
                <div className="md:mt-15 mx-auto md:ml-5 md:row-start-1 md:col-start-1 w-full">
                    <div className="relative mx-auto w-[90%] sm:w-[75%] md:w-[85%] aspect-square overflow-hidden rounded-full border-2">
                        <Image
                            src="/about.webp"
                            alt="Natasha Russo"
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 40vw, 90vw"
                            priority
                        />
                    </div>
                </div>

                {/* Main text */}
                <div className="relative z-10 mt-5 md:mt-15 mx-auto max-w-5xl px-6 space-y-10 md:row-span-2 md:col-start-2">
                    <Card className="mx-auto md:ml-10">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            Meet Natasha
                        </h2>

                        <p className="mt-6 text-stone-700">
                            I’m Natasha, a cognitive-behavioural hypnotherapist with a background in psychology and a long-standing
                            interest in how people make sense of their inner experiences.
                        </p>
                        <p className="mt-6 text-stone-700">
                            I’m naturally curious about what goes on beneath the surface – particularly when thoughts feel repetitive,
                            confusing, or harder to manage than we’d like. I tend to work thoughtfully and deliberately, valuing
                            clarity, structure, and understanding over quick solutions or dramatic techniques.
                        </p>
                        <p className="mt-6 text-stone-700">
                            My aim is to offer a space that feels calm, steady and collaborative, where things can be explored without
                            pressure or judgement.
                        </p>
                    </Card>

                    <Card className="mt-15 mx-auto md:ml-10">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            How I came to this work
                        </h2>

                        <p className="mt-6 text-stone-700">
                            My interest in this work didn’t begin only in textbooks. Like many people, I’ve had periods of anxiety
                            myself – the kind where your mind feels busy, reactive, and difficult to settle, especially under
                            pressure.
                        </p>
                        <p className="mt-6 text-stone-700">
                            Not long before I trained formally, I found myself drawn to practical ways of working with attention and
                            awareness, including mindfulness-based approaches I explored on my own. What struck me was not just that
                            these methods helped, but why they helped.
                        </p>
                        <p className="mt-6 text-stone-700">
                            Alongside that, real-life stress, family life, and those familiar “I should be coping better than this”
                            moments deepened my understanding of how easily even capable people can feel overwhelmed – and how
                            unhelpful it can be when support focuses only on reassurance or advice.
                        </p>
                        <p className="mt-6 text-stone-700">
                            I became increasingly curious about what keeps people feeling stuck – why certain patterns of thought,
                            interpretation, and behaviour persist even when we understand them logically, and why stress or
                            uncertainty can make those patterns feel so much stronger.
                        </p>
                        <p className="mt-6 text-stone-700">
                            That curiosity led me to train in cognitive-behavioural hypnotherapy. The approach appealed to me because
                            it brings together evidence-based cognitive and behavioural principles with an understanding of attention,
                            expectation, and imagination, in a way that is structured, collaborative, and transparent.
                        </p>
                        <p className="mt-6 text-stone-700">
                            What mattered most to me was that this way of working doesn’t treat hypnosis as something done to a
                            person. Instead, it offers a practical framework for understanding how the mind works, and for learning
                            how to respond differently, with more choice and clarity.
                        </p>
                    </Card>
                </div>

                {/* My style */}
                <div className="relative z-10 mt-22 md:mt-0 mx-auto md:ml-5 md:row-start-2 md:col-start-1 w-full">
                    <Card className="h-full flex flex-col">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            My style
                        </h2>

                        <p className="mt-6 text-stone-700">
                            In sessions, you can expect a clear framework – so you understand why certain thoughts, feelings, or
                            responses show up – alongside practical tools that help you work with them more effectively, rather than
                            just talking in circles.
                        </p>

                        <p className="mt-6 text-stone-700">
                            I aim to create a way of working that feels steady and collaborative, without pressure to analyse
                            everything in depth or to ‘fix’ yourself in order to move forward. The focus is on understanding patterns,
                            experimenting with new responses, and finding what genuinely helps.
                        </p>

                        <p className="mt-6 text-stone-700">
                            You don’t need to arrive with everything neatly explained. We will work with what’s there, at a pace that
                            feels manageable for you.
                        </p>
                    </Card>
                </div>

                {/* Footer link */}
                <div className="relative z-10 mt-5 md:mt-15 md:col-span-2 px-6 mb-15">
                    <p className="mt-6 mx-auto text-stone-700 italic text-center max-w-xl">
                        If you’d like to understand more about how sessions work in practice,
                        <br />
                        you can read more on the
                        <Link href="/working-with-me" className="font-bold">
                            &nbsp;Working with me page.
                        </Link>
                    </p>
                </div>
            </div>
        </section>

    );
}
