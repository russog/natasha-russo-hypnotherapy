import React from "react";

export function MiniCard({title, body}: { title: string; body: string }) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white/75 p-6 shadow-sm">
            <h3 className="font-serif font-medium text-xl">{title}</h3>
            <p className="mt-3 text-stone-700 leading-relaxed">{body}</p>
        </div>
    );
}
