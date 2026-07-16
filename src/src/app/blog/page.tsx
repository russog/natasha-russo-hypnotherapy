import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import React from "react";

export const metadata: Metadata = {
    title: "Blog",
    description: "Articles on hypnotherapy, anxiety, habits, confidence and evidence-based change.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: `Blog | ${site.name}`,
        description:
            "Articles on hypnotherapy, anxiety, habits, confidence and evidence-based change.",
        url: "/blog",
        type: "website",
    },
};

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
            <main className="relative z-10 mx-auto max-w-5xl px-4 py-12">
                <h1 className="text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">Blog</h1>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Practical reflections on common emotional and mental wellbeing difficulties, including anxiety,
                    overthinking, confidence, and related patterns.
                </p>

                <section className="mt-8 grid gap-8 sm:grid-cols-2">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group overflow-hidden rounded-lg border border-[#DDE8DD] bg-white/82 shadow-[0_12px_30px_rgba(79,90,84,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(79,90,84,0.12)] !no-underline"
                        >
                            {post.frontmatter.coverImage ? (
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EEF4ED]">
                                    <Image
                                        src={post.frontmatter.coverImage}
                                        alt={post.frontmatter.title}
                                        fill
                                        className="object-cover saturate-[0.88] contrast-[0.98] transition duration-300 group-hover:scale-[1.015]"
                                    />
                                </div>
                            ) : null}

                            <div className="p-6">
                                <div className="text-sm text-stone-500">
                                    {formatDate(post.frontmatter.date)}
                                </div>
                                <h2 className="mt-2 text-xl font-medium leading-snug text-neutral-800">
                                    {post.frontmatter.title}
                                </h2>
                                <p className="mt-3 text-stone-700 font-light">
                                    {post.frontmatter.excerpt}
                                </p>
                                <div className="mt-5 text-sm font-medium text-neutral-800">
                                    Read more{" "}
                                    <span className="inline-block transition group-hover:translate-x-0.5">
                                →
                            </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
    );
}
