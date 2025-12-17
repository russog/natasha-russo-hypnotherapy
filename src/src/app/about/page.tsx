import Link from "next/link";

export default function About(){
    return (<>
            <section className="y-16 sm:py-20 bg-[#FEFCFB]">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                        Meet Natasha
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                        I’m Natasha – a cognitive-behavioural hypnotherapist who works with thoughtful, caring
                        people whose minds never quite seem to switch off.
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-[#FBF6F0]">
                <div className="mx-auto max-w-3xl px-4 space-y-6 text-neutral-700">
                    <p>
                        I’ve always been curious about why we think, feel, and behave the way we do. That curiosity
                        led me to complete a{" "}
                        <strong className="font-semibold text-neutral-900">
                            Bachelor of Science in Psychology
                        </strong>
                        , followed by a{" "}
                        <strong className="font-semibold text-neutral-900">
                            Master’s in Cross-Cultural Psychology
                        </strong>
                        , exploring how our beliefs, identities, and environments shape experience.
                    </p>

                    <p>
                        Later, after a good amount of real-life stress, family life, and “I should be coping better
                        than this” moments, I trained in a very practical, evidence-based approach to hypnosis. I
                        hold a{" "}
                        <strong className="font-semibold text-neutral-900">
                            Level 5 Diploma in Cognitive Behavioural Hypnotherapy
                        </strong>
                        , which integrates cognitive-behavioural models with modern, non-mystical hypnotherapy.
                    </p>

                    <p>
                        I don’t see clients as “cases” or diagnoses. I see real humans who are trying to do their
                        best with the tools they have – often while juggling work, family, health and a very loud
                        inner critic. My job is to offer a calm, structured space where we can gently examine what’s
                        going on and build new ways of responding.
                    </p>

                    {/* Highlight box */}
                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <div className="mb-2 inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                            My style
                        </div>

                        <p className="text-neutral-700">
                            In sessions, you can expect a clear framework (so you understand why you feel how you
                            do), practical tools (not just talking in circles), and a therapist who is warm, honest,
                            and occasionally a little bit wry – because sometimes being human is so absurd that you
                            have to smile at it.
                        </p>
                    </div>

                    <p>
                        If your mind runs like a browser with countless tabs open and several of them are frozen,
                        you’re not alone. You’re welcome to bring the mess, the doubts, the “I shouldn’t be
                        struggling with this” thoughts. We’ll work with all of it, at a pace that feels safe for
                        you.
                    </p>

                    <p>
                        You can read more about how I work in practice on the{" "}
                        <Link
                            href="/working-with-me"
                            className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                        >
                            Working with me
                        </Link>{" "}
                        page.
                    </p>
                </div>
            </section>
        </>);
}
