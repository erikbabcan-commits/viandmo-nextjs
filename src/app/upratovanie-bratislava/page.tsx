import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Upratovanie Bratislava | Hĺbkové čistenie a upratovanie po rekonštrukcii",
    description: "Profesionálne upratovanie bytov, domov a kancelárií v Bratislave. Špecializujeme sa na upratovanie po rekonštrukcii, umývanie okien a generálne upratovanie.",
    alternates: {
        canonical: "https://viandmo.com/upratovanie-bratislava",
    },
    openGraph: {
        title: "Upratovanie Bratislava | VI&MO",
        description: "Profesionálne upratovanie bytov a firiem v Bratislave bez skrytých poplatkov.",
        url: "https://viandmo.com/upratovanie-bratislava",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Upratovanie Bratislava | VI&MO",
        description: "Profesionálne upratovanie bytov a firiem v Bratislave bez skrytých poplatkov.",
    },
};

export default function CleaningBA() {
    return (
        <>
            <Hero
                badge="Upratovanie Bratislava • Generálne upratovanie"
                headline="Upratovanie bytov a firiem v Bratislave — precízne a spoľahlivo."
                sub="Hľadáte upratovanie po rekonštrukcii alebo pravidelné čistenie kancelárií? Náš tím zabezpečí dokonalú čistotu vašich priestorov."
                bullets={[
                    "Hĺbkové upratovanie po rekonštrukcii",
                    "Upratovanie kancelárií a firiem",
                    "Umývanie okien a výkladov",
                    "Pravidelné upratovanie domácností"
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
