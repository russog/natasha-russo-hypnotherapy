import React from "react";

export function Card({
                         children,
                         className = "",
                     }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={[
                "rounded-2xl border border-stone-200/80 bg-white/60",
                "px-6 py-10 md:px-10",
                "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}
