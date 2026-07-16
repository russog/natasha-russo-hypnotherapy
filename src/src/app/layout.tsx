import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { site } from "@/lib/site";
import CookieBanner from "@/app/components/CookieBanner";

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

const mainNav = [
    { name: "Home", url: `${site.url}/` },
    { name: "About me", url: `${site.url}/about` },
    { name: "Working with me", url: `${site.url}/working-with-me` },
    { name: "Blog", url: `${site.url}/blog` },
    { name: "Client Testimonials", url: `${site.url}/testimonials` },
    { name: "FAQ", url: `${site.url}/faq` },
    { name: "Contact", url: `${site.url}/contact` },
];

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: site.logo,
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
        "@type": "Organization",
        name: site.name,
    },
};

const navSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: mainNav.map((item, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.name,
        url: item.url,
    })),
};

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: site.name,
        template: `%s | ${site.name}`,
    },
    description: site.description,
    alternates: { canonical: "/" },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        type: "website",
        url: site.url,
        siteName: site.name,
        title: site.name,
        description: site.description,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
        <body className="min-h-screen flex flex-col">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />
        <main className="flex flex-1 flex-col border-[#4F5A54] bg-[#F7F9F5]">
            <Navbar />
            <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F8FAF6_0%,#FFFDF8_38%,#F2F6F4_72%,#F7F4EE_100%)]">
                <div
                    className="absolute inset-0 bg-[url('/bkg.webp')] bg-fixed bg-center bg-no-repeat opacity-[0.08] saturate-50"
                    style={{backgroundSize: 'cover'}}
                    aria-hidden
                />
                <div
                    className="absolute inset-0 bg-white/30"
                    aria-hidden
                />
                {children}
            </section>
            <Footer />
        </main>
        <CookieBanner />
        </body>
        </html>
    );
}
