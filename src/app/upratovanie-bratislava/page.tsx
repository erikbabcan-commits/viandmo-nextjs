import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Upratovanie Bratislava – viandmo.com",
    description: "Upratovanie bytov a firiem v BA. Hĺbkové upratovanie po rekonštrukcii, férové ceny, rýchly termín."
};

export default function CleaningBA() {
    return (
        <>
            <Hero
                badge="Upratovanie Bratislava • čistý výsledok"
                headline="Upratovanie v Bratislave — pravidelne aj hĺbkovo po rekonštrukcii."
                sub="Landing pre Ads: jasná ponuka + ceny + dôkaz. Žiadne omáčky."
                bullets={[
                    "Byty • kancelárie • spoločné priestory",
                    "Hĺbkové upratovanie po stavbe",
                    "Rýchla odpoveď a termín",
                    "BA + okolie"
                ]}
            />

            <Section title="Balíky a orientačné ceny">
                <PriceCards variant="cleaning" />
            </Section>

            <Section title="Recenzie">
                <Reviews />
            </Section>

            <Section title="FAQ – upratovanie">
                <FAQ items={[
                    { q: "Robíte aj po rekonštrukcii?", a: "Áno. Stačí v dopyte uviesť rozsah a fotky – získaš presnejšiu ponuku." },
                    { q: "Čo ak je veľmi špinavo?", a: "Naceníme transparentne podľa rozsahu. Priorita je výsledok a dohoda vopred." }
                ]} />
                <div style={{ marginTop: 12 }}>
                    <Link className="btn btnPrimary" href={ROUTES.lead}><strong>Chcem nezáväznú ponuku</strong></Link>
                </div>
            </Section>
        </>
    );
}
