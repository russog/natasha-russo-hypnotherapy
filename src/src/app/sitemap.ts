import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
    const posts = getAllPosts();
    const now = new Date();

    const staticUrls = [
        { url: `${site.url}/`, lastModified: now },
        { url: `${site.url}/about`, lastModified: now },
        { url: `${site.url}/working-with-me`, lastModified: now },
        { url: `${site.url}/blog`, lastModified: now },
        { url: `${site.url}/faq`, lastModified: now },
        { url: `${site.url}/contact`, lastModified: now },
        { url: `${site.url}/fees-cancellation`, lastModified: now },
        { url: `${site.url}/privacy-policy`, lastModified: now },
    ];

    const postUrls = posts.map((p) => ({
        url: `${site.url}/blog/${p.slug}`,
        lastModified: p.frontmatter.date,
    }));

    return [...staticUrls, ...postUrls];
}
