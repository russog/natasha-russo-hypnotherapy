'use client';

import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from 'react';

type FAQ = {
    question: string;
    answer: React.ReactNode;
};

const faqs: FAQ[] = [
    {
        question: 'What is hypnotherapy?',
        answer: (
            <>
                <p>
                    Hypnotherapy is a way of working with focused attention, imagination, and expectation to help change
                    unhelpful patterns of thought, feeling, and behaviour.
                </p>
                <p>
                    In this context, hypnosis is used to support practical cognitive and behavioural strategies, rather than explore past experiences. If useful, you can read more in <Link href="/blog/making-sense-of-hypnotherapy" className="underline underline-offset-2 hover:no-underline">Making Sense of Hypnotherapy</Link>.
                </p>
            </>
        ),
    },
    {
        question: 'Will I be in control during hypnosis? / Can it make me do something I don’t want to do?',
        answer: (
            <p>
                Yes – you remain fully in control throughout. Hypnosis cannot make you do anything against your will or
                values. The work is always collaborative and guided by your goals. You can speak, pause, or stop at any
                point, and nothing happens ‘to’ you. Hypnotherapy relies on your active participation, not surrendering
                control.
            </p>
        ),
    },
    {
        question: 'What does hypnosis feel like?',
        answer: (
            <p>
                People often describe hypnosis as a state of focused attention – similar to becoming absorbed in a book, a
                film, or a daydream. You are usually aware of what’s happening and able to think, reflect, and engage in
                conversation throughout. Experiences vary, but hypnosis doesn’t involve losing consciousness or being asleep.
            </p>
        ),
    },
    {
        question: 'What if I can’t be hypnotised?',
        answer: (
            <p>
                Most people can engage with hypnosis to some degree, especially when it’s approached as a skill rather than
                something that ‘happens’ to you. There is no pressure to perform or ‘go deep’. The work adapts to you, and if
                a particular technique isn’t helpful, we simply use a different approach.
            </p>
        ),
    },
    {
        question: 'Is hypnotherapy safe?',
        answer: (
            <p>
                When practiced responsibly and ethically, hypnotherapy is considered safe. Sessions are collaborative, paced
                carefully, and guided by informed consent. Nothing is done without your understanding and agreement, and you
                remain actively involved throughout the process.
            </p>
        ),
    },
    {
        question: 'Does hypnotherapy work for everyone?',
        answer: (
            <p>
                No single approach works for everyone, and hypnotherapy is no different – it is not a quick fix. It can be
                helpful for many people, particularly those interested in understanding and changing patterns of thinking,
                attention, and response. Part of the work is exploring whether this approach feels like a good fit for you.
            </p>
        ),
    },
    {
        question: 'How many sessions will I need?',
        answer: (
            <p>
                This varies depending on what you are bringing and how you’d like to work. Some people find a small number of
                sessions is enough to make meaningful changes, while others prefer to work more gradually. This is something
                we review together rather than fixing in advance.
            </p>
        ),
    },
    {
        question: 'Are online hypnotherapy sessions effective?',
        answer: (
            <p>
                Yes — for this kind of work, online sessions are just as effective as in-person. Both research and clinical experience support this, and because the process relies on attention, communication, and guided techniques rather than physical presence, many people find it just as engaging — and often more comfortable working from their own space.
            </p>
        ),
    },
    {
        question: 'What do I need for an online session?',
        answer: (
            <p>
                You will need a stable internet connection, a private and comfortable space, and a device with camera and
                microphone. It helps to choose a setting where you won’t be interrupted and where you feel able to focus for
                the session.
            </p>
        ),
    },
    {
        question: 'Who do you help?',
        answer: (
            <>
                <p>I work with adults experiencing things like:</p>
                <ul className="list-disc pl-5">
                    <li><Link href="/blog/why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it" className="underline underline-offset-2 hover:no-underline">Anxiety and worry</Link></li>
                    <li><Link href="/blog/when-thinking-becomes-overthinking" className="underline underline-offset-2 hover:no-underline">Overthinking</Link></li>
                    <li><Link href="/blog/feeling-stuck-even-when-trying-to-move-forward" className="underline underline-offset-2 hover:no-underline">Stress and emotional overwhelm</Link></li>
                    <li><Link href="/blog/how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing" className="underline underline-offset-2 hover:no-underline">Confidence</Link> and <Link href="/blog/when-you-know-you-can-but-still-feel-unsure" className="underline underline-offset-2 hover:no-underline">self-doubt</Link></li>
                    <li><Link href="/blog/when-everything-feels-like-it-needs-your-attention" className="underline underline-offset-2 hover:no-underline">Difficulty switching off</Link> / <Link href="/blog/why-switching-off-at-night-Is-harder-than-it-should-be" className="underline underline-offset-2 hover:no-underline">sleep-related mental overactivity</Link></li>
                    <li><Link href="/blog/why-it-is-sometimes-hard-to-say-or-do-what-you-want-assertiveness-in-everyday-life" className="underline underline-offset-2 hover:no-underline">Assertiveness</Link> and boundaries</li>
                    <li>Habits you’d like to change</li>
                    <li>Managing specific fears</li>
                    <li>Stopping smoking (<Link href="/smoking-cessation" className="underline underline-offset-2 hover:no-underline">smoking cessation</Link>)</li>
                </ul>
                <p>
                    If you’re unsure whether your situation fits, you’re welcome to get in touch.
                </p>
            </>
        ),
    },
    {
        question: 'Are there situations or difficulties you don’t work with?',
        answer: (
            <>
                <p>
                    Yes. Like all ethical practitioners, I work within a defined scope of practice. This is not a judgement
                    about the seriousness or importance of any difficulty – it is about ensuring that people receive the right
                    kind of support for their needs.
                </p>
                <p>At present, I don’t work with:</p>
                <ul className="list-disc pl-5">
                    <li>Post-traumatic stress disorder (PTSD) or complex trauma</li>
                    <li>Psychosis, schizophrenia, or related conditions</li>
                    <li>Bipolar disorder</li>
                    <li>Borderline personality disorder</li>
                    <li>Substance or alcohol addiction</li>
                    <li>Clinical depression</li>
                    <li>Active self-harm or suicidal ideation</li>
                </ul>
                <p>I also don’t offer support for:</p>
                <ul className="list-disc pl-5">
                    <li>Couples therapy</li>
                    <li>Working with children or young people</li>
                </ul>
                <p>
                    Staying within my scope allows me to offer focused, responsible, and effective support. If you are unsure
                    whether what you’re dealing with would be appropriate, you are welcome to get in touch and ask.
                </p>
            </>
        ),
    },
];

