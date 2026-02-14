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
                                className="text-neutral-700 hover:text-neutral-900 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.71V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.98-2.92 4.01V24h-5V8z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://www.instagram.com/natasharussohypnotherapy/"
                                aria-label="Instagram"
                                className="text-neutral-700 hover:text-neutral-900 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5z"/>
                                    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7z"/>
                                    <circle cx="17.5" cy="6.5" r="1"/>
                                </svg>
                            </Link>
                            <Link
                                href="https://www.facebook.com/natasharussohypnotherapy"
                                aria-label="Facebook"
                                className="text-neutral-700 hover:text-neutral-900 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.49-1.46H16.8V3.98c-.33-.04-1.46-.14-2.77-.14-2.74 0-4.62 1.67-4.62 4.74V10H6.3v3h3.11v8h4.09z"/>
                                </svg>
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
