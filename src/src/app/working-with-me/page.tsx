import Link from "next/link";

export default function WorkingWithMe() {
    return (
        <>
            <section className="py-16 sm:py-20 bg-[#FEFCFB]">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                        Working with me
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                        A calm, structured process that integrates CBT models with modern, non-mystical hypnotherapy
                        – always at a pace that feels safe for you.
                    </p>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-[#FBF6F0]">
                <div className="mx-auto max-w-3xl px-4 space-y-6 text-neutral-700">
                    <h2 className="text-xl font-semibold text-neutral-900">
                        Cognitive-behavioural hypnotherapy in plain language
                    </h2>

                    <p>
                        My approach is rooted in cognitive-behavioural hypnotherapy: an integration of cognitive and
                        behavioural methods with modern, non-state-based hypnotherapy. Rather than treating hypnosis
                        as a mysterious “trance”, I see it as a way to:
                    </p>

                    <ul className="list-disc space-y-1 pl-5">
                        <li>focus your attention on what matters,</li>
                        <li>engage your imagination in a helpful direction, and</li>
                        <li>
                            practise new ways of thinking and responding while your body is physically calmer.
                        </li>
                    </ul>

                    <p>
                        This can make it easier to rehearse the changes you want to make, and to bring those changes
                        into everyday life. At no point are you “under” or out of control.
                    </p>

                    <h2 className="pt-4 text-xl font-semibold text-neutral-900">
                        What sessions usually look like
                    </h2>

                    <p>
                        Every person is different, but our work will typically move through a few phases:
                    </p>

                    <h3 className="pt-2 text-lg font-semibold text-neutral-900">
                        1. Assessment & understanding the problem
                    </h3>

                    <p>
                        We start by mapping out how the difficulty works for you now – the situations that trigger
                        it, what you tend to think in those moments, how your body responds, and what you do to cope.
                        I’ll share simple cognitive-behavioural models so you can see the “moving parts” clearly.
                    </p>

                    <h3 className="pt-2 text-lg font-semibold text-neutral-900">
                        2. Agreeing on realistic goals
                    </h3>

                    <p>
                        We translate “I just want to feel better” into something more specific and achievable. That
                        might be “sleeping more easily”, “worrying less about what other people think”, or “feeling
                        confident enough to do X regularly”.
                    </p>

                    <h3 className="pt-2 text-lg font-semibold text-neutral-900">
                        3. Active work in and between sessions
                    </h3>

                    <p>
                        In ongoing sessions, we combine:
                    </p>

                    <ul className="list-disc space-y-1 pl-5">
                        <li>gentle discussion,</li>
                        <li>cognitive and behavioural techniques, and</li>
                        <li>focused hypnosis exercises tailored to your goals.</li>
                    </ul>

                    <p>
                        You’ll usually have small, manageable practices to try between sessions, because that’s
                        where change really takes root.
                    </p>

                    <h3 className="pt-2 text-lg font-semibold text-neutral-900">
                        4. Review & finishing well
                    </h3>

                    <p>
                        We review what’s shifted, what still feels tender, and how you can continue supporting
                        yourself beyond therapy. The aim is that you leave not just feeling different, but
                        understanding what actually helped – and how to keep using it.
                    </p>

                    {/* Highlight box */}
                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <div className="mb-2 inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                            What it feels like
                        </div>

                        <p>
                            Clients often describe me as calm, clear and gently persistent. I won’t push you into
                            anything you don’t want to do, but I also won’t just nod and say “mm-hmm” for an hour.
                            We’ll think together, experiment together, and occasionally acknowledge the sheer
                            absurdity of being human.
                        </p>
                    </div>

                    <p>
                        If you’d like to get a feel for whether this approach fits you, the best next step is a
                        brief, no-pressure conversation. You can book one via the{" "}
                        <Link
                            href="/contact"
                            className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                        >
                            Contact
                        </Link>{" "}
                        page.
                    </p>
                </div>
            </section>
        </>
    );
}