function AccordionItem({
                           question,
                           children,
                           isOpen,
                           onToggle,
                       }: {
    question: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const innerRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>(0);

    useLayoutEffect(() => {
        if (!innerRef.current) return;
        setHeight(isOpen ? innerRef.current.scrollHeight : 0);
    }, [isOpen, children]);

    return (
        <div className="p-4 sm:p-5">
            <button
                type="button"
                aria-expanded={isOpen}
                onClick={onToggle}
                className="flex w-full items-start justify-between gap-4 text-left"
            >
                <span className="text-[17px] font-medium leading-snug text-neutral-800">{question}</span>

                <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]"
                >
          {isOpen ? '−' : '+'}
        </span>
            </button>

            <div className="overflow-hidden transition-[height] duration-300 ease-out" style={{ height }}>
                <div
                    ref={innerRef}
                    className={`pt-3 text-[15px] leading-relaxed text-stone-700 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-200`}
                >
                    <div className="space-y-4">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default function FaqClient() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:py-14">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">FAQs</h1>

                <div className="divide-y divide-[#DDE8DD] rounded-lg border border-[#DDE8DD] bg-white/78 text-left shadow-[0_14px_34px_rgba(79,90,84,0.09)] backdrop-blur-[1px]">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
                        >
                            {faq.answer}
                        </AccordionItem>
                    ))}
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-neutral-700">
                    If you&apos;re unsure whether this approach is right for you, you&apos;re welcome to{' '}
                    <Link href="/contact" className="italic underline underline-offset-2 hover:no-underline">
                        Get in touch
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}
