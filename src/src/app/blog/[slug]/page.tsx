import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getAllPostSlugs, getPostBySlug, getRelatedPostsBySlug} from "@/lib/posts";
import type {Metadata} from "next";
import {site} from "@/lib/site";
import type {ComponentPropsWithoutRef} from "react";

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

const contactSectionPattern = /\n---\n\n(?=If this resonates)/;

const mdxComponents = {
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
        <ul
            {...props}
            style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
        />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
        <ol
            {...props}
            style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}
        />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} style={{ margin: "0.25rem 0" }} />,
};

const mdxOptions = {
    mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
};

function splitContactSection(content: string) {
    const [body, contact] = content.split(contactSectionPattern);

    return {
        body,
        contact,
    };
}

export function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({slug}));
}

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;

    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        return {};
    }

    const title = post.frontmatter.title;
    const description = post.frontmatter.excerpt;
    const url = `${site.url}/blog/${slug}`;
    const image = post.frontmatter.coverImage
        ? new URL(post.frontmatter.coverImage, site.url).toString()
        : undefined;

    return {
        title,
        description,
        alternates: {canonical: `/blog/${slug}`},
        openGraph: {
            type: "article",
            url,
            title,
            description,
            publishedTime: post.frontmatter.date,
            images: image ? [{url: image}] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : undefined,
        },
        keywords: post.frontmatter.tags,
    };
}

export default async function BlogPostPage({
                                               params,
                                           }: {
    params: Promise<{ slug: string }>;
}) {
    const {slug} = await params;

    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    const relatedPosts = getRelatedPostsBySlug(slug);
    const {body, contact} = splitContactSection(post.content);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.frontmatter.title,
        description: post.frontmatter.excerpt,
        datePublished: post.frontmatter.date,
        dateModified: post.frontmatter.date,
        author: [{"@type": "Person", name: "Natasha Russo"}],
        publisher: {"@type": "Organization", name: site.name},
        mainEntityOfPage: `${site.url}/blog/${slug}`,
        image: post.frontmatter.coverImage
            ? [new URL(post.frontmatter.coverImage, site.url).toString()]
            : undefined,
    };

    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            <div className="relative z-10 mx-auto max-w-3xl px-4 py-12">
                <Link
                    href="/blog"
                    className="text-sm text-stone-600 hover:text-neutral-800"
                >
                    ← Back to blog
                </Link>

                <article className="mt-6 overflow-hidden rounded-lg border border-[#DDE8DD] bg-white/85 shadow-[0_14px_34px_rgba(79,90,84,0.09)]">
                    {post.frontmatter.coverImage ? (
                        <div className="relative aspect-[4/3] w-full bg-[#EEF4ED] sm:aspect-[16/9]">
                            <Image
                                src={post.frontmatter.coverImage}
                                alt={post.frontmatter.title}
                                fill
                                className="object-cover saturate-[0.88] contrast-[0.98]"
                                priority
                            />
                        </div>
                    ) : null}

                    <div className="p-7 md:p-10">
                        <div className="text-sm text-stone-500">
                            {formatDate(post.frontmatter.date)}
                        </div>

                        <h1 className="mt-2 text-3xl font-medium tracking-tight text-neutral-800">
                            {post.frontmatter.title}
                        </h1>

                        <p className="mt-4 text-stone-700">{post.frontmatter.excerpt}</p>

                        {post.frontmatter.tags?.length ? (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {post.frontmatter.tags.map((t) => (
                                    <span
                                        key={t}
                                    className="rounded-full border border-[#DDE8DD] bg-[#F5F8F2] px-3 py-1 text-xs text-stone-600"
                                    >
                                            {t}
                                        </span>
                                ))}
                            </div>
                        ) : null}

                        <div
                            className="prose prose-stone mt-10 max-w-none prose-a:no-underline prose-h2:mb-4 prose-h3:mb-3 [&_p]:mb-6 [&_p]:leading-relaxed">
                            <MDXRemote
                                source={body}
                                components={mdxComponents}
                                options={mdxOptions}
                            />
                        </div>

                        {relatedPosts.length ? (
                            <section
                                aria-labelledby="related-articles-heading"
                                className="mt-10 border-t border-neutral-200 pt-8"
                            >
                                <h2
                                    id="related-articles-heading"
                                    className="text-xl font-medium leading-snug text-neutral-800"
                                >
                                    You may also find these articles helpful
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {relatedPosts.map((relatedPost) => (
                                        <li key={relatedPost.slug}>
                                            <Link
                                                href={`/blog/${relatedPost.slug}`}
                                                className="text-stone-700 underline underline-offset-4 transition hover:text-neutral-900"
                                            >
                                                {relatedPost.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : null}

                        {contact ? (
                            <div
                                className="prose prose-stone mt-8 max-w-none prose-a:no-underline [&_p]:mb-6 [&_p]:leading-relaxed"
                            >
                                <hr />
                                <MDXRemote
                                    source={contact}
                                    components={mdxComponents}
                                    options={mdxOptions}
                                />
                            </div>
                        ) : null}
                    </div>
                </article>
            </div>
        </>
    );
}
