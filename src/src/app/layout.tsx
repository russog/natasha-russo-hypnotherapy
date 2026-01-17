import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";

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
        <main className="flex flex-1 flex-col border-[#4F5A54] bg-white">
            <Navbar />
            <section>
                {children}
            </section>
            <Footer />
        </main>
        </body>
        </html>
    );
}
