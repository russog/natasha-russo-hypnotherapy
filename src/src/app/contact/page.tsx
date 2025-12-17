export default function Contact(){
    return (
        <>
            <section className="py-16 sm:py-20 bg-[#FEFCFB]">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                        Contact
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                        If something here resonates, the next step is a simple, free 20-minute chat where you can
                        ask questions and see whether we feel like a good fit.
                    </p>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-[#FBF6F0]">
                <div className="mx-auto max-w-3xl px-4 space-y-6 text-neutral-700">
                    <h2 className="text-xl font-semibold text-neutral-900">
                        Book a free 20-minute chat
                    </h2>

                    <p>
                        To book a brief initial conversation, you can email me directly or use the details below.
                        There’s no pressure to commit – it’s simply a chance to talk things through and decide
                        whether you’d like to work together.
                    </p>

                    {/* Contact details */}
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div className="space-y-3">
                            <p className="text-sm">
                                <strong className="font-semibold text-neutral-900">Email:</strong>{" "}
                                <a
                                    href="mailto:contact@natasharussohypnotherapy.co.uk"
                                    className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                                >
                                    contact@natasharussohypnotherapy.co.uk
                                </a>
                            </p>

                            <p className="text-sm">
                                <strong className="font-semibold text-neutral-900">Phone:</strong>{" "}
                                <span>07xxx xxxxxx (business number – to be confirmed)</span>
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <div className="mb-2 inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                            Before we meet
                        </div>

                        <p>
                            I’ll usually ask a few brief questions by email first, just to check that what you’re
                            looking for is within my scope of practice and that online hypnotherapy is likely to be
                            appropriate for you. If not, I’ll do my best to signpost you to other options.
                        </p>
                    </div>

                    <p>
                        Sessions take place online via secure video. Once we agree a time, I’ll send you a link
                        along with a short intake form and privacy information so you know exactly how your data is
                        handled.
                    </p>
                </div>
            </section>
        </>
    );
}
