import React from "react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Ďakujeme – viandmo.com",
    description: "Dopyt bol odoslaný."
};

export default function Thanks() {
    return (
        <Section title="Hotovo ✅" subtitle="Dopyt je odoslaný. Ozveme sa čo najskôr.">
            <div className="card" style={{ padding: 16 }}>
                <strong>Čo ďalej?</strong>
                <ul style={{ margin: "10px 0 0 18px" }}>
                    <li className="muted" style={{ margin: "6px 0" }}>Ak chceš urýchliť nacenenie, pošli fotky cez WhatsApp.</li>
                    <li className="muted" style={{ margin: "6px 0" }}>Napíš aj poschodie, výťah, parkovanie, vzdialenosť.</li>
                </ul>
                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link className="btn btnPrimary" href={ROUTES.pricing}><strong>Cenník</strong></Link>
                    <Link className="btn" href="/">Domov</Link>
                </div>
            </div>
        </Section>
    );
}
