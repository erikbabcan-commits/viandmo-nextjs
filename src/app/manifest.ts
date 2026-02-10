import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "viandmo.com",
        short_name: "viandmo",
        description: "Sťahovanie • Upratovanie • Tepovanie v Bratislave a okolí",
        start_url: "/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#20C05C",
        icons: [
            { src: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
            { src: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
            { src: "/icons/maskable-192.svg", sizes: "192x192", type: "image/svg+xml", purpose: "maskable" },
            { src: "/icons/maskable-512.svg", sizes: "512x512", type: "image/svg+xml", purpose: "maskable" }
        ]
    };
}
