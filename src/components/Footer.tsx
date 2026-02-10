import React from "react";
import Link from "next/link";
import { Brand } from "./Brand";
import { BRAND, ROUTES } from "@/lib/constants";

export function Footer() {
    return (
        <footer style={{ borderTop: "1px solid var(--border)", marginTop: 48, background: "var(--bg-soft)" }}>
            <div className="container" style={{ padding: "48px 20px", display: "grid", gap: 32 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start", justifyContent: "space-between" }}>
                    <div style={{ maxWidth: 320 }}>
                        <Link href="/">
                            <Brand />
                        </Link>
                        <div className="muted" style={{ fontSize: 14, marginTop: 12, lineHeight: 1.5 }}>
                            Bratislava a okolie • Poistenie • Férové ceny vopred. Sme tvoj partner pre bezstarostné sťahovanie a upratovanie.
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <Link className="pill" href={ROUTES.moving}>Sťahovanie</Link>
                        <Link className="pill" href={ROUTES.cleaning}>Upratovanie</Link>
                        <Link className="pill" href={ROUTES.upholstery}>Tepovanie</Link>
                        <Link className="pill" href={ROUTES.pricing}>Cenník</Link>
                    </div>
                </div>

                <div className="grid2" style={{ gap: 40 }}>
                    <div>
                        <strong style={{ display: "block", marginBottom: 16, fontSize: 16, fontFamily: "var(--font-display)" }}>Kontaktuj nás</strong>
                        <div className="muted" style={{ display: "grid", gap: 10, fontSize: 15 }}>
                            <div>Sťahovanie: <a href={BRAND.phoneHref} style={{ color: "var(--ink)", fontWeight: 600 }}>{BRAND.phone}</a></div>
                            <div>Upratovanie: <a href={BRAND.phoneCleaningHref} style={{ color: "var(--ink)", fontWeight: 600 }}>{BRAND.phoneCleaning}</a></div>
                            <div>Email: <a href={`mailto:${BRAND.email}`} style={{ color: "var(--primary-deep)", fontWeight: 500 }}>{BRAND.email}</a></div>
                            {BRAND.facebookHref && (
                                <div style={{ marginTop: 4 }}><a href={BRAND.facebookHref} target="_blank" rel="noreferrer" className="btn btnPrimary" style={{ height: 36, padding: "0 14px", fontSize: 13 }}>Sleduj nás na Facebooku</a></div>
                            )}
                        </div>
                    </div>

                    <div>
                        <strong style={{ display: "block", marginBottom: 16, fontSize: 16, fontFamily: "var(--font-display)" }}>Fakturačné údaje</strong>
                        <div className="card" style={{ padding: 16, background: "#fff", boxShadow: "var(--shadow-sm)" }}>
                            <div className="muted" style={{ display: "grid", gap: 4, fontSize: 14, lineHeight: 1.4 }}>
                                <strong style={{ color: "var(--ink)" }}>{BRAND.company.name}</strong>
                                <span>{BRAND.company.address}</span>
                                <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
                                    <span>IČO: {BRAND.company.ico}</span>
                                    <span>DIČ: {BRAND.company.dic}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hr" style={{ margin: 0 }} />

                <div className="muted" style={{ fontSize: 12, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontWeight: 500 }}>
                    <span>© {new Date().getFullYear()} viandmo.com. Všetky práva vyhradené.</span>
                    <div style={{ display: "flex", gap: 12 }}>
                        <span>{BRAND.serviceArea}</span>
                        <span>•</span>
                        <span>Vyrobené s ❤️ v BA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
