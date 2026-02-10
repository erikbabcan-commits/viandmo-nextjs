import React from "react";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Cenník – viandmo.com",
    description: "Transparentný cenník s pravidlami. Bez skrytých poplatkov – všetko dohodnuté vopred."
};

export default function Pricing() {
    return (
        <>
            <Section
                title="Transparentný cenník a pravidlá"
            >
                <h1>Cenník</h1>
                <div className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                        <strong style={{ fontSize: 18, fontFamily: "var(--font-display)" }}>Orientačné ceny</strong>
                        <ul style={{ margin: "12px 0 0 18px", padding: 0, display: "grid", gap: 8 }}>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Sťahovanie mini: od 69 €</li>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Sťahovanie štandard: od 99 €</li>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Upratovanie: od 39 €</li>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Tepovanie: od 10–12 € / kus</li>
                        </ul>
                    </div>

                    <hr className="hr" style={{ margin: 0 }} />

                    <div>
                        <strong style={{ fontSize: 18, fontFamily: "var(--font-display)" }}>Pravidlá bez prekvapení</strong>
                        <ul style={{ margin: "12px 0 0 18px", padding: 0, display: "grid", gap: 8 }}>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Dohoda vopred: výjazd, poschodia, stojné, ťažké bremená</li>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Poistenie a profesionálny prístup</li>
                            <li className="muted" style={{ fontSize: 15, fontWeight: 500 }}>Najrýchlejšie nacenenie: WhatsApp fotka</li>
                        </ul>
                    </div>

                    <div style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link className="btn btnSolid" href={ROUTES.lead} style={{ flex: "1 1 auto", minWidth: 180 }}>Nezáväzný dopyt</Link>
                        <Link className="btn btnPrimary" href={ROUTES.moving} style={{ flex: "1 1 auto", minWidth: 180 }}><strong>Sťahovanie BA</strong></Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
