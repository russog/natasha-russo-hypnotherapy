import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-[#4F5A54]/20 px-6 py-10 text-sm text-neutral-800">
            <div className="mx-auto max-w-6xl">

                <div className="grid gap-8 md:grid-cols-2 items-start">
                    {/* LEFT */}
                    <div className="flex flex-col gap-4">
                        <div className="space-y-1">
                            <p className="font-medium">Natasha Russo Hypnotherapy</p>
                            <p>Cognitive Behavioural Hypnotherapist</p>
                            <p>Online sessions: UK and other locations where permitted.</p>
                            <p>
                                <Link
                                    href="mailto:contact@natasharussohypnotherapy.co.uk"
                                    className="font-bold hover:underline"
                                >
                                    contact@natasharussohypnotherapy.co.uk
                                </Link>
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <Link href="/privacy-policy" className="font-bold hover:underline">
                                Privacy Policy
                            </Link>
                            <span aria-hidden>•</span>
                            <Link href="/fees-cancellation" className="font-bold hover:underline">
                                Fees &amp; Cancellation Policy
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-3 md:items-end md:justify-self-end text-left md:text-right">
                        <p>
                            BSc Psychology <span className="mx-1">•</span> MSc Cross-Cultural Psychology
                        </p>
                        <p>Level 5 Diploma in Cognitive Behavioural Hypnotherapy</p>

                        <p>
                            Listed on the <Link
                                href="https://www.hypnotherapy-directory.org.uk/hypnotherapists/natasha-russo"
                                className="font-bold hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hypnotherapy Directory
                            </Link>
                        </p>

                        <div className="pt-1 flex justify-center md:justify-end w-full">
                            <Link
                                href="https://www.the-ncip.org/member-of-ncip/natasha-russo?from=badge"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Find me on The National Council of Integrative Psychotherapists"
                            >
                                <Image
                                    src="https://www.the-ncip.org/images/NCIP-logo.jpeg"
                                    alt="Member of The National Council of Integrative Psychotherapists (NCIP)"
                                    width={120}
                                    height={50}
                                    className="h-10 w-auto opacity-90 hover:opacity-100 transition"
                                />
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 md:justify-end pt-2">
                            <Link
                                href="https://www.linkedin.com/in/natasha-russo-5700863a8/"
                                aria-label="LinkedIn"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:bg-[#084f96]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.simpleicons.org/linkedin/FFFFFF"
                                    alt=""
                                    className="h-4 w-4"
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/natasharussohypnotherapy/"
                                aria-label="Instagram"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C13584] text-white transition hover:bg-[#a12a6d]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.simpleicons.org/instagram/FFFFFF"
                                    alt=""
                                    className="h-4 w-4"
                                />
                            </Link>
                            <Link
                                href="https://www.facebook.com/natasharussohypnotherapy"
                                aria-label="Facebook"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:bg-[#125ec0]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.simpleicons.org/facebook/FFFFFF"
                                    alt=""
                                    className="h-4 w-4"
                                />
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="mt-10 text-center text-neutral-600">
                    <p>© {new Date().getFullYear()} Natasha Russo Hypnotherapy</p>
                </div>

            </div>
        </footer>
    );
}
