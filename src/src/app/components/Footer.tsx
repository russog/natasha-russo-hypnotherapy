import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-[#4F5A54]/20 px-6 py-10 text-sm text-neutral-800">
            <div className="mx-auto max-w-6xl">

                {/* Top section */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Left column */}
                    <div className="space-y-4">
                        <div>
                            <p className="font-medium">Natasha Russo Hypnotherapy</p>
                            <p>Cognitive Behavioural Hypnotherapist</p>
                        </div>

                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                            <Link
                                href="/privacy-policy"
                                className="hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            <span>•</span>
                            <Link
                                href="/fees-cancellation"
                                className="hover:underline"
                            >
                                Fees & Cancellation Policy
                            </Link>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-2 md:justify-self-end">
                        {/* Line 1 */}
                        <p>
                            BSc Psychology <span className="mx-1">•</span> MSc Cross-Cultural Psychology
                        </p>

                        {/* Line 2 */}
                        <p>
                            Level 5 Diploma in Cognitive Behavioural Hypnotherapy
                        </p>

                        {/* Line 3 – badge */}
                        <div className="flex justify-center pt-1">
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
                    </div>



                </div>

                {/* Bottom copyright */}
                <div className="mt-10 text-center text-neutral-600">
                    <p>© {new Date().getFullYear()} Natasha Russo Hypnotherapy</p>
                </div>

            </div>
        </footer>
    );
}
