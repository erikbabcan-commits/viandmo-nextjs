import React from "react";

const SAMPLE = [
    { name: "Martina, Petržalka", text: "Prišli načas, všetko zabalené a presunuté bez poškodenia. Cena sedela s dohodou." },
    { name: "Peter, Ružinov", text: "Rýchla komunikácia, férový prístup. Najviac cením transparentné podmienky." },
    { name: "Firma, Senec", text: "Sťahovanie kancelárie bez výpadku. Plus bod za poistenie a čistotu práce." }
];

export function Reviews() {
    return (
        <div className="grid3 reveal">
            {SAMPLE.map((r) => (
                <div key={r.name} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                    <div className="pill" style={{ width: "fit-content" }}>★★★★★ 5.0</div>
                    <p style={{ margin: 0, lineHeight: 1.6, fontSize: 15, fontWeight: 500, fontStyle: "italic" }}>&quot;{r.text}&quot;</p>
                    <div className="muted" style={{ marginTop: "auto", fontSize: 13, fontWeight: 600, borderTop: "1px solid var(--border)", paddingTop: 12 }}>{r.name}</div>
                </div>
            ))}
        </div>
    );
}
