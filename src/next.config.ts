import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: "/audio/natasha-russo-relaxation-audio-louder.mp3",
                headers: [
                    {
                        key: "Content-Disposition",
                        value: 'attachment; filename="natasha-russo-relaxation-audio-louder.mp3"',
                    },
                    {
                        key: "Content-Type",
                        value: "audio/mpeg",
                    },
                ],
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
