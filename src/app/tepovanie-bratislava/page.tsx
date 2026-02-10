import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Tepovanie Bratislava – viandmo.com",
    description: "Tepovanie sedačiek, matracov a kobercov v BA. Hygiena, rýchly termín, férové ceny."
};

export default function UpholsteryBA() {
    return (
        <>
            <Hero
                badge="Tepovanie Bratislava • hygiena"
                headline="Tepovanie v Bratislave — sedačky, matrace, koberce. Rýchlo a kvalitne."
                sub="Landing pre Ads: jednoduché ceny, jasné pravidlá, jednoduchý dopyt."
                bullets={[
                    "Sedačky • matrace • koberce",
                    "Odstránenie zápachu",
                    "Rýchly termín",
                    "BA + okolie"
                ]}
            />

            <Section title="Orientačné ceny">
                <PriceCards variant="upholstery" />
            </Section>

            <Section title="Recenzie">
                <Reviews />
            </Section>

            <Section title="FAQ – tepovanie">
                <FAQ items={[
                    { q: "Koľko trvá vyschnutie?", a: "Závisí od materiálu a vetrania. Bežne pár hodín až 24 hod." },
                    { q: "Viete naceniť vopred?", a: "Áno – stačí fotka a počet kusov (miesta na sedačke, veľkosť matraca, m² koberca)." }
                ]} />
                <div style={{ marginTop: 12 }}>
                    <Link className="btn btnPrimary" href={ROUTES.lead}><strong>Chcem naceniť</strong></Link>
                </div>
            </Section>
        </>
    );
}
