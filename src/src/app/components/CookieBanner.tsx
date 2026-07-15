"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_MEASUREMENT_ID = "G-9K50BFF40N";
const CONSENT_STORAGE_KEY = "natasha-russo-cookie-consent";

type ConsentChoice = "accepted" | "declined";

const consentListeners = new Set<() => void>();

function getStoredChoice(): ConsentChoice | null {
    if (typeof window === "undefined") {
        return null;
    }

    const storedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (storedChoice === "accepted" || storedChoice === "declined") {
        return storedChoice;
    }

    return null;
}

function subscribeToConsentChanges(listener: () => void) {
    consentListeners.add(listener);

    const handleStorageChange = (event: StorageEvent) => {
        if (event.key === CONSENT_STORAGE_KEY) {
            listener();
        }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
        consentListeners.delete(listener);
        window.removeEventListener("storage", handleStorageChange);
    };
}

function emitConsentChange() {
    consentListeners.forEach((listener) => listener());
}

function AnalyticsScripts() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
    );
}

export default function CookieBanner() {
    const choice = useSyncExternalStore(subscribeToConsentChanges, getStoredChoice, () => null);

    const saveChoice = (newChoice: ConsentChoice) => {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, newChoice);
        emitConsentChange();
    };

    return (
        <>
            {choice === "accepted" ? <AnalyticsScripts /> : null}

            {choice === null ? (
                <section
                    aria-label="Cookie notice"
                    className="fixed inset-x-0 bottom-0 z-50 border-t border-[#4F5A54]/20 bg-white/95 px-4 py-2.5 shadow-[0_-6px_20px_rgba(15,23,42,0.06)] backdrop-blur sm:px-5"
                >
                    <div className="mx-auto flex max-w-6xl flex-col gap-2.5 text-neutral-800 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-3xl">
                            <h2 className="text-sm font-medium leading-snug text-neutral-900">Cookies</h2>
                            <p className="text-xs leading-snug sm:text-sm">
                                I use essential cookies to keep the website working and optional analytics cookies
                                to understand how visitors use the site. You can accept or decline analytics cookies.
                            </p>
                            <Link href="/privacy-policy" className="text-xs font-bold underline sm:text-sm">
                                Read the privacy policy
                            </Link>
                        </div>

                        <div className="flex flex-col gap-1.5 sm:flex-row md:justify-end">
                            <button
                                type="button"
                                onClick={() => saveChoice("declined")}
                                className="inline-flex min-h-9 items-center justify-center border border-[#4F5A54]/40 px-4 py-1.5 text-xs font-semibold text-[#4F5A54] transition hover:border-[#4F5A54] hover:bg-[#4F5A54]/5 sm:text-sm"
                            >
                                Decline
                            </button>
                            <button
                                type="button"
                                onClick={() => saveChoice("accepted")}
                                className="inline-flex min-h-9 items-center justify-center bg-[#4F5A54] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#3f4843] sm:text-sm"
                            >
                                Accept cookies
                            </button>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
}
