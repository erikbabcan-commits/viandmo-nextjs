"use client";

import { useEffect } from "react";

/**
 * Minimal tracking hooks:
 * - Placeholders for GTM/GA4/Ads
 * - Custom event router for click tracking via data-evt
 */
export function Tracking() {
    useEffect(() => {
        // Service Worker register
        try {
            // @ts-expect-error: Custom window property
            if (typeof window !== "undefined") window.__VIANDMO_PWA__ = true;
        } catch { }

        // Click tracking: any element with data-evt triggers event
        const onClick = (e: MouseEvent) => {
            const el = (e.target as HTMLElement)?.closest?.("[data-evt]");
            if (!el) return;
            const evt = el.getAttribute("data-evt");
            if (!evt) return;

            // Hook for GTM/GA4
            // window.dataLayer?.push({ event: evt });
            // gtag?.('event', evt, { ... });

            // Debug:
            // console.log("[track]", evt);
        };

        window.addEventListener("click", onClick);

        // Lead submit event (from LeadForm)
        const onLead = () => {
            // window.dataLayer?.push({ event: "lead_submit" });
        };
        window.addEventListener("viandmo_lead_submit", onLead);

        return () => {
            window.removeEventListener("click", onClick);
            window.removeEventListener("viandmo_lead_submit", onLead);
        };
    }, []);

    return null;
}
