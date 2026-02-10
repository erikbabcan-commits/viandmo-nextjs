import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PriceCards } from "@/components/PriceCards";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Bratislava & okolie • férové ceny vopred"
        headline="Sťahovanie, upratovanie a tepovanie v BA regióne — rýchlo, bezpečne, bez skrytých poplatkov."
        sub="Najlacnejší lead nevzniká najnižšou cenou. Vzniká dôverou, rýchlosťou a jasnými pravidlami. Preto to tu vidíš hneď."
        bullets={[
          "Cena vopred (orientačne okamžite)",
          "Poistenie a profesionálny prístup",
          "WhatsApp fotka = rýchla ponuka",
          "BA + satelity (SC/PK/MA)"
        ]}
      />

      <Section
        h100
        title="Vyber si službu"
        subtitle="Každá služba má svoju vlastnú landing URL pre Google Ads (vyšší Quality Score = nižší CPC)."
      >
        <div className="grid3">
          <Link className="card" href={ROUTES.moving} style={{ padding: "20px 24px" }}>
            <strong style={{ display: "block", fontSize: 18, marginBottom: 8 }}>Sťahovanie Bratislava</strong>
            <div className="muted" style={{ fontSize: 14 }}>Byty • Domy • Firmy • Ťažké bremená</div>
          </Link>
          <Link className="card" href={ROUTES.cleaning} style={{ padding: "20px 24px" }}>
            <strong style={{ display: "block", fontSize: 18, marginBottom: 8 }}>Upratovanie Bratislava</strong>
            <div className="muted" style={{ fontSize: 14 }}>Byty • Kancelárie • Po rekonštrukcii</div>
          </Link>
          <Link className="card" href={ROUTES.upholstery} style={{ padding: "20px 24px" }}>
            <strong style={{ display: "block", fontSize: 18, marginBottom: 8 }}>Tepovanie Bratislava</strong>
            <div className="muted" style={{ fontSize: 14 }}>Sedačky • Matrace • Koberce</div>
          </Link>
        </div>
      </Section>

      <Section title="Mini cenník (ľudia chcú vedieť cenu hneď)">
        <PriceCards variant="moving" />
        <div style={{ marginTop: 12 }}>
          <Link className="btn btnPrimary" href={ROUTES.pricing}>
            <strong>Otvor celý cenník</strong>
          </Link>
        </div>
      </Section>

      <Section title="Recenzie a dôvera">
        <Reviews />
      </Section>

      <Section
        title="FAQ – bez skrytých príplatkov"
        subtitle="Toto výrazne znižuje 'podozrivé' leady a zvyšuje konverziu (CRO)."
      >
        <FAQ
          items={[
            { q: "Ako rýchlo viete prísť?", a: "V BA často do 24 hodín podľa dostupnosti. Pri urgentných presunoch vieme express slot." },
            { q: "Je cena fixná?", a: "Dohodneme pravidlá vopred (výjazd, poschodie, stojné, ťažké bremená). Orientačne hneď cez dopyt." },
            { q: "Viete naceniť z fotiek?", a: "Áno — najrýchlejšie je poslať fotku cez WhatsApp. Dostaneš presnejší odhad." }
          ]}
        />
      </Section>
    </>
  );
}
