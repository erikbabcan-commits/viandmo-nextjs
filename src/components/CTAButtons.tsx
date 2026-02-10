import React from "react";
import Link from "next/link";
import { BRAND, ROUTES } from "@/lib/constants";

export function CTAButtons() {
    return (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <a className="btn btnSolid" href={BRAND.phoneHref} data-evt="click_call" style={{ flex: "1 1 auto", minWidth: 160 }}>
                Zavolať teraz
            </a>
            <a className="btn btnPrimary" href={BRAND.whatsappHref} target="_blank" rel="noreferrer" data-evt="click_whatsapp" style={{ flex: "1 1 auto", minWidth: 160 }}>
                <strong>WhatsApp</strong>
            </a>
            <Link className="btn" href={ROUTES.lead} data-evt="open_form" style={{ flex: "1 1 100%" }}>
                Nezáväzný dopyt
            </Link>
        </div>
    );
}
