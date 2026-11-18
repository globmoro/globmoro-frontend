import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { TrustStrip } from "@/components/TrustStrip";
import { company, mailUrl, telUrl, whatsappUrl } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${company.legalName} à Agadir — WhatsApp ${company.whatsappDisplay}, tél ${company.telDisplay}, ${company.email}. Demander un devis chariots élévateurs.`,
  alternates: { canonical: "/contact" },
};

type Props = {
  searchParams: Promise<{ machine?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const machineParam = params.machine ?? "";
  const allowed = new Set(["linde", "toyota", "both", "other"]);
  const defaultMachine = allowed.has(machineParam) ? machineParam : "";

  return (
    <>
      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Demander un devis — réponse directe
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            Pour une offre ou une visite d’inspection à Agadir, contactez{" "}
            {company.contactName} ({company.legalName}). WhatsApp est le canal
            le plus rapide.
          </p>
        </div>
      </div>

      <TrustStrip />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ul className="space-y-7">
            <li className="border border-[var(--line)] bg-paper-pure p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-steel">
                WhatsApp (prioritaire)
              </p>
              <a
                href={whatsappUrl(
                  "Bonjour GLOBMORO, je souhaite recevoir une offre et planifier une inspection.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-underline mt-3 inline-block text-xl text-ink"
              >
                {company.whatsappDisplay}
              </a>
              <p className="mt-2 text-sm text-mist-bright">
                Message pré-rempli disponible — réponse par {company.contactName}.
              </p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.14em] text-steel">
                Téléphone Maroc
              </p>
              <a
                href={telUrl}
                className="cta-underline mt-2 inline-block text-lg text-ink"
              >
                {company.telDisplay}
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.14em] text-steel">
                E-mail
              </p>
              <a
                href={mailUrl}
                className="cta-underline mt-2 inline-block text-lg text-ink"
              >
                {company.email}
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.14em] text-steel">
                Adresse
              </p>
              <p className="mt-2 text-lg text-ink">{company.address}</p>
              <p className="mt-1 text-sm text-mist-bright">
                {company.city}, {company.region} — {company.country}
              </p>
            </li>
          </ul>

          <p className="mt-10 text-sm text-mist">
            {company.legalName} · Agadir — identité légale (ICE / RC / IF) sur{" "}
            <Link href="/a-propos" className="cta-underline text-ink">
              À propos
            </Link>
            .
          </p>
        </div>

        <div className="border border-[var(--line)] bg-paper-pure p-6 md:p-8">
          <h2 className="text-2xl text-ink">Formulaire devis</h2>
          <p className="mt-3 text-sm text-mist-bright">
            Nom, société, téléphone, e-mail, ville, machine et message. Pour une
            réponse immédiate, préférez WhatsApp.
          </p>
          <div className="mt-8">
            <ContactForm defaultMachine={defaultMachine} />
          </div>
        </div>
      </div>
    </>
  );
}
