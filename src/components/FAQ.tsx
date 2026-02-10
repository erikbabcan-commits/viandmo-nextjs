import React from "react";

export function FAQ(props: { items: { q: string; a: string }[] }) {
    return (
        <div style={{ display: "grid", gap: 12 }}>
            {props.items.map((it) => (
                <details key={it.q} className="card reveal" style={{ padding: "16px 24px" }}>
                    <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 16, fontFamily: "var(--font-display)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span>{it.q}</span>
                        <span style={{ fontSize: 20, color: "var(--primary)" }}>+</span>
                    </summary>
                    <div className="muted" style={{ marginTop: 12, lineHeight: 1.6, fontSize: 15, borderTop: "1px solid var(--border)", paddingTop: 12 }}>{it.a}</div>
                </details>
            ))}
        </div>
    );
}
