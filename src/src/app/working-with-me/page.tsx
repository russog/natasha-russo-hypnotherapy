import Link from "next/link";
import {Card} from "@/app/components/card";
import React from "react";

export default function WorkingWithMe() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Working with me
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                    Working together is a structured and collaborative process. This page gives a clear sense of
                    how sessions usually unfold, what the process involves, and how we each contribute to the work.
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10 mb-20">
                <Card>
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        How the work usually unfolds
                    </h2>

                    <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                        <li className="flex gap-3">

                            <span>
                                <strong>1) Initial contact</strong><br/>
    You’re welcome to get in touch by email or book a brief introductory
    conversation. This is a chance to ask questions, get a sense of how I work,
    and decide whether it feels like a good fit — with no pressure to commit.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    <strong>2) First session: understanding and focus</strong><br/>
    The first session is slightly longer and gives us time to understand what has
    been happening for you, what you would like help with, and how we might work
    together. We begin shaping a clear focus at a pace that feels
    manageable.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    <strong>3) Ongoing sessions: working with patterns</strong><br/>
    Subsequent sessions focus on actively working with thoughts, emotions, and
    behavioural responses. We use practical, evidence-based methods, both in
    session and, where helpful, through small reflections or experiments
    between sessions.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    <strong>4) Reviewing and adjusting</strong><br/>
    We regularly pause to review how the work is going — what is helping, what
    feels less useful, and whether anything needs adjusting. The process remains
    collaborative and responsive to you.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    <strong>5) Finishing well</strong><br/>
    Endings are planned thoughtfully, with an emphasis on consolidating learning,
    strengthening confidence, and supporting your independence beyond
    therapy.
  </span>
                        </li>

                    </ul>
                </Card>

                <Card className="bg-white/70">
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Your role and my role
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="border-r  border-dashed border-black mr-6">
                            <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl">
                                <em className="italic">My role</em> is to provide structure, guidance, and
                                evidence-based methods to help you understand
                                and change unhelpful patterns.
                            </p>
                        </div>

                        <div>
                            <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl">
                                <em className="italic">Your role</em> is to bring curiosity, honesty, and a
                                willingness to experiment – even when things
                                feel uncertain or imperfect.
                            </p>
                        </div>
                    </div>

                </Card>

                <Card className="bg-emerald-50/50">

                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Session format and structure
                    </h2>

                    <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span><strong>Number of sessions:</strong> Many people find that around 5-6 sessions are enough to work through a specific difficulty, though this varies depending on what you are bringing and how you’d like to work.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span><strong>Session length:</strong> Standard sessions are 60 minutes.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span><strong>First session:</strong> Approximately 90 minutes, allowing time for assessment and conceptualisation.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span><strong>Frequency:</strong> Sessions are often weekly to begin with, as this supports continuity while allowing time to reflect and try things out between meetings.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span><strong>Between-session work:</strong> There may be simple things to notice or try between sessions. These are collaborative, manageable, and always agreed together.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span><strong>Format:</strong> Sessions are held online via secure video, so you can take part from your own space.</span>
                        </li>
                    </ul>
                    <p className="mt-6 text-stone-700 italic">
                        Hypnotherapy may be used as part of the work where it’s relevant and agreed. If you’d like a
                        brief explanation of how it’s used in my practice, you can read more in the <Link
                        href="/faq" className="font-bold">
                        FAQs.
                    </Link>
                    </p>
                </Card>


                <Card className="bg-emerald-50/50">
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Confidentiality & Suitability
                    </h2>
                    What you share in sessions is treated as confidential. In most circumstances, what we discuss stays
                    between us. There are a small number of legal and ethical exceptions to confidentiality — for
                    example, if there is a serious risk of harm to you or someone else. These limits are discussed
                    clearly at the start, so you know where you stand.
                    <br/>
                    For further details, please refer to my <Link href="/privacy-policy" className="font-bold italic">Privacy
                    Notice</Link>
                    <br/>
                    <br/>
                    Different approaches suit different people, and part of the process is making sure this way of
                    working feels like a good fit for you. If you are unsure whether this is right for you, we can
                    discuss it in an initial conversation.
                </Card>

                <Card className="bg-emerald-50/50">
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        Fees
                    </h2>
                    <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl italic">

                        <ul>
                            <li className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                                <span>Standard sessions <strong>(60 minutes): £60</strong></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                                <span>First session <strong>(90 minutes): £90</strong></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                                <span>Block of 4 sessions: <strong>£220</strong></span>
                            </li>
                        </ul>

                        Fees are payable in advance. Cancellation arrangements are outlined clearly before we
                        begin. For full details, please refer to the <Link href="/fees-cancellation"
                                                                           className="font-bold">Fees &
                        Cancellation Policy.</Link>

                    </p>
                    <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl italic">
                        If you’d like to explore whether this approach feels right for you, you’re welcome to get in touch for a &nbsp;
                        <Link
                            href="/contact">
                            Free 20-minute initial chat.
                        </Link>
                    </p>
                </Card>


            </div>
        </section>
    </>);
}
