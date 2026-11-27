import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
import { commercialOffers, company, whatsappUrl } from "@/data/company";
import { machines } from "@/data/machines";
import { locationLanding } from "@/data/seo";

export const metadata: Metadata = {
  title: locationLanding.title,
  description: locationLanding.description,
  keywords: [
    "location chariot élévateur Agadir",
    "louer chariot élévateur Agadir",
    "location chariot électrique Agadir",
    "location avec option d’achat Agadir",
    "location forklift Agadir",
  ],
  alternates: { canonical: locationLanding.path },
  openGraph: {
    title: `${locationLanding.title} · ${company.name}`,
    description: locationLanding.description,
    url: locationLanding.path,
    locale: "fr_MA",
  },
};

export default function LocationChariotElevateurAgadirPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          {
            name: "Location chariot élévateur Agadir",
            path: locationLanding.path,
          },
        ]}
      />

      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Location · Agadir</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl">
            {locationLanding.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            Besoin ponctuel ou plus long ? {company.legalName} étudie la{" "}
            <strong>location de chariot élévateur électrique</strong> à Agadir
            (El Wifaq) selon disponibilité du stock — et la{" "}
            <strong>location avec option d’achat</strong> au cas par cas.
            Conditions et durée <strong>sur devis uniquement</strong> (pas de
            grille de loyers inventée).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?offer=location" className="btn-primary">
              Demander une location
            </Link>
            <Link
              href="/contact?offer=location-option"
              className="btn-ghost"
            >
              Option d’achat
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je souhaite une location de chariot élévateur électrique à Agadir — conditions sur devis.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp {company.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <h2 className="text-3xl md:text-4xl">Machines louables selon stock</h2>
        <p className="mt-4 max-w-2xl text-sm text-mist-bright">
          La location dépend de la disponibilité réelle. Machines actuellement
          en stock Agadir :
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {machines.map((machine) => (
            <li
              key={machine.slug}
              className="border border-[var(--line)] bg-paper-pure p-6"
            >
              <h3 className="text-xl text-ink">
                {machine.brand} {machine.model}
              </h3>
              <p className="mt-2 text-sm text-mist-bright">
                {machine.shortPitch}
              </p>
              <Link
                href={`/stock/${machine.slug}`}
                className="cta-underline mt-4 inline-block text-sm font-semibold uppercase tracking-[0.14em]"
              >
                Fiche machine
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-0 border border-[var(--line)] md:grid-cols-3">
          {commercialOffers.map((offer, index) => (
            <li
              key={offer.id}
              className={`border-[var(--line)] bg-paper-pure/70 p-6 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <h3 className="text-lg text-ink">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                {offer.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-sm text-mist">
          Pour une nacelle, un Clark ou une autre référence hors stock :{" "}
          <Link href="/chariot-elevateur-agadir" className="cta-underline text-ink">
            voir la page Agadir
          </Link>{" "}
          (sourcing import sur devis).
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/services" className="btn-ghost">
            Tous les services
          </Link>
          <Link href="/chariot-elevateur-agadir" className="btn-ghost">
            Chariot élévateur Agadir
          </Link>
        </div>
      </section>
    </>
  );
}
