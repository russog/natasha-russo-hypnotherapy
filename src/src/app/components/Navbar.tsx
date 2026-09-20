"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/working-with-me", label: "Working with me" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Client Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-[#4F5A54] bg-[#F7F9F5]/95 backdrop-blur nav-reset md:static md:z-auto md:bg-transparent md:backdrop-blur-none">
            <div className="px-4 py-1.5 flex items-center gap-3 md:px-6 md:py-4 md:gap-4">
                <Link href="/" className="navbar-brand flex items-center gap-3 md:gap-4">
                    <Image
                        src="/logo.webp"
                        alt="Natasha Russo Hypnotherapy"
                        width={120}
                        height={120}
                        priority
                        className="h-12 w-12 md:h-[92px] md:w-[92px]"
                    />
                    <span className="text-sm md:text-lg font-light leading-snug md:leading-tight whitespace-nowrap">
            Natasha Russo<br />Hypnotherapy
          </span>
                </Link>

                <div className="ml-auto hidden md:flex items-center gap-10 text-lg mr-20">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button
                    className="ml-auto md:hidden flex flex-col gap-1"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}>
                    <span className="h-0.5 w-6 bg-[#4F5A54]" />
                    <span className="h-0.5 w-6 bg-[#4F5A54]" />
                    <span className="h-0.5 w-6 bg-[#4F5A54]" />
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-[#4F5A54] px-6 py-4 flex flex-col gap-4 text-base">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
