import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
    const posts = getAllPosts();

    const postUrls = posts.map((p) => ({
        url: `${site.url}/blog/${p.slug}`,
        lastModified: p.frontmatter.date,
    }));

    return [
        { url: site.url, lastModified: new Date() },
        { url: `${site.url}/blog`, lastModified: new Date() },
        ...postUrls,
    ];
}
