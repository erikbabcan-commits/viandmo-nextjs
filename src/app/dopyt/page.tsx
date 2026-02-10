import React from "react";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";

export const metadata = {
    title: "Nezáväzný dopyt – viandmo.com",
    description: "Pošli dopyt (sťahovanie/upratovanie/tepovanie). Ozveme sa čo najskôr."
};

export default function LeadPage() {
    return (
        <Section title="Nezáväzný dopyt" subtitle="Čím viac detailov, tým presnejšia ponuka. Fotky pošli cez WhatsApp (CTA v hornej lište).">
            <LeadForm />
        </Section>
    );
}
