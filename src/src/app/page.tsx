import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat" aria-hidden/>
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
                            src="/natasha.png"
                            alt="Natasha Russo"
                            fill
                            className="rounded-sm object-cover object-top"
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

        {/*<section className="py-16 sm:py-20 bg-[#FBF6F0]">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                    How I can help
                </h2>

                <p className="mt-3 max-w-2xl text-neutral-700">
                    People come to see me for many reasons. Here are some of the most common themes.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Anxiety & overthinking",
                            text:
                                "Persistent “what ifs”, dread before certain situations, a mind that won’t switch off.",
                        },
                        {
                            title: "Stress & burnout",
                            text:
                                "Feeling constantly on edge, exhausted, guilty for resting, or like you’re always behind.",
                        },
                        {
                            title: "Confidence & self-doubt",
                            text:
                                "Imposter feelings, fear of being judged, performance nerves, or difficulty speaking up.",
                        },
                        {
                            title: "Habits & unhelpful patterns",
                            text:
                                "Procrastination, avoidance, people-pleasing, or doing things that don’t really serve you any more.",
                        },
                        {
                            title: "Sleep & body tension",
                            text:
                                "Lying awake with your mind racing, or carrying chronic tension in your body.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-neutral-900">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-6 max-w-xl text-sm text-neutral-600">
                    If you’re not sure whether your situation fits neatly into one of these, that’s completely fine.
                    We can talk it through in a free call and see whether this approach feels right for you.
                </p>
            </div>
        </section>
        <section className="py-16 sm:py-20  bg-[#FEFCFB]">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                            A calm, structured way of working
                        </h2>

                        <p className="mt-3 max-w-2xl text-neutral-700">
                            Cognitive-behavioural hypnotherapy combines CBT strategies with focused, imaginative work
                            in hypnosis – without any mystery or loss of control.
                        </p>

                        <p className="mt-4 text-neutral-700">
                            We’ll map out how your difficulty works for you now, agree on realistic goals, and then
                            use a mix of discussion, behavioural experiments and hypnosis exercises to help you
                            respond differently.
                        </p>

                        <p className="mt-4 text-neutral-700">
                            Hypnosis here isn’t a special “trance state”. It’s more like guided, focused imagination
                            while your body is physically calmer – a chance to rehearse new responses from a steadier
                            place.
                        </p>

                        <p className="mt-3 text-sm text-neutral-700">
                            You can read more about this on the{" "}
                            <Link
                                href="/working-with-me"
                                className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                            >
                                Working with me
                            </Link>{" "}
                            page.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                            What it’s like to work together
                        </h2>

                        <p className="mt-4 text-neutral-700">
                            Clients often describe me as calm, clear and gently persistent. I won’t push you into
                            anything you don’t want to do, but I also won’t just nod and say “mm-hmm” for an hour.
                        </p>

                        <p className="mt-4 text-neutral-700">
                            We’ll think together, experiment together, and sometimes laugh at how inventive the
                            human brain can be. Underneath it all is a simple aim: to help you feel safer in your own
                            mind and body, and more able to live the kind of life that matters to you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 sm:py-20 bg-[#FBF6F0] text-[#2E4F4F]">
            <div className="mx-auto max-w-3xl px-4 text-center">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Ready to see whether this could help?
                </h2>

                <p className="mt-4">
                    We can start with a free, no-pressure 20-minute chat. You can ask questions, get a feel for
                    how I work, and decide in your own time whether you’d like to book sessions.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
                    >
                        Book a free 20-minute chat
                    </Link>
                </div>
            </div>
        </section>*/}
    </>);
}
