import Link from "next/link";
import { FiDownload, FiHeadphones } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free relaxation audio",
    description:
        "A free guided relaxation audio from Natasha Russo Hypnotherapy to help you slow down, settle your breathing, and reset.",
    alternates: { canonical: "/free-relaxation-audio" },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";
const textClass = "text-base leading-7 text-[#5B554D]";

export default function FreeRelaxationAudioStylePreview() {
    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">

            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.42fr_0.58fr] md:items-start">
                <div>
                    <p className={eyebrowClass}>Free audio</p>
                    <h1 className="mt-5 !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                        Free relaxation audio.
                    </h1>
                    <p className={`${textClass} mt-6`}>
                        A gentle guided recording to help you slow down and settle. You can use this during the day, in
                        the evening, or any time you notice your system feels overstimulated.
                    </p>
                </div>

                <div className="border-t border-[#D8D1C6] pt-8">
                    <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8D1C6] text-[#4F5A54]">
                            <FiHeadphones aria-hidden />
                        </span>
                        <h2 className={titleClass}>Listen when it is safe to relax.</h2>
                    </div>

                    <audio controls preload="none" className="mt-8 w-full" aria-label="Free relaxation audio">
                        <source src="/audio/natasha-russo-relaxation-audio-louder.mp3" type="audio/mpeg" />
                        Your browser does not support the audio player.
                    </audio>

                    <a
                        href="/audio/natasha-russo-relaxation-audio-louder.mp3"
                        download
                        className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#4F5A54] px-5 py-3 text-sm font-semibold text-white no-underline shadow-[0_16px_34px_rgba(48,55,50,0.18)]"
                    >
                        <FiDownload aria-hidden /> Download audio
                    </a>

                    <div className="mt-8 space-y-4 border-t border-[#D8D1C6] pt-6">
                        <p className="text-sm leading-6 text-[#5B554D]">
                            Please only listen when it is safe to relax, and not while driving or doing anything that
                            needs your full attention.
                        </p>
                        <p className="text-sm leading-6 text-[#5B554D]">
                            This recording is for general relaxation and stress-management support. It is not a
                            substitute for personalised therapy, medical advice, or crisis support.
                        </p>
                        <p className="text-sm leading-6 text-[#5B554D]">
                            If you&apos;d like to explore individual support, you&apos;re welcome to{" "}
                            <Link href="/contact" className="font-semibold no-underline">
                                get in touch
                            </Link>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
