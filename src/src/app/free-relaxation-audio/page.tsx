import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free relaxation audio",
    description:
        "A free guided relaxation audio from Natasha Russo Hypnotherapy to help you slow down, settle your breathing, and reset.",
    alternates: { canonical: "/free-relaxation-audio" },
};

export default function FreeRelaxationAudioPage() {
    return (
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Free relaxation audio
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    A gentle guided recording to help you slow down and settle. You can use this during the day,
                    in the evening, or any time you notice your system feels overstimulated.
                </p>
            </div>

            <div className="relative z-10 mx-auto mb-16 max-w-3xl rounded-2xl border border-neutral-200 bg-white/70 px-6 py-8">
                <audio controls preload="none" className="w-full" aria-label="Free relaxation audio">
                    <source src="/audio/natasha-russo-relaxation-audio-v2.mp3" type="audio/mpeg" />
                    Your browser does not support the audio player.
                </audio>

                <div className="mt-6 flex justify-center">
                    <a
                        href="/audio/natasha-russo-relaxation-audio-v2.mp3"
                        download
                        className="inline-flex items-center justify-center rounded-lg bg-[#4F5A54] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(79,90,84,0.14)] transition hover:-translate-y-0.5 hover:bg-[#3F4843] hover:shadow-[0_14px_30px_rgba(79,90,84,0.18)] focus:outline-none focus:ring-2 focus:ring-[#8EA095] focus:ring-offset-2"
                    >
                        Download audio
                    </a>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                    Please only listen when it is safe to relax, and not while driving or doing anything that needs
                    your full attention.
                </p>

                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                    This recording is for general relaxation and stress-management support. It is not a substitute for
                    personalised therapy, medical advice, or crisis support.
                </p>

                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                    If you&apos;d like to explore individual support, you&apos;re welcome to <Link href="/contact" className="underline underline-offset-2 hover:no-underline">get in touch</Link>.
                </p>
            </div>
        </section>
    );
}
