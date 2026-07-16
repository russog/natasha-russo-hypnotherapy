"use client";
import { useState, ReactNode } from "react"
import { FiActivity, FiRefreshCw, FiTrendingUp } from "react-icons/fi"

interface ExpandableMiniCardProps {
    title: string
    body: string
    details: ReactNode
    iconName?: "anxiety" | "overthinking" | "confidence"
}

const cardIcons = {
    anxiety: FiActivity,
    overthinking: FiRefreshCw,
    confidence: FiTrendingUp,
}

export default function ExpandableMiniCard({
                                               title,
                                               body,
                                               details,
                                               iconName,
                                           }: ExpandableMiniCardProps) {
    const [open, setOpen] = useState(false)
    const Icon = iconName ? cardIcons[iconName] : null

    return (
        <div className="rounded-lg border border-[#DDE8DD] bg-white/86 p-5 shadow-[0_10px_24px_rgba(79,90,84,0.07)] transition">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        {Icon && (
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        )}
                        <h3 className="font-serif font-medium text-xl text-neutral-900">
                            {title}
                        </h3>
                    </div>

                    {!open && (
                        <p className="mt-3 text-stone-700 leading-relaxed">
                            {body}
                        </p>
                    )}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="shrink-0 rounded-full border border-[#DDE8DD] bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 transition hover:bg-[#F5F8F2]"
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
