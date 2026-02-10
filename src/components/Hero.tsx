import React from "react";
import { CTAButtons } from "./CTAButtons";

export function Hero(props: {
    badge: string;
    headline: string;
    sub: string;
    bullets: string[];
}) {
    return (
        <section className="vh100">
            <div className="container reveal" style={{ padding: "80px 20px" }}>
                <div className="grid2">
                    <div className="card" style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div className="pill" style={{ marginBottom: 16, width: "fit-content" }}>{props.badge}</div>
                        <h1 className="h1" style={{ maxWidth: 600 }}>{props.headline}</h1>
                        <p className="lead" style={{ maxWidth: 520 }}>{props.sub}</p>

                        <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
                            <CTAButtons />
                            <div className="muted" style={{ fontSize: 13, fontWeight: 500, display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
                                <span>• Transparentné ceny</span>
                                <span>• Poistenie</span>
                                <span>• Žiadne skryté poplatky</span>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ padding: 24, background: "linear-gradient(135deg, hsla(var(--p-h), var(--p-s), 50%, 0.08) 0%, #fff 100%)", display: "flex", flexDirection: "column", gap: 16 }}>
                        <strong style={{ fontSize: 18, fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>Prečo práve my</strong>
                        <div style={{ display: "grid", gap: 12 }}>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                                {props.bullets.map((b, i) => (
                                    <li key={i} className="pill" style={{ background: "#fff", border: "1px solid var(--border)", padding: "10px 16px", boxShadow: "var(--shadow-sm)", display: "flex", alignItems: "center", gap: 12 }}>
                                        <div aria-hidden style={{ width: 12, height: 12, borderRadius: 4, background: "var(--primary)", boxShadow: "0 0 10px var(--primary-glow)", flexShrink: 0 }} />
                                        <span style={{ color: "var(--ink)", fontWeight: 500 }}>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <hr className="hr" style={{ margin: "10px 0" }} />

                        <div className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>
                            Tip: Vieme byť u teba už do 60 minút v prípade havarijných situácií alebo urgentného upratovania.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
