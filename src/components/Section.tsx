import React from "react";

export function Section(props: { title: string; subtitle?: string; children: React.ReactNode; h100?: boolean }) {
    return (
        <section className={`container reveal ${props.h100 ? "vh100" : ""}`} style={{ padding: "60px 20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <h2 className="h2" style={{ marginBottom: 0 }}>{props.title}</h2>
                {props.subtitle ? <div className="lead" style={{ marginTop: 0, fontSize: 15 }}>{props.subtitle}</div> : null}
            </div>
            <div style={{ marginTop: 24 }}>{props.children}</div>
        </section>
    );
}
