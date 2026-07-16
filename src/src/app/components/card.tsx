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
                "rounded-lg border border-[#DDE8DD] bg-white/78 backdrop-blur-[1px]",
                "px-6 py-10 md:px-10",
                "shadow-[0_14px_34px_rgba(79,90,84,0.09)]",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}
