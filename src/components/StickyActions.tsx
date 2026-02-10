"use client";

import React from "react";
import { BRAND, ROUTES } from "@/lib/constants";
import Link from "next/link";

export function StickyActions() {
    return (
        <div
            className="sticky-actions"
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
                padding: "12px 16px",
                paddingBottom: "max(12px, env(safe-area-inset-bottom))",
                background: "rgba(255,255,255,0.85)",
                borderTop: "1px solid var(--border)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                display: "none"
            }}
        >
            <div className="container" style={{ display: "flex", gap: 10, padding: 0 }}>
                <a className="btn btnSolid" style={{ flex: 1.2, height: 50, fontSize: 14 }} href={BRAND.phoneHref} data-evt="click_call_sticky">
                    Zavolať
                </a>
                <Link className="btn btnPrimary" style={{ flex: 1, height: 50, fontSize: 14 }} href={ROUTES.lead}>
                    <strong>Dopyt</strong>
                </Link>
            </div>
        </div>
    );
}
