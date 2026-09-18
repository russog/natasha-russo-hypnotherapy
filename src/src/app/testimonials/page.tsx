import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Testimonials",
    description:
        "Read client testimonials for Natasha Russo Hypnotherapy, including experiences with anxiety, assertiveness, and confidence support.",
    alternates: { canonical: "/testimonials" },
};

const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";

const testimonials = [
    ["Anxiety", "My hypnotherapy sessions with Natasha were calm, open, and supportive. I felt at ease with her straight away. Over time, we built a positive therapeutic relationship, and I felt very comfortable sharing my reflections and anxiety-related experiences. Even when things seemed silly to me, Natasha always listened without judgement and responded with care. She taught me practical techniques that genuinely help when I feel anxious. I would definitely recommend Natasha to anyone struggling with anxiety.", "L.W"],
    ["Assertiveness", "I had the opportunity to work with Natasha, and the experience was genuinely insightful. She created a calm, supportive space while also helping me look at situations in a practical and empowering way. Our work on assertiveness gave me useful tools to approach conversations with more confidence and clarity, and I still use those techniques today. Natasha combines a warm, intuitive style with real professionalism. I would happily recommend her to anyone looking for thoughtful, effective support.", "Su"],
    ["Confidence and control", "Natasha was patient, reassuring, and an excellent listener. Her calm manner helped me feel relaxed and safe in a confidential space. I really valued the way she used thoughtful questions and pauses to help me gain powerful insights, challenge negative thinking, and build more empowering beliefs.", "S.C"],
    ["Relaxing without guilt", "Natasha helped me build trust and feel at ease in sessions. I am feeling a lot less guilty when I want to relax, and we set a goal that was achievable and realistic. She was very willing to be flexible with the different exercises and made sure I was getting the most out of the sessions.", "I.D"],
];

export default function TestimonialsStylePreview() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">
            <script dangerouslySetInnerHTML={{ __html: "window.localStorage.setItem('natasha-russo-cookie-consent','declined');" }} />
            <style>{`[aria-label="Cookie notice"]{display:none!important;}`}</style>

            <section className="border-b border-[#EEE6DB] bg-[#FFFDF9] py-20">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <p className={eyebrowClass}>Client testimonials</p>
                    <h1 className="mx-auto mt-5 max-w-3xl !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                        Client experiences.
                    </h1>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    {testimonials.map(([title, quote, name]) => (
                        <article key={title} className="rounded-sm border border-[#E6DDD1] bg-[#FBF8F2] p-7 shadow-[0_18px_45px_rgba(52,44,35,0.04)]">
                            <p className="text-sm font-semibold text-[#3D3932]">{title}</p>
                            <p className="mt-5 font-serif text-2xl italic leading-relaxed text-[#4D463E]">
                                “{quote}”
                            </p>
                            <p className="mt-5 text-xs font-semibold text-[#8A8174]">— {name}</p>
                        </article>
                    ))}
                </div>
                <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-[#5B554D]">
                    If you&apos;d like to take the next step, you&apos;re welcome to book a{" "}
                    <Link href="/contact" className="font-semibold no-underline">
                        Free 20-minute initial chat
                    </Link>.
                </p>
            </section>
        </div>
    );
}
