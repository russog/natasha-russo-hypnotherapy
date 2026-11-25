import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/blog/when-everything-feels-like-it-needs-your-attention",
                destination: "/blog/does-rest-feel-uncomfortable-even-when-you-desperately-need-it",
                permanent: true,
            },
            {
                source: "/blog/when-you-know-you-can-but-still-feel-unsure",
                destination: "/blog/how-confidence-actually-builds-what-changes-when-you-stop-waiting-and-start-doing",
                permanent: true,
            },
            {
                source: "/blog/when-thinking-becomes-overthinking",
                destination: "/blog/why-overthinking-is-so-hard-to-stop",
                permanent: true,
            },
            {
                source: "/blog/why-overthinking-turns-toward-what-if-scenarios",
                destination: "/blog/why-overthinking-is-so-hard-to-stop",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.the-ncip.org",
            },
        ],
    },
};

export default nextConfig;
