import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { TrustStrip } from "@/components/TrustStrip";
import { company, mailUrl, telUrl, whatsappUrl } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${company.legalName} à Agadir — WhatsApp ${company.whatsappDisplay}, tél ${company.telDisplay}, ${company.email}. Inspection et vente de chariots élévateurs.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="px-5 pb-8 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Une réponse directe, sans formulaire obligatoire
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Pour une visite d’inspection à Agadir ou une question sur le stock,
            contactez {company.contactName} ({company.legalName}). WhatsApp est
            le canal le plus rapide.
          </p>
        </div>
      </div>

      <TrustStrip />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ul className="space-y-7">
            <li className="border border-[var(--line)] bg-ink-soft/50 p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-steel">
                WhatsApp (prioritaire)
              </p>
              <a
                href={whatsappUrl(
                  "Bonjour GLOBMORO, je souhaite planifier une inspection.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-underline mt-3 inline-block text-xl text-paper"
              >
                {company.whatsappDisplay}
              </a>
              <p className="mt-2 text-sm text-mist">
                Message pré-rempli disponible — réponse par {company.contactName}.
              </p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.14em] text-steel">
                Téléphone Maroc
              </p>
              <a href={telUrl} className="cta-underline mt-2 inline-block text-lg text-paper">
                {company.telDisplay}
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.14em] text-steel">E-mail</p>
              <a href={mailUrl} className="cta-underline mt-2 inline-block text-lg text-paper">
                {company.email}
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.14em] text-steel">Adresse</p>
              <p className="mt-2 text-lg text-paper">{company.address}</p>
              <p className="mt-1 text-sm text-mist">
                {company.city}, {company.region} — {company.country}
              </p>
            </li>
          </ul>

          <p className="mt-10 text-sm text-steel">
            ICE {company.ice} · RC {company.rc} · IF {company.if}
          </p>
        </div>

        <div className="border border-[var(--line)] bg-ink-soft/55 p-6 md:p-8">
          <h2 className="text-2xl">Formulaire</h2>
          <p className="mt-3 text-sm text-mist">
            Envoyé vers l’API backend (
            <code className="text-copper">NEXT_PUBLIC_API_URL</code>
            /contact). Si l’API n’est pas configurée, utilisez WhatsApp ou le
            téléphone — le site reste utilisable.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
