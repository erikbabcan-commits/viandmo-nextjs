import React from "react";
import Link from "next/link";
import { Brand } from "./Brand";
import { ROUTES, BRAND } from "@/lib/constants";

export function Header() {
    return (
        <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px) saturate(180%)", borderBottom: "1px solid var(--border)", WebkitBackdropFilter: "blur(12px) saturate(180%)" }}>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px" }}>
                <Link href="/" aria-label="Domov" style={{ display: "flex" }}>
                    <Brand />
                </Link>

                <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Link className="pill" href={ROUTES.pricing} style={{ height: 38 }}>Cenník</Link>
                    <Link className="btn btnSolid" href={BRAND.phoneHref} aria-label="Zavolať" style={{ height: 42, padding: "0 20px", fontSize: 14 }}>
                        Zavolať
                    </Link>
                </nav>
            </div>
        </header>
    );
}
