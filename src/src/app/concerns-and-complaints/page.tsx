import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Concerns and Complaints",
    description:
        "Information about raising concerns or making a formal complaint about services provided by Natasha Russo Hypnotherapy, including NCIP guidance.",
    alternates: { canonical: "/concerns-and-complaints" },
};

export default function ConcernsAndComplaintsPage() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:py-14">
                    <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Concerns and Complaints
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-left text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                        I aim to provide a professional, respectful and supportive therapeutic service. Your experience
                        matters, and I welcome feedback about any aspect of the service you receive.
                    </p>
                </div>
            </section>

            <section className="relative isolate overflow-hidden pb-12">
                <div className="relative z-10 mx-auto max-w-5xl space-y-10 px-6">
                    <section>
                        <h2 className="font-medium"><strong>Raising a concern</strong></h2>
                        <p>
                            If you have any concerns about your experience of working with me, you are welcome to contact
                            me directly at{" "}
                            <Link
                                href="mailto:contact@natasharussohypnotherapy.co.uk"
                                className="break-words font-bold"
                            >
                                contact@natasharussohypnotherapy.co.uk
                            </Link>.
                        </p>
                        <p>
                            I will take your concerns seriously and aim to acknowledge your message within five working days.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium"><strong>Making a formal complaint</strong></h2>
                        <p>
                            I am a full member of the National Council of Integrative Psychotherapists (NCIP) and work in
                            accordance with its professional and ethical standards.
                        </p>
                        <p>
                            If you wish to make a formal complaint concerning my professional conduct, you can contact NCIP
                            directly for guidance on its complaints procedure.
                        </p>
                        <p>
                            NCIP website:{" "}
                            <Link
                                href="https://www.the-ncip.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold"
                            >
                                https://www.the-ncip.org/
                            </Link>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium"><strong>Confidentiality</strong></h2>
                        <p>
                            Any concerns or complaints raised directly with me will be handled sensitively, with appropriate regard
                            for confidentiality and data protection obligations.
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
}
