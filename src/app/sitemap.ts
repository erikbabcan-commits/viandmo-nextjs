import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://viandmo.com";
    const urls = [
        "",
        "/stahovanie-bratislava",
        "/upratovanie-bratislava",
        "/tepovanie-bratislava",
        "/cennik",
        "/dopyt"
    ];

    return urls.map((p) => ({
        url: base + p,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: p === "" ? 1 : 0.8
    }));
}
