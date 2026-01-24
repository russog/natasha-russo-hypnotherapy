"use client";
import { useState, ReactNode } from "react"

interface ExpandableMiniCardProps {
    title: string
    body: string
    details: ReactNode
}

export default function ExpandableMiniCard({
                                               title,
                                               body,
                                               details,
                                           }: ExpandableMiniCardProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-serif font-medium text-xl text-neutral-900">
                        {title}
                    </h3>

                    {!open && (
                        <p className="mt-3 text-stone-700 leading-relaxed">
                            {body}
                        </p>
                    )}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition"
                >
                    {open ? "Less" : "More"}
                </button>
            </div>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden text-stone-700 leading-relaxed">
                    {details}
                </div>
            </div>
        </div>
    )
}
