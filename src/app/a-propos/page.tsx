import type { Metadata } from "next";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { company, trustPoints, whatsappUrl } from "@/data/company";

export const metadata: Metadata = {
  title: "À propos",
  description: `${company.legalName} — SARL à Agadir. Import Europe documenté de chariots élévateurs électriques d’occasion. ICE ${company.ice}, RC ${company.rc}.`,
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">À propos</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            {company.legalName} — manutention à Agadir
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            Société marocaine basée à {company.city} ({company.region}). Nous
            commercialisons des chariots élévateurs électriques d’occasion,
            avec un stock physique inspectable sur site. Prix sur demande.
          </p>
        </div>
      </div>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl md:text-3xl">Qui nous sommes</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-mist-bright">
              <p>
                {company.legalName} est une SARL créée en {company.foundedLabel},
                enregistrée au Maroc. Siège / stock : {company.address}.
              </p>
              <p>
                Notre posture commerciale est simple : vendre des machines
                documentées, laisser l’acheteur inspecter librement, et ne
                rien inventer sur l’état, les heures ou une garantie.
              </p>
              <p>
                Interlocuteur : {company.contactName}. Canaux directs —
                WhatsApp, téléphone Maroc, e-mail — pour une réponse B2B
                rapide.
              </p>
            </div>
          </div>

          <aside
            id="identite-legale"
            className="border border-[var(--line)] bg-paper-pure p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
              Identité légale
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Raison sociale", company.legalName],
                ["ICE", company.ice],
                ["RC", company.rc],
                ["IF", company.if],
                ["Adresse", company.address],
                ["Contact", company.contactName],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-[var(--line)] pb-3">
                  <dt className="text-xs uppercase tracking-[0.12em] text-steel-bright">
                    {label}
                  </dt>
                  <dd className="mt-1 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-surface/80">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl md:text-3xl">Notre engagement — et nos limites</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg text-accent">Nous fournissons</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-mist-bright">
                <li>Stock physique à Agadir pour inspection et essai.</li>
                <li>
                  Specs sourcées (modèle, année, mât, batterie, chargeur, heures
                  compteur / brochure).
                </li>
                <li>
                  Cadre « import Europe documenté » — dossier fournisseur / série /
                  équipements.
                </li>
                <li>Identité SARL publique (ICE / RC / IF) sur cette page.</li>
                <li>Contact direct WhatsApp / tél / e-mail · Instagram.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-accent">Nous n’affirmons pas</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-mist-bright">
                <li>Aucune garantie constructeur ou période de couverture inventée.</li>
                <li>Pas de « parfait état » ni de certifications laboratoire.</li>
                <li>Pas d’avis clients fictifs ni de notes étoiles inventées.</li>
                <li>Pas de divulgation des coûts d’achat ou de floors internes.</li>
                <li>Pas de capacités / heures non prouvées · pas de prix affichés (sur demande).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl md:text-3xl">Pourquoi nous faire confiance</h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {trustPoints.map((item) => (
            <li key={item.title} className="border-t border-[var(--line)] pt-6">
              <h3 className="text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-bright">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/stock" className="btn-primary">
            Voir nos machines
          </Link>
          <Link href="/contact" className="btn-ghost">
            Demander un devis
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
