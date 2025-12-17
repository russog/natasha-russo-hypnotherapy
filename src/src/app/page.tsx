import Link from "next/link";

export default function Home() {
  return (<>
            <section className="py-16 sm:py-20 bg-[#FEFCFB]">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <div className="text-sm font-semibold tracking-wide text-neutral-600">
                                Online cognitive-behavioural hypnotherapy
                            </div>

                            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                                Calm, evidence-based hypnotherapy to help you worry less and live more.
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-700">
                                I’m <strong className="font-semibold text-neutral-900">Natasha Russo</strong>, a
                                cognitive-behavioural hypnotherapist offering gentle, structured support for anxiety,
                                overthinking and confidence issues – online, from the comfort of your own home.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                                >
                                    Book a free 20-minute chat
                                </Link>

                                <Link
                                    href="/working-with-me"
                                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                                >
                                    How I work
                                </Link>
                            </div>

                            <p className="mt-4 text-sm text-neutral-600">
                                No pressure, no obligation – just a chance to ask questions and see whether it feels like
                                a good fit.
                            </p>
                        </div>

                        <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-neutral-900">Does this sound familiar?</h2>

                            <p className="mt-3 text-neutral-700">
                                You’re thoughtful and capable, but your mind won’t switch off – and you’re tired of anxiety,
                                guilt or self-doubt running the show.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Anxiety", "Overthinking", "Confidence", "Stress", "Sleep"].map((label) => (
                                    <span
                                        key={label}
                                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700"
                                    >
                  {label}
                </span>
                                ))}
                            </div>

                            <p className="mt-5 text-neutral-700">
                                Together we’ll calm your nervous system, untangle unhelpful patterns, and rehearse new ways
                                of thinking and responding – so change feels possible in everyday life.
                            </p>

                            <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700">
                                Sessions are held online via secure video, so you can work from your own space (blanket, tea
                                and dog welcome).
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-[#FBF6F0]">
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
            </section>
    </>);
}
