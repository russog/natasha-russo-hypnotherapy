import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Natasha Russo Hypnotherapy",
    description: "Online cognitive-behavioural hypnotherapy",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
        <body className="min-h-screen flex flex-col">
        <main className="m-5 flex flex-1 flex-col border border-[#4F5A54] bg-white rounded-lg">
            <Navbar />
            <section className="flex-1 px-6 py-8 bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat">
                {children}
            </section>
            <footer className="mt-auto border-t border-[#4F5A54]/20 px-6 py-6 text-sm text-neutral-600">
                <div className="mx-auto max-w-6xl text-center">
                    <p>
                        © {new Date().getFullYear()} Natasha Russo Hypnotherapy · BSc Psychology · MSc Cross-Cultural
                        Psychology · Level 5 Diploma in Cognitive Behavioural Hypnotherapy
                    </p>
                </div>
            </footer>
        </main>
        </body>
        </html>
    );
}
