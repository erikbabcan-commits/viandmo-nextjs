"use client";

import React, { useMemo, useState } from "react";
import { isEmail, isPhone } from "@/lib/validators";
import { ROUTES } from "@/lib/constants";
import { useRouter } from "next/navigation";

export function LeadForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState("");
    const [err, setErr] = useState("");

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: "stahovanie" as "stahovanie" | "upratovanie" | "tepovanie",
        location: "",
        details: "",
        preferredDate: ""
    });

    const valid = useMemo(() => {
        if (!form.name.trim()) return false;
        if (!isEmail(form.email)) return false;
        if (!isPhone(form.phone)) return false;
        if (!form.location.trim()) return false;
        return true;
    }, [form]);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setErr("");
        setOk("");

        if (!valid) {
            setErr("Skontroluj prosím povinné polia (Meno, Email, Telefón, Lokalita).");
            return;
        }

        setLoading(true);
        console.log("Submitting form:", form);
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                body: JSON.stringify(form)
            });
            console.log("Response status:", res.status);
            if (!res.ok) throw new Error("Chyba pri odosielaní.");

            // Custom event for tracking
            if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("viandmo_lead_submit"));
            }

            setOk("Dopyt bol úspešne odoslaný! Presmerúvam...");
            setTimeout(() => {
                router.push(ROUTES.thanks);
            }, 1000);
        } catch (e) {
            console.error("Submission error:", e);
            setErr("Momentálne nie je možné odoslať dopyt. Skús to prosím neskôr.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={submit} className="card reveal" style={{ padding: 24, boxShadow: "var(--shadow-lg)" }}>
            <div style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>Meno a priezvisko</span>
                        <input className="input" placeholder="Meno a priezvisko" value={form.name} onChange={(e) => setForm(s => ({ ...s, name: e.target.value }))} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>Telefón</span>
                        <input className="input" placeholder="Telefón" value={form.phone} onChange={(e) => setForm(s => ({ ...s, phone: e.target.value }))} />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>E-mail</span>
                    <input className="input" placeholder="E-mail" value={form.email} onChange={(e) => setForm(s => ({ ...s, email: e.target.value }))} />
                </div>

                <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>Služba</span>
                        <select className="input" value={form.service} onChange={(e) => setForm(s => ({ ...s, service: e.target.value as "stahovanie" | "upratovanie" | "tepovanie" }))}>
                            <option value="stahovanie">Sťahovanie</option>
                            <option value="upratovanie">Upratovanie</option>
                            <option value="tepovanie">Tepovanie</option>
                        </select>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>Lokalita</span>
                        <input className="input" placeholder="Lokalita" value={form.location} onChange={(e) => setForm(s => ({ ...s, location: e.target.value }))} />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>Preferovaný termín</span>
                    <input className="input" placeholder="Napr. budúci pondelok o 9:00" value={form.preferredDate} onChange={(e) => setForm(s => ({ ...s, preferredDate: e.target.value }))} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-muted)", marginLeft: 4 }}>Detaily dopytu</span>
                    <textarea className="input" placeholder="Popíš prosím čo potrebuješ (čo, odkiaľ, kam, poschodie, parkovanie…)" rows={4}
                        value={form.details} onChange={(e) => setForm(s => ({ ...s, details: e.target.value }))} />
                </div>

                {err ? <div style={{ color: "#B00020", fontWeight: 700, fontSize: 14, padding: "12px", background: "rgba(176,0,32,0.05)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(176,0,32,0.1)" }}>{err}</div> : null}
                {ok ? <div style={{ color: "var(--primary-deep)", fontWeight: 800, fontSize: 14, padding: "12px", background: "var(--primary-glow)", borderRadius: "var(--radius-sm)", border: "1px solid hsla(var(--p-h), var(--p-s), var(--p-l), 0.2)" }}>{ok}</div> : null}

                <button className="btn btnSolid" disabled={loading} type="submit" aria-disabled={loading} style={{ height: 56, fontSize: 16 }}>
                    {loading ? "Odosielam dopyt..." : "Odoslať nezáväzný dopyt"}
                </button>

                <div className="muted" style={{ fontSize: 12, textAlign: "center" }}>
                    Odoslaním súhlasíš so spracovaním údajov. Žiadny spam, len férová ponuka.
                </div>
            </div>
        </form>
    );
}
