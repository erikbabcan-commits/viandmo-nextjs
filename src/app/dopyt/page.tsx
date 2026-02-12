import React from "react";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";

export const metadata = {
    title: "Nezáväzný dopyt – viandmo.com",
    description: "Pošli dopyt (sťahovanie/upratovanie/tepovanie). Ozveme sa čo najskôr.",
    alternates: {
        canonical: "https://viandmo.com/dopyt",
    },
    openGraph: {
        title: "Nezáväzný dopyt – VI&MO",
        description: "Pošli dopyt a získaj nezáväznú ponuku bez skrytých poplatkov.",
        url: "https://viandmo.com/dopyt",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Nezáväzný dopyt – VI&MO",
        description: "Pošli dopyt a získaj nezáväznú ponuku bez skrytých poplatkov.",
    },
};

export default function LeadPage() {
    return (
        <Section title="Nezáväzný dopyt" subtitle="Čím viac detailov, tým presnejšia ponuka. Fotky pošli cez WhatsApp (CTA v hornej lište).">
            <LeadForm />
        </Section>
    );
}
