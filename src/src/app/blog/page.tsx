import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    title: "Blog & Articles",
    description: "Blog posts and published articles on hypnotherapy, anxiety, habits, confidence and evidence-based change.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: `Blog & Articles | ${site.name}`,
        description:
            "Blog posts and published articles on hypnotherapy, anxiety, habits, confidence and evidence-based change.",
        url: "/blog",
        type: "website",
    },
};

const titleClass = "!font-sans text-4xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-5xl";
const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]";

const directoryArticles = [
    {
        title: "Why Understanding Your Behaviour Isn’t Always Enough",
        description:
            "Understanding our behaviour can be an important step towards change. But why doesn’t insight always make it easier to respond differently?",
        href: "https://www.hypnotherapy-directory.org.uk/articles/why-understanding-your-behaviour-isnt-always-enough",
    },
    {
        title: "Why Do We Stop Trusting Our Own Judgement?",
        description:
            "Exploring how uncertainty, second-guessing and the pressure to make the right decision can affect our confidence in our own judgement.",
        href: "https://www.hypnotherapy-directory.org.uk/articles/why-do-we-stop-trusting-our-own-judgement",
    },
    {
        title: "Why Do Some Thoughts Feel So Convincing?",
        description:
            "Why certain thoughts can feel so believable, and how we can develop greater flexibility in the way we respond to them.",
        href: "https://www.hypnotherapy-directory.org.uk/articles/why-do-some-thoughts-feel-so-convincing",
    },
];

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function BlogStylePreview() {
    const posts = getAllPosts();
    const featuredPosts = posts.slice(0, 2);
    const remainingPosts = posts.slice(2);

    return (
        <div className="bg-[#FBF8F2] text-[#25231F]">

            <section className="border-b border-[#EEE6DB] bg-[#FFFDF9] py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className={eyebrowClass}>Blog</p>
                    <h1 className="mt-5 max-w-4xl !font-sans text-5xl font-semibold leading-[0.98] tracking-normal text-[#1F1D19] sm:text-6xl">
                        Practical reflections on common emotional and mental wellbeing difficulties.
                    </h1>
                    <p className="mt-6 max-w-3xl text-base leading-7 text-[#5B554D]">
                        Articles on hypnotherapy, anxiety, habits, confidence and evidence-based change.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid items-start gap-12 xl:grid-cols-[minmax(0,1.9fr)_minmax(300px,1fr)]">
                    <section aria-labelledby="from-blog-heading">
                        <h2
                            id="from-blog-heading"
                            className="!font-sans text-2xl font-semibold leading-tight tracking-normal text-[#1F1D19] sm:text-3xl"
                        >
                            From my blog
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            {featuredPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group block overflow-hidden rounded-sm border border-[#E6DDD1] bg-[#FFFDF9] no-underline shadow-[0_18px_45px_rgba(52,44,35,0.05)]"
                                >
                                    {post.frontmatter.coverImage ? (
                                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EFE7DC]">
                                            <Image
                                                src={post.frontmatter.coverImage}
                                                alt={post.frontmatter.title}
                                                fill
                                                className="object-cover saturate-[0.92] contrast-[1.02] transition duration-300 group-hover:scale-[1.015]"
                                                sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                        </div>
                                    ) : null}
                                    <div className="p-7">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A8174]">
                                            {formatDate(post.frontmatter.date)}
                                        </p>
                                        <h3 className={`${titleClass} mt-4 text-3xl sm:text-4xl`}>
                                            {post.frontmatter.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-6 text-[#5B554D]">{post.frontmatter.excerpt}</p>
                                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1F1D19]">
                                            Read more <FiChevronRight aria-hidden />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </section>

                    <aside
                        aria-labelledby="directory-articles-heading"
                        className="self-start border border-[#D8D1C6] bg-[#FFFDF9] px-6 py-8 sm:px-8 xl:mt-0 xl:flex xl:h-[840px] xl:flex-col"
                    >
                        <h2
                            id="directory-articles-heading"
                            className="!font-sans text-2xl font-semibold leading-tight tracking-normal text-[#1F1D19]"
                        >
                            Also published on Hypnotherapy Directory
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-[#5B554D]">
                            I’ve also contributed articles to Hypnotherapy Directory, exploring different aspects of how we think, feel and respond. You can read them using the links below.
                        </p>

                        <div
                            role="region"
                            aria-label="Hypnotherapy Directory articles"
                            tabIndex={0}
                            className="mt-7 divide-y divide-[#D8D1C6] border-y border-[#D8D1C6] outline-none focus-visible:ring-2 focus-visible:ring-[#8A8174] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF9] xl:min-h-0 xl:flex-1 xl:overflow-y-scroll xl:overscroll-contain xl:pr-3 xl:[-webkit-overflow-scrolling:touch] xl:[scrollbar-color:#8A8174_#EEE6DB] xl:[scrollbar-width:thin] xl:[&::-webkit-scrollbar]:w-2 xl:[&::-webkit-scrollbar-thumb]:rounded-full xl:[&::-webkit-scrollbar-thumb]:bg-[#8A8174] xl:[&::-webkit-scrollbar-track]:bg-[#EEE6DB]"
                        >
                            {directoryArticles.map((article) => (
                                <article key={article.href} className="py-6">
                                    <h3 className="!font-sans text-xl font-semibold leading-tight tracking-normal text-[#1F1D19]">
                                        {article.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-[#5B554D]">
                                        {article.description}
                                    </p>
                                    <a
                                        href={article.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block text-sm font-semibold text-[#1F1D19] underline decoration-[#8A8174] underline-offset-4 transition hover:text-[#4F5A54]"
                                    >
                                        Read on Hypnotherapy Directory ↗
                                    </a>
                                </article>
                            ))}
                        </div>
                    </aside>
                </div>

                <div className="mt-14 border-t border-[#D8D1C6] pt-8">
                    <p className={eyebrowClass}>More from my blog</p>
                    <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
                        {remainingPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group grid gap-4 border-t border-[#D8D1C6] pt-5 no-underline sm:grid-cols-[120px_1fr]"
                            >
                                {post.frontmatter.coverImage ? (
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#EFE7DC]">
                                        <Image
                                            src={post.frontmatter.coverImage}
                                            alt=""
                                            fill
                                            className="object-cover saturate-[0.9] contrast-[1.02]"
                                            sizes="120px"
                                        />
                                    </div>
                                ) : null}
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A8174]">
                                        {formatDate(post.frontmatter.date)}
                                    </p>
                                    <h3 className="mt-2 !font-sans text-xl font-semibold leading-tight tracking-normal text-[#1F1D19]">
                                        {post.frontmatter.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-[#5B554D]">{post.frontmatter.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
