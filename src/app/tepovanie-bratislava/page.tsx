import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Tepovanie Bratislava | Hĺbkové tepovanie sedačiek a kobercov",
    description: "Profesionálne tepovanie v Bratislave. Čistenie sedačiek, matracov, kobercov a áut. Odstránenie škvŕn, roztočov a zápachu. Prídeme k vám domov."
};

export default function UpholsteryBA() {
    return (
        <>
            <Hero
                badge="Tepovanie Bratislava • Čistenie čalúnenia"
                headline="Hĺbkové tepovanie sedačiek a kobercov v Bratislave."
                sub="Oživte svoj nábytok. Ponúkame profesionálne tepovanie sedacích súprav, matracov, kobercov a interiérov áut priamo u vás."
                bullets={[
                    "Tepovanie sedačiek a kresiel",
                    "Čistenie matracov (odstránenie roztočov)",
                    "Tepovanie kobercov a behúňov",
                    "Ekologické čistiace prostriedky"
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
