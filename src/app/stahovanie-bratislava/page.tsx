import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Sťahovanie Bratislava | Lacné sťahovanie bytov a firiem",
    description: "Profesionálne sťahovanie v Bratislave. Sťahujeme byty, domy, kancelárie aj klavíre. Vypratávanie, montáž nábytku a odvoz na zberný dvor. Cenník online.",
    alternates: {
        canonical: "https://viandmo.com/stahovanie-bratislava",
    },
    openGraph: {
        title: "Sťahovanie Bratislava | VI&MO",
        description: "Profesionálne sťahovanie v Bratislave bez skrytých poplatkov.",
        url: "https://viandmo.com/stahovanie-bratislava",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Sťahovanie Bratislava | VI&MO",
        description: "Profesionálne sťahovanie v Bratislave bez skrytých poplatkov.",
    },
};

export default function MovingBA() {
    return (
        <>
            <Hero
                badge="Sťahovanie Bratislava • Non-stop služby"
                headline="Sťahovanie bytov a firiem v Bratislave — bez stresu a skrytých poplatkov."
                sub="Potrebujete presťahovať ťažké bremená, klavír alebo celú kanceláriu? Sme tu pre vás. Poistenie a obhliadka zdarma sú samozrejmosťou."
                bullets={[
                    "Sťahovanie bytov, domov, kancelárií",
                    "Sťahovanie ťažkých bremien a klavírov",
                    "Vypratávanie a ekologická likvidácia",
                    "Balenie a montáž nábytku"
                ]}
            />

            <Section title="Balíky a orientačné ceny">
                <PriceCards variant="moving" />
            </Section>

            <Section title="Recenzie (sťahovanie je o dôvere)">
                <Reviews />
            </Section>

            <Section title="FAQ – sťahovanie BA">
                <FAQ items={[
                    { q: "Účtujete výjazd v BA?", a: "Transparentne podľa pravidiel. Všetko sa nastaví pred objednávkou – bez prekvapení." },
                    { q: "Poschodia a ťažké bremená?", a: "Áno, riešime. Stačí v dopyte uviesť poschodie, výťah a typ bremien." },
                    { q: "Ako prebieha nacenenie?", a: "Najrýchlejšie cez dopyt alebo WhatsApp fotku. Potom potvrdíme termín a cenu." }
                ]} />
                <div style={{ marginTop: 12 }}>
                    <Link className="btn btnPrimary" href={ROUTES.lead}><strong>Chcem nezáväznú ponuku</strong></Link>
                </div>
            </Section>
        </>
    );
}
