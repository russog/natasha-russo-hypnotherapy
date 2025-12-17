"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="border-b border-[#4F5A54]">
            <div className="px-6 py-4 flex items-center gap-4">
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/logo.webp"
                        alt="Natasha Russo Hypnotherapy"
                        width={120}
                        height={120}
                        priority
                    />
                    <span className="text-base md:text-lg font-light leading-tight whitespace-nowrap">
            Natasha Russo<br />Hypnotherapy
          </span>
                </Link>

                <div className="ml-auto hidden md:flex items-center gap-10 text-lg mr-20">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/working-with-me">Working with me</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/contact">Contact</Link>
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
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link href="/working-with-me" onClick={() => setOpen(false)}>
                        Working with me
                    </Link>
                    <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
