import Link from "next/link";
import {Card} from "@/app/components/card";
import React from "react";

export default function WorkingWithMe() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                 aria-hidden/>
            <div className="absolute inset-0 bg-white/35" aria-hidden/>
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Working with me
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                    Working together is a structured and collaborative process. What follows gives a sense of how
                    sessions usually work in practice, what the process involves, and how we each contribute to the
                    work.
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10 mb-5">
                <Card>
                    <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                        How the work usually unfolds
                    </h2>

                    <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                        <li className="flex gap-3">

                            <span>
    1. Initial contact<br/>
    You’re welcome to get in touch by email or book a brief introductory
    conversation. This is a chance to ask questions, get a sense of how I work,
    and decide whether it feels like a good fit — with no pressure to commit.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    2. First session: understanding and focus<br/>
    The first session is slightly longer and gives us time to understand what’s
    been happening for you, what you’d like help with, and how we might work
    together. We begin shaping a clear focus for the work at a pace that feels
    manageable.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    3. Ongoing sessions: working with patterns<br/>
    Subsequent sessions focus on actively working with thoughts, emotions, and
    behavioural responses. We use practical, evidence-based methods, both in
    session and, where appropriate, through small experiments or reflections
    between sessions.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    4. Reviewing and adjusting<br/>
    We regularly pause to review how the work is going — what’s helping, what
    feels less useful, and whether anything needs adjusting. The work remains
    collaborative and responsive to you.
  </span>
                        </li>

                        <li className="flex gap-3">

                            <span>
    5. Finishing well<br/>
    Endings are planned thoughtfully, with an emphasis on consolidating learning,
    strengthening confidence, and supporting ongoing independence beyond
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
                            <span>Number of sessions: Many people find that around 5-6 sessions are enough to work through a specific difficulty, though this varies depending on what you are bringing and how you’d like to work.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Session length: Sessions are usually 60 minutes. The first session is slightly longer (around 90 minutes) to allow time to understand what’s been going on for you and to begin shaping the work together.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Frequency: Sessions are often weekly to begin with, as this gives some continuity while allowing time to reflect and try things out between meetings. That said, spacing can be adjusted where needed – there is no rigid schedule.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Between-session work: There may be simple things to notice or try between sessions. These are collaborative and manageable, and we’ll always agree them together.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0"/>
                            <span>Format: Sessions are held online via secure video, so you can take part from your own space.</span>
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

                <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl italic">
                    <strong>Confidentiality & Suitability</strong>
                    <br/>
                    <br/>
                    What you share in sessions is treated as confidential. This means that, in most circumstances, what
                    we discuss stays between us.
                    There are a small number of legal and ethical exceptions to confidentiality – for example, if there
                    is a serious risk of harm to you or someone else. These limits are discussed clearly at the start of
                    our work together, so you know where you stand.
                    <br/>
                    For further details, please refer to my <Link href="/privacy-policy" className="font-bold">Privacy
                    Notice</Link>
                    <br/>
                    <br/>
                    Different approaches suit different people, and part of the work is making sure that this feels like
                    a good fit for you.
                    This way of working tends to suit people who are open to reflecting on their experiences and trying
                    things out between sessions. If you are unsure whether it’s right for you, that’s something we can
                    talk through in our initial conversation.
                    <br/>
                    <br/>
                    <strong>Fees</strong>
                    <br/>
                    <br/>
                    Standard sessions last <strong>60 minutes</strong> and are charged at <strong>£60.</strong>
                    The first session lasts approximately <strong>90 minutes</strong> and is <strong>£90</strong>,
                    allowing time for assessment and
                    conceptualisation.&nbsp;<strong>A block of four</strong> sessions is available
                    at <strong>£220.</strong>
                    &nbsp;Fees are payable in advance, and cancellation arrangements are outlined clearly before we
                    begin. For
                    further detail, please refer to the <Link href="/fees-cancellation" className="font-bold">Fees &
                    Cancellation Policy</Link>

                </p>
                <p className="mt-3 text-stone-700 leading-relaxed max-w-3xl italic">
                    If you’d like to explore whether this approach fits you, the next step is usually a brief,
                    no-pressure conversation - <Link href="/contact" className="font-bold">
                    Get in touch
                </Link>
                </p>


            </div>
        </section>

    </>);
}
