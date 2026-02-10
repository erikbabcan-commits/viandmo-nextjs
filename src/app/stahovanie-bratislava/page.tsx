import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata = {
    title: "Sťahovanie Bratislava – viandmo.com",
    description: "Bezpečné sťahovanie v Bratislave do 24 hodín. Férové ceny vopred, poistenie, WhatsApp nacenenie."
};

export default function MovingBA() {
    return (
        <>
            <Hero
                badge="Sťahovanie Bratislava • do 24 hodín"
                headline="Bezpečné sťahovanie v Bratislave — férová cena vopred, poistenie a čistá dohoda."
                sub="Landing pre Google Ads: okamžite odpovie na cenu, dôveru a postup. To je presne to, čo znižuje CPC."
                bullets={[
                    "Byty, domy, firmy",
                    "Poistenie majetku",
                    "WhatsApp fotka = rýchla ponuka",
                    "BA + satelity (SC/PK/MA)"
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
