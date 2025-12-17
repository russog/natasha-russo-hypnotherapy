import Link from "next/link";

export default function Faq(){
    return (
        <>
            <section className="py-16 sm:py-20 bg-[#FEFCFB]">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                        Frequently asked questions
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                        It’s completely normal to have questions about hypnosis, online sessions, and what therapy
                        will actually feel like.
                    </p>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-[#FBF6F0]">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                q: "Will I be “out of control” in hypnosis?",
                                a: `No. You remain aware, able to move and speak, and in charge of what you choose to share.
                In this approach, hypnosis is more like guided, focused imagination than being “under”.`,
                            },
                            {
                                q: "What if I can’t be hypnotised?",
                                a: `Most people can engage with hypnosis enough for it to be useful, especially when it’s explained
                clearly and tailored to them. We also use plenty of non-hypnotic CBT and behavioural techniques,
                so you’re never relying on one single method.`,
                            },
                            {
                                q: "How many sessions will I need?",
                                a: `It depends on your goals and how long the problem has been around. Many people notice useful
                shifts within 4–8 sessions. We’ll review regularly, and you’re never tied into a fixed package.`,
                            },
                            {
                                q: "Are sessions really effective online?",
                                a: `For many issues, yes. Working online can be just as effective as in-person work, with the added
                benefit of being in your own familiar environment. You’ll just need a quiet space, a good
                internet connection, and somewhere comfortable to sit or lie down.`,
                            },
                            {
                                q: "What do I need for online sessions?",
                                a: `A device with a camera and microphone (laptop, tablet or phone), a stable internet connection,
                and a space where you won’t be interrupted. A blanket and a cup of tea are optional but often
                appreciated.`,
                            },
                            {
                                q: "What if I get emotional?",
                                a: `It’s okay to feel things in therapy – in fact, it’s often part of the process. We’ll pace
                things together, and I’ll help you feel more grounded again before we end the session.`,
                            },
                        ].map((item) => (
                            <div
                                key={item.q}
                                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                            >
                                <h3 className="text-base font-semibold text-neutral-900">
                                    {item.q}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 max-w-2xl text-sm text-neutral-600">
                        If you have a question that isn’t answered here, you’re very welcome to ask in a free
                        20-minute chat or via email.
                    </p>
                </div>
            </section>
        </>);
}
