import type { Metadata } from "next";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import {
  commercialOffers,
  company,
  services,
  whatsappUrl,
} from "@/data/company";

export const metadata: Metadata = {
  title: "Nos services",
  description: `Services GLOBMORO Agadir — vente, location, location avec option d’achat, import Europe, pièces et entretien. Prix / conditions sur devis.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Nos services</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Vente, location et option d’achat — stock Agadir
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            {company.legalName} propose trois chemins commerciaux B2B autour du
            stock inspectable à {company.city} : vente, location (courte ou plus
            longue), et location avec option d’achat. Tout est sur devis —
            conditions à confirmer, sans loyers ni dépôts inventés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?offer=location" className="btn-primary">
              Demander une location
            </Link>
            <Link href="/contact" className="btn-ghost">
              Demander un devis
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je souhaite des informations sur la location ou la location avec option d’achat à Agadir — conditions sur devis.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <TrustStrip />

      <section
        className="border-b border-[var(--line)] bg-paper-pure/70"
        aria-labelledby="offers-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="section-kicker">Offre commerciale</p>
          <h2 id="offers-heading" className="mt-3 text-3xl md:text-4xl">
            Trois options, une seule règle : sur devis
          </h2>
          <ul className="mt-10 grid gap-0 border border-[var(--line)] md:grid-cols-3">
            {commercialOffers.map((offer, index) => (
              <li
                key={offer.id}
                className={`border-[var(--line)] bg-paper-pure p-7 md:p-8 ${
                  index > 0
                    ? "border-t md:border-t-0 md:border-l"
                    : ""
                }`}
              >
                <h3 className="text-xl text-ink">{offer.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-bright">
                  {offer.text}
                </p>
                <Link
                  href={
                    offer.id === "achat"
                      ? "/contact"
                      : `/contact?offer=${offer.id}`
                  }
                  className="cta-underline mt-6 inline-block text-sm font-semibold uppercase tracking-[0.14em]"
                >
                  {offer.id === "achat"
                    ? "Recevoir une offre"
                    : offer.id === "location"
                      ? "Demander une location"
                      : "Demander une option d’achat"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <h2 className="text-2xl text-ink md:text-3xl">Tous les services</h2>
        <ul className="mt-8 grid gap-0 border border-[var(--line)] md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              id={service.slug}
              className={`border-[var(--line)] bg-paper-pure/60 p-7 md:p-9 ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index % 2 === 1 ? "md:border-l" : ""} ${
                index > 1 ? "md:border-t" : ""
              }`}
            >
              <h3 className="text-2xl text-ink">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist-bright md:text-base">
                {service.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-sm text-mist">
          Pas de garantie constructeur incluse. Entretien / SAV uniquement selon
          termes convenus. Prix de vente sur demande ; location et option
          d’achat sur devis.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/stock" className="btn-primary">
            Voir nos machines
          </Link>
          <Link href="/contact?offer=location-option" className="btn-ghost">
            Option d’achat
          </Link>
        </div>
      </section>
    </>
  );
}
