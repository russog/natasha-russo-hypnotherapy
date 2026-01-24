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

        <section className="relative overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                aria-hidden
            />
            <div className="absolute inset-0 bg-white/35" aria-hidden />

            <main className="relative z-10 mx-auto max-w-5xl px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-3xl font-medium tracking-tight text-neutral-800">
                        Blog
                    </h1>
                    <p className="mt-3 max-w-2xl text-stone-700">
                        Practical, plain-English writing on hypnotherapy, anxiety, habits, and
                        evidence-based change.
                    </p>
                </header>

                <section className="grid gap-8 sm:grid-cols-2">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md !no-underline"
                        >
                            {post.frontmatter.coverImage ? (
                                <div className="relative aspect-[16/10] w-full">
                                    <Image
                                        src={post.frontmatter.coverImage}
                                        alt={post.frontmatter.title}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
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
        </section>
    );
}
