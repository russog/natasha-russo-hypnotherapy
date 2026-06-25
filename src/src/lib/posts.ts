import fs from "fs";
import path from "path";
import matter from "gray-matter";



export type PostFrontmatter = {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    featured?: boolean;
};

export type Post = {
    slug: string;
    frontmatter: PostFrontmatter;
    content: string;
};

export type RelatedPostLink = {
    slug: string;
    title: string;
};

type RelatedPostRef = string | RelatedPostLink;

const postsDir = path.join(process.cwd(), "src", "content", "posts");

const relatedPostSlugs: Record<string, RelatedPostRef[]> = {
    "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it": [
        "why-do-capable-people-feel-mentally-exhausted-even-when-they-are-coping",
        "why-switching-off-at-night-Is-harder-than-it-should-be",
        "when-everything-feels-like-it-needs-your-attention",
    ],
    "why-switching-off-at-night-Is-harder-than-it-should-be": [
        "does-rest-feel-uncomfortable-even-when-you-desperately-need-it",
        "why-overthinking-is-so-hard-to-stop",
        "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it",
    ],
    "why-do-capable-people-feel-mentally-exhausted-even-when-they-are-coping": [
        "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it",
        "does-rest-feel-uncomfortable-even-when-you-desperately-need-it",
        "why-it-never-feels-like-enough",
    ],
    "when-thinking-becomes-overthinking": [
        "why-overthinking-is-so-hard-to-stop",
        "why-overthinking-turns-toward-what-if-scenarios",
        "why-anxiety-feels-so-convincing-and-how-it-starts-to-loosen",
    ],
    "why-overthinking-is-so-hard-to-stop": [
        "when-thinking-becomes-overthinking",
        "why-overthinking-turns-toward-what-if-scenarios",
        "understanding-the-safety-behaviours-that-keep-anxiety-going",
    ],
    "why-overthinking-turns-toward-what-if-scenarios": [
        "why-overthinking-is-so-hard-to-stop",
        "understanding-the-safety-behaviours-that-keep-anxiety-going",
        "why-anxiety-feels-so-convincing-and-how-it-starts-to-loosen",
    ],
    "understanding-the-safety-behaviours-that-keep-anxiety-going": [
        "why-anxiety-feels-so-convincing-and-how-it-starts-to-loosen",
        "why-overthinking-is-so-hard-to-stop",
        "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it",
    ],
    "why-anxiety-feels-so-convincing-and-how-it-starts-to-loosen": [
        "understanding-the-safety-behaviours-that-keep-anxiety-going",
        "why-overthinking-is-so-hard-to-stop",
        "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it",
    ],
    "does-rest-feel-uncomfortable-even-when-you-desperately-need-it": [
        "why-switching-off-at-night-Is-harder-than-it-should-be",
        "why-do-capable-people-feel-mentally-exhausted-even-when-they-are-coping",
        "why-it-never-feels-like-enough",
    ],
    "when-everything-feels-like-it-needs-your-attention": [
        "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it",
        "why-do-capable-people-feel-mentally-exhausted-even-when-they-are-coping",
        "why-it-never-feels-like-enough",
    ],
    "why-it-never-feels-like-enough": [
        {
            slug: "how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing",
            title: "How Confidence Actually Builds",
        },
        "when-you-know-you-can-but-still-feel-unsure",
        "feeling-stuck-even-when-trying-to-move-forward",
        "when-everything-feels-like-it-needs-your-attention",
    ],
    "when-you-know-you-can-but-still-feel-unsure": [
        "how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing",
        "feeling-stuck-even-when-trying-to-move-forward",
        "when-conversations-start-feeling-too-self-conscious",
    ],
    "how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing": [
        "when-you-know-you-can-but-still-feel-unsure",
        "feeling-stuck-even-when-trying-to-move-forward",
        "why-it-is-sometimes-hard-to-say-or-do-what-you-want-assertiveness-in-everyday-life",
    ],
    "feeling-stuck-even-when-trying-to-move-forward": [
        "how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing",
        "when-you-know-you-can-but-still-feel-unsure",
        "why-overthinking-is-so-hard-to-stop",
    ],
    "when-conversations-start-feeling-too-self-conscious": [
        "why-it-is-sometimes-hard-to-say-or-do-what-you-want-assertiveness-in-everyday-life",
        "when-you-know-you-can-but-still-feel-unsure",
        "why-overthinking-turns-toward-what-if-scenarios",
    ],
    "why-it-is-sometimes-hard-to-say-or-do-what-you-want-assertiveness-in-everyday-life": [
        "when-conversations-start-feeling-too-self-conscious",
        "how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing",
        "when-you-know-you-can-but-still-feel-unsure",
    ],
    "making-sense-of-hypnotherapy": [
        "why-anxiety-can-stay-stuck-even-when-you-are-trying-to-manage-it",
        "why-overthinking-is-so-hard-to-stop",
        "why-it-is-sometimes-hard-to-say-or-do-what-you-want-assertiveness-in-everyday-life",
    ],
};



export function getAllPostSlugs() {
    return fs
        .readdirSync(postsDir)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
    const fullPath = path.join(postsDir, `${slug}.mdx`);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(file);

    return {
        slug,
        frontmatter: data as PostFrontmatter,
        content,
    };
}

export function getAllPosts(): Post[] {
    const slugs = getAllPostSlugs();
    const posts = slugs.map(getPostBySlug);

    // newest first
    posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
    return posts;
}

export function getRelatedPostsBySlug(slug: string): RelatedPostLink[] {
    const relatedRefs = relatedPostSlugs[slug] ?? [];

    return relatedRefs.map((relatedRef) => {
        if (typeof relatedRef !== "string") {
            return relatedRef;
        }

        const relatedSlug = relatedRef;
        const post = getPostBySlug(relatedSlug);

        return {
            slug: relatedSlug,
            title: post.frontmatter.title,
        };
    });
}
