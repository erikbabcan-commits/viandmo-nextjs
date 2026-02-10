export function isEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function isPhone(v: string) {
    // simple EU-ish check; keep permissive
    const s = v.replace(/[^\d+]/g, "");
    return s.length >= 9 && s.length <= 16;
}

export function clampLen(v: string, max: number) {
    return (v || "").toString().trim().slice(0, max);
}
