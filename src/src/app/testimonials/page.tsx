import Link from "next/link";
import {Card} from "@/app/components/card";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Testimonials",
    description:
        "Read client testimonials for Natasha Russo Hypnotherapy, including experiences with anxiety, assertiveness, and confidence support.",
    alternates: { canonical: "/testimonials" },
};

export default function WorkingWithMe() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Client Testimonials
                </h1>
                <Card className="h-full flex flex-col mt-10">
                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 italic sm:text-2xl">
                        “My hypnotherapy sessions with Natasha were calm, open, and supportive. I felt at ease with her
                        straight away. Over time, we built a positive therapeutic relationship, and I felt very
                        comfortable sharing my reflections and anxiety-related experiences. Even when things seemed
                        silly to me, Natasha always listened without judgement and responded with care. She taught me
                        practical techniques that genuinely help when I feel anxious. I would definitely recommend
                        Natasha to anyone struggling with anxiety.”
                        <br/>
                        — Laura
                    </p>
                </Card>
                <Card className="h-full flex flex-col mt-20">
                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 italic sm:text-2xl">
                        “I had the opportunity to work with Natasha, and the experience was genuinely insightful. She
                        created a calm, supportive space while also helping me look at situations in a practical and
                        empowering way. Our work on assertiveness gave me useful tools to approach conversations with
                        more confidence and clarity, and I still use those techniques today. Natasha combines a warm,
                        intuitive style with real professionalism. I would happily recommend her to anyone looking for
                        thoughtful, effective support.”
                        <br/>
                        — Su
                    </p>
                </Card>
                <Card className="h-full flex flex-col mt-20">
                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 italic sm:text-2xl">
                        “Natasha was patient, reassuring, and an excellent listener. Her calm manner helped me feel
                        relaxed and safe in a confidential space. I really valued the way she used thoughtful questions
                        and pauses to help me gain powerful insights, challenge negative thinking, and build more
                        empowering beliefs.
                        The hypnotherapy sessions were especially helpful for clarity, motivation, and confidence.
                        Natasha’s soothing voice and clear explanations meant I always felt in control and at ease. The
                        affirming sentence we developed was particularly powerful, and she guided me expertly to
                        discover it for myself.
                        Natasha also provided regular recaps, reviewed weekly exercises with me, and supported me
                        through any challenges in a practical, encouraging way. Her understanding and encouragement were
                        invaluable.
                        I’m genuinely grateful for the progress I made and very glad I worked with her. I would happily
                        use her services again and would not hesitate to recommend her to anyone looking for caring,
                        professional, and effective therapy.”
                        <br/>
                        — S.
                    </p>
                </Card>

                <Card className="h-full flex flex-col mt-20">
                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 italic sm:text-2xl">
                        “Natasha helped me build trust and feel at ease in sessions. I am feeling a lot less guilty
                        when I want to relax, and we set a goal that was achievable and realistic. She was very
                        willing to be flexible with the different exercises and made sure I was getting the most out
                        of the sessions.”
                        <br/>
                        — Izzy
                    </p>
                </Card>

                <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-neutral-700">
                    If you&apos;d like to take the next step, you&apos;re welcome to book a{' '}
                    <Link href="/contact" className="italic underline underline-offset-2 hover:no-underline">
                        Free 20-minute initial chat
                    </Link>
                    .
                </p>
            </div>
        </section>
    </>);
}
