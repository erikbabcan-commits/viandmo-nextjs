import React from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

export function Brand() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image
                src="https://viandmo.com/wp-content/uploads/viandmo_logo_regular_land.svg"
                alt={BRAND.name}
                width={120}
                height={38}
                style={{
                    height: 38,
                    width: "auto",
                    display: "block"
                }}
                unoptimized
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, borderLeft: "1px solid var(--border)", paddingLeft: 12 }}>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: 17, letterSpacing: "-0.01em" }}>{BRAND.name}</strong>
                <span style={{ fontSize: 10, fontWeight: 600, color: "var(--ink-muted)", letterSpacing: "0.02em", textTransform: "uppercase" }}>Sťahovanie • Čistenie</span>
            </div>
        </div>
    );
}
