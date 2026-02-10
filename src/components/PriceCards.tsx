import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export function PriceCards(props: { variant: "moving" | "cleaning" | "upholstery" }) {
    const cards =
        props.variant === "moving"
            ? [
                { title: "Mini", price: "od 69 €", desc: "Malé presuny, 1–2 hod, rýchlo.", bullets: ["Dodávka + posádka", "Férové podmienky", "BA mesto"] },
                { title: "Štandard", price: "od 99 €", desc: "Byt / kancelária, najčastejšia voľba.", bullets: ["2 pracovníci", "Poistenie", "Dohoda vopred"] },
                { title: "Profi", price: "individuálne", desc: "Ťažké bremená, klavír, väčšie sťahovania.", bullets: ["3+ pracovníci", "Logistika", "Priorita termínu"] }
            ]
            : props.variant === "cleaning"
                ? [
                    { title: "Mini", price: "od 39 €", desc: "Rýchle upratanie / pravidelne.", bullets: ["Byty", "Office", "Flex čas"] },
                    { title: "Hĺbkové", price: "od 79 €", desc: "Po rekonštrukcii / detail.", bullets: ["Detail zóny", "Bez šmúh", "Kontrola"] },
                    { title: "Profi", price: "individuálne", desc: "Veľké plochy, firmy, pravidelné.", bullets: ["Zmluvne", "SLA", "Časové okná"] }
                ]
                : [
                    { title: "Sedačka", price: "od 12 € / miesto", desc: "Tepovanie čalúnenia.", bullets: ["Rýchly termín", "Bez zápachu", "Hygiena"] },
                    { title: "Matrac", price: "od 10 € / strana", desc: "Hĺbkové čistenie matracov.", bullets: ["Alergény", "Mikro čistenie", "Sušenie"] },
                    { title: "Koberec", price: "od 2 € / m²", desc: "Podľa typu a znečistenia.", bullets: ["Doprava BA", "Meranie", "Výsledok"] }
                ];

    return (
        <div className="grid3 reveal">
            {cards.map((c) => (
                <div key={c.title} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <strong style={{ fontSize: 20, fontFamily: "var(--font-display)" }}>{c.title}</strong>
                        <span style={{ fontWeight: 800, color: "var(--primary-deep)", fontSize: 18 }}>{c.price}</span>
                    </div>
                    <div className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>{c.desc}</div>
                    <div style={{ flex: 1 }}>
                        <ul style={{ margin: "4px 0 0 16px", padding: 0, display: "grid", gap: 8 }}>
                            {c.bullets.map((b) => <li key={b} className="muted" style={{ fontSize: 14, fontWeight: 500 }}>{b}</li>)}
                        </ul>
                    </div>
                    <div style={{ marginTop: 8 }}>
                        <Link className="btn btnPrimary" href={ROUTES.lead} style={{ width: "100%", height: 48 }}>
                            <strong>Chcem ponuku</strong>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
