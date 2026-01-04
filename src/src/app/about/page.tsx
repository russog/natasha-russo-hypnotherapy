import Image from "next/image";
import Link from "next/link";
import {Card} from "@/app/card";
import {MiniCard} from "@/app/miniCard";
import React from "react";

export default function About() {
    return (<>

        <section className="relative overflow-hidden">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                 aria-hidden/>
            <div className="absolute inset-0 bg-white/35" aria-hidden/>
            <div className="md:grid md:grid-cols-2">
                <div className="md:mt-10 ml-5">
                    <div className="relative w-full aspect-square overflow-hidden rounded-full">
                        <Image
                            src="/about.webp"
                            alt="Natasha Russo"
                            fill
                            className="object-cover fixed"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-10 mt-5 md:mt-15 mx-auto max-w-5xl px-6 space-y-10">
                    <Card>
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            Meet Natasha
                        </h2>

                        <p className="mt-6 text-stone-700">
                            I’m Natasha — a cognitive-behavioural hypnotherapist who works with people whose minds never
                            quite seem to switch off, and whose inner worlds can feel busy or hard to quiet.

                            Many of the people I work with are used to holding things together on the outside, while
                            privately feeling stuck in loops of worry, overthinking, or quiet self-doubt. My role isn’t
                            to tell you what to think or how to “fix” yourself, but to help you understand what’s going
                            on and find ways of responding that feel steadier and more manageable.

                        </p>
                    </Card>
                    <Card className="md:mt-20">
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            How I came to this work
                        </h2>

                        <p className="mt-6 text-stone-700">
                            I’ve always been curious about why we think, feel, and behave the way we do. That curiosity
                            led me to study psychology, completing a Bachelor of Science in Psychology followed by a
                            Master’s degree in Cross-Cultural Psychology, exploring how beliefs, identity, and
                            environment shape our experience of the world.

                            Like many people, my interest in how the mind works didn’t stay theoretical. Real-life
                            stress, family life, and those familiar “I should be coping better than this” moments
                            deepened my understanding of how easily even capable people can feel overwhelmed — and how
                            unhelpful it can be when support focuses only on reassurance or advice.

                            That combination of academic training and lived experience is what shaped how I work today:
                            practical, grounded, and collaborative.

                        </p>
                    </Card>

                </div>

                <div className="relative z-10 mt-5 md:mt-5 mx-auto max-w-5xl px-6 space-y-10">
                    <Card>
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            My style
                        </h2>

                        <p className="mt-6 text-stone-700">
                            In sessions, you can expect a clear framework — so you understand why you feel the way you
                            do — alongside practical tools that help you work with your thoughts and emotions more
                            effectively, rather than just talking in circles.

                            My style is warm, honest, and collaborative, with a touch of wry humour where it fits. I
                            take the work seriously, but not the idea that you need to be endlessly analysed or “fixed”
                            in order to move forward.

                            You don’t need to arrive with everything neatly explained. You’re welcome to bring the mess,
                            the doubts, and the thoughts you’re not proud of. We’ll work with all of it, at a pace that
                            feels safe and manageable for you.


                        </p>
                    </Card>
                </div>

                <div className="relative z-10 mt-5 md:mt-20 mx-auto max-w-5xl px-6 space-y-10">
                    <Card>
                        <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                            Where next
                        </h2>

                        <p className="mt:5 md:mt-6 text-stone-700">
                            If you’d like to understand more about how sessions work in practice, you can read more on
                            the<Link href={"/working-with-me"} className="font-bold">&nbsp;working with me page</Link>.

                        </p>
                    </Card>
                </div>
            </div>
            <div className="mb-20"></div>


        </section>

    </>);
}
