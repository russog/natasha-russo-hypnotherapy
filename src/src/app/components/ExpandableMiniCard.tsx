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
        <div className="rounded-sm border border-[#E6DDD1] bg-[#F5EFE6] p-6 shadow-[0_18px_45px_rgba(52,44,35,0.06)] transition">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        {Icon && (
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DDE8DD] bg-[#F5F8F2] text-[#4F5A54]">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        )}
                        <h3 className="!font-sans text-2xl font-semibold leading-tight tracking-normal text-[#1F1D19]">
                            {title}
                        </h3>
                    </div>

                    {!open && (
                        <p className="mt-4 text-sm leading-6 text-[#625C53]">
                            {body}
                        </p>
                    )}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="shrink-0 rounded-full border border-[#D8D1C6] bg-[#FFFDF9]/80 px-3 py-1 text-xs font-semibold text-[#4F5A54] transition hover:bg-[#F5F8F2]"
                >
                    {open ? "Show less" : "Read more"}
                </button>
            </div>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden text-sm leading-6 text-[#5B554D]">
                    {details}
                </div>
            </div>
        </div>
    )
}
