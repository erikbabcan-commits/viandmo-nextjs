"use client";

import React from "react";
import { Section } from "@/components/Section";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function Offline() {
    return (
        <Section
            title="Momentálne si offline"
            subtitle="Vyzerá to, že máš problém s pripojením. Niektoré funkcie webu vyžadujú internet."
        >
            <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, maxWidth: 600, margin: "0 auto" }}>
                <div style={{ fontSize: 48 }}>📡</div>
                <div>
                    <strong style={{ fontSize: 20, fontFamily: "var(--font-display)", display: "block", marginBottom: 8 }}>Sme však stále na telefóne</strong>
                    <p className="muted" style={{ lineHeight: 1.6, margin: 0 }}>
                        Aj bez internetu nám môžeš zavolať a dohodnúť si termín sťahovania alebo čistenia.
                    </p>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                    <a className="btn btnSolid" href={BRAND.phoneHref} style={{ flex: "1 1 auto", minWidth: 200 }}>
                        Zavolať: {BRAND.phone}
                    </a>
                    <button
                        className="btn btnPrimary"
                        onClick={() => window.location.reload()}
                        style={{ flex: "1 1 auto", minWidth: 200 }}
                    >
                        <strong>Skúsiť znova</strong>
                    </button>
                </div>

                <Link href="/" className="muted" style={{ fontSize: 14, textDecoration: "underline" }}>
                    Domov
                </Link>
            </div>
        </Section>
    );
}
