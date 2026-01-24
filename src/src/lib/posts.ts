import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];      // ← add this
    featured?: boolean;  // ← optional, if you’re using it
};

export type Post = {
    slug: string;
    frontmatter: PostFrontmatter;
    content: string;
};

const postsDir = path.join(process.cwd(), "src", "content", "posts");



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
