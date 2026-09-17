import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smoking Cessation | Natasha Russo",
    description:
        "Smoking cessation support using Cognitive Behavioural Hypnotherapy, combining evidence-based psychological strategies with hypnosis.",
    alternates: { canonical: "/smoking-cessation" },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";
const textClass = "text-base leading-7 text-[#5B554D]";

const approachItems = [
    "identifying the situations, routines, or emotional cues associated with smoking",
    "examining beliefs and expectations about smoking",
    "strengthening motivation and commitment to change",
    "developing practical strategies for responding to triggers",
    "using hypnotic techniques to reinforce new patterns of behaviour",
];

export default function SmokingCessationStylePreview() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">
            <script dangerouslySetInnerHTML={{ __html: "window.localStorage.setItem('natasha-russo-cookie-consent','declined');" }} />
            <style>{`[aria-label="Cookie notice"]{display:none!important;}`}</style>

            <section className="border-b border-[#EEE6DB] bg-[#FFFDF9] py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className={eyebrowClass}>Smoking cessation</p>
                    <h1 className="mt-5 max-w-4xl !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                        Smoking cessation with cognitive behavioural hypnotherapy.
                    </h1>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <p className={textClass}>
                            Many people want to stop smoking yet find that the habit can be difficult to change.
                        </p>
                        <p className={textClass}>
                            Over time, smoking often becomes linked to daily routines, emotional cues, and expectations
                            about relief or reward.
                        </p>
                        <p className={textClass}>
                            Because of this, the habit can persist even when someone feels strongly motivated to stop.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.42fr_0.58fr]">
                <div>
                    <p className={eyebrowClass}>How the approach works</p>
                    <h2 className={titleClass}>Understanding the pattern, then changing the response.</h2>
                </div>
                <div className="space-y-5">
                    <p className={textClass}>
                        Cognitive Behavioural Hypnotherapy approaches smoking cessation by looking at the patterns that
                        maintain the behaviour and helping people develop new responses. Rather than relying on
                        suggestion alone, this approach combines cognitive-behavioural strategies with hypnotic techniques
                        to support meaningful habit change.
                    </p>
                    <p className={textClass}>
                        The aim is to help individuals understand the triggers and expectations connected with smoking,
                        strengthen their motivation to stop, and build practical ways of responding differently in
                        situations where smoking would previously have occurred.
                    </p>
                    <ul className="grid gap-4 pt-3 sm:grid-cols-2">
                        {approachItems.map((item) => (
                            <li key={item} className="border-t border-[#D8D1C6] pt-4 text-sm leading-6 text-[#5B554D]">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className={textClass}>
                        Hypnosis in this context is used as a way of focusing attention and supporting behavioural
                        change, helping individuals rehearse and reinforce new responses to situations where smoking
                        previously occurred.
                    </p>
                </div>
            </section>

            <section className="border-y border-[#EEE6DB] bg-[#FFFDF9] py-16">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
                    <article className="border-t border-[#D8D1C6] pt-6">
                        <p className={eyebrowClass}>Suitability</p>
                        <h2 className={`${titleClass} mt-4 text-3xl sm:text-4xl`}>Who this may be suitable for.</h2>
                        <p className={`${textClass} mt-5`}>
                            This approach is most suitable for people who feel ready to stop smoking and would like
                            structured psychological support in changing the habit.
                        </p>
                    </article>
                    <article className="border-t border-[#D8D1C6] pt-6">
                        <p className={eyebrowClass}>Training</p>
                        <h2 className={`${titleClass} mt-4 text-3xl sm:text-4xl`}>Additional professional training.</h2>
                        <p className={`${textClass} mt-5`}>
                            I have completed additional professional training in smoking cessation through the UK College
                            of Hypnosis and Hypnotherapy, which focuses on evidence-based cognitive-behavioural methods
                            integrated with hypnosis.
                        </p>
                    </article>
                    <article className="border-t border-[#D8D1C6] pt-6">
                        <p className={eyebrowClass}>Programme & fee</p>
                        <h2 className={`${titleClass} mt-4 text-3xl sm:text-4xl`}>A structured two-session programme.</h2>
                        <ul className="mt-5 space-y-3 text-sm leading-6 text-[#5B554D]">
                            <li><strong>Main session:</strong> 2 hours</li>
                            <li><strong>Follow-up session:</strong> 1 hour (one week later)</li>
                            <li><strong>Total programme fee:</strong> £230</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-14">
                <p className="max-w-3xl text-base italic leading-7 text-[#5B554D]">
                    If you are considering stopping smoking and would like to explore whether this approach may be
                    helpful, you are welcome to get in touch for a{" "}
                    <Link href="/contact" className="font-semibold no-underline">
                        free 20-minute chat
                    </Link>.
                </p>
            </section>
        </div>
    );
}
