import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd } from "@/components/JsonLd";
import { InstagramIcon } from "@/components/InstagramIcon";
import { TrustStrip } from "@/components/TrustStrip";
import {
  commercialOffers,
  company,
  faqItems,
  services,
  trustPoints,
  whatsappUrl,
} from "@/data/company";
import { contactHref, machines, saleDisclaimer } from "@/data/machines";
import {
  defaultDescription,
  defaultTitle,
  localLanding,
  locationLanding,
  seoFaqExtra,
} from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: defaultTitle },
  description: defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const homeFaq = [...faqItems, ...seoFaqExtra];

  return (
    <>
      <FaqJsonLd />
      <section className="relative min-h-[100svh] overflow-hidden grain">
        <div className="hero-media absolute inset-0">
          <Image
            src="/forklifts/linde/hero.jpg"
            alt="Chariot élévateur électrique LINDE E20 — stock GLOBMORO Agadir"
            fill
            priority
            className="object-cover object-[55%_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,24,30,0.92)_0%,rgba(18,24,30,0.72)_42%,rgba(18,24,30,0.28)_70%,rgba(18,24,30,0.18)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,30,0.88)] via-transparent to-[rgba(18,24,30,0.4)]" />
          <div className="hero-rail" aria-hidden />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-10 md:justify-center md:px-8 md:pb-24 md:pt-16">
          <p className="brand-mark animate-rise text-5xl tracking-[0.12em] text-[#f4f5f6] md:text-7xl lg:text-8xl">
            {company.name}
          </p>
          <h1 className="animate-rise-delay-1 mt-6 max-w-2xl text-2xl font-semibold leading-tight text-[#f4f5f6] md:text-4xl">
            Chariot élévateur électrique d’occasion à Agadir — inspection sur
            site.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-lg text-base leading-relaxed text-[#d5dde4] md:text-lg">
            Vente · location · option d’achat — import Europe documenté · stock
            Agadir · prix / conditions sur devis.
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
            <Link href="/stock" className="btn-primary">
              Voir nos machines
            </Link>
            <Link
              href="/contact?offer=location"
              className="btn-ghost-on-dark btn-ghost"
            >
              Demander une location
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section
        id="machines"
        className="border-b border-[var(--line)] bg-paper-pure/70"
        aria-labelledby="machines-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Nos machines</p>
              <h2 id="machines-heading" className="mt-3 text-3xl md:text-4xl">
                Stock actuel à Agadir
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-bright">
                {saleDisclaimer}
              </p>
            </div>
            <Link
              href="/stock"
              className="cta-underline text-sm font-semibold uppercase tracking-[0.14em] text-ink"
            >
              Fiches complètes
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {machines.map((machine) => (
              <Link
                key={machine.slug}
                href={`/stock/${machine.slug}`}
                className="group relative block min-h-[420px] overflow-hidden border border-[var(--line)]"
              >
                <Image
                  src={machine.heroImage}
                  alt={`${machine.brand} ${machine.model}`}
                  fill
                  className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,30,0.94)] via-[rgba(18,24,30,0.35)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9fd4b5]">
                    {machine.year} · {machine.capacityKg} kg · {machine.hours}
                  </p>
                  <h3 className="mt-2 text-3xl text-[#f4f5f6]">
                    {machine.brand} {machine.model}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#d5dde4]">
                    {machine.shortPitch}
                  </p>
                  <p className="price-plate mt-5 inline-block text-lg">
                    {machine.priceLabel}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#9bb0bf]">
                    Achat · Location · Option d’achat
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
        aria-labelledby="services-heading"
      >
        <div className="max-w-2xl">
          <p className="section-kicker">Nos services</p>
          <h2 id="services-heading" className="mt-4 text-3xl md:text-4xl">
            Vente, location, option d’achat
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-bright md:text-lg">
            Trois chemins B2B autour du stock Agadir — conditions sur devis,
            sans loyers ni garanties inventés.
          </p>
        </div>

        <ul className="mt-10 grid gap-0 border border-[var(--line)] md:grid-cols-3">
          {commercialOffers.map((offer, index) => (
            <li
              key={offer.id}
              className={`border-[var(--line)] bg-paper-pure/70 p-6 md:p-7 ${
                index > 0
                  ? "border-t md:border-t-0 md:border-l"
                  : ""
              }`}
            >
              <h3 className="text-xl text-ink">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                {offer.text}
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-0 border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className={`border-[var(--line)] bg-paper-pure/50 p-6 ${
                index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              } ${index > 1 ? "lg:border-t-0" : ""} ${
                index === 2 || index === 3 ? "sm:border-t lg:border-t-0" : ""
              } ${index === 3 ? "sm:border-l-0 lg:border-l" : ""} ${
                index >= 3 ? "border-t" : ""
              }`}
            >
              <h3 className="text-lg text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                {service.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link
            href="/services"
            className="cta-underline text-sm font-semibold uppercase tracking-[0.14em]"
          >
            Détail des services
          </Link>
          <Link
            href="/contact?offer=location"
            className="cta-underline text-sm font-semibold uppercase tracking-[0.14em]"
          >
            Demander une location
          </Link>
        </div>
      </section>

      <section
        className="border-y border-[var(--line)] bg-surface/80"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="section-kicker">Pourquoi GLOBMORO</p>
            <h2 id="why-heading" className="mt-4 text-3xl md:text-4xl">
              Stock réel. Specs sourcées. Vente en l’état.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-bright md:text-lg">
              {company.legalName} propose des chariots électriques d’occasion
              physiquement disponibles à {company.city}. Pas de garanties
              inventées, pas d’avis fictifs — dossier, visite, décision.
            </p>
          </div>
          <ul className="mt-12 grid gap-0 border border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item, index) => (
              <li
                key={item.title}
                className={`border-[var(--line)] bg-paper-pure/60 p-6 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index > 1 ? "lg:border-t-0" : ""} ${
                  index === 2 ? "md:border-t lg:border-t-0" : ""
                }`}
              >
                <h3 className="text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
        aria-labelledby="parcours-heading"
      >
        <div className="max-w-2xl">
          <p className="section-kicker">Parcours</p>
          <h2 id="parcours-heading" className="mt-4 text-3xl md:text-4xl">
            Contact · inspection · offre
          </h2>
        </div>
        <ol className="mt-12 grid gap-0 border border-[var(--line)] md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Choisissez votre intérêt",
              text: `Achat, location ou location avec option d’achat — formulaire, WhatsApp ${company.whatsappDisplay} ou téléphone. ${company.contactName} répond pour GLOBMORO.`,
            },
            {
              step: "02",
              title: "Inspectez à Agadir",
              text: "Visite et essai sur site à El Wifaq / Bensergao. Photos et specs en amont, réalité sur place.",
            },
            {
              step: "03",
              title: "Conditions sur devis",
              text: "Vente en l’état, location ou option d’achat — termes à confirmer. Chargeur inclus. Livraison possible — coût à discuter.",
            },
          ].map((item, index) => (
            <li
              key={item.step}
              className={`relative bg-paper-pure/50 p-6 md:p-8 ${
                index > 0
                  ? "border-t border-[var(--line)] md:border-t-0 md:border-l"
                  : ""
              }`}
            >
              <p className="brand-mark text-4xl text-accent">{item.step}</p>
              <h3 className="mt-4 text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="border-y border-[var(--line)] industrial-panel"
        aria-labelledby="instagram-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div className="max-w-xl">
            <p className="section-kicker">Instagram</p>
            <h2 id="instagram-heading" className="mt-3 text-3xl md:text-4xl">
              Suivez GLOBMORO sur Instagram
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist-bright">
              Photos de stock et actualités — {company.instagramHandle}.
            </p>
          </div>
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <InstagramIcon />
            Voir @{company.name.toLowerCase()}
          </a>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-2xl">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-heading" className="mt-4 text-3xl md:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {homeFaq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-1 text-accent transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-bright">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-mist-bright">
          Pages locales :{" "}
          <Link
            href={localLanding.path}
            className="cta-underline text-ink"
          >
            chariot élévateur Agadir
          </Link>
          {" · "}
          <Link
            href={locationLanding.path}
            className="cta-underline text-ink"
          >
            location chariot élévateur Agadir
          </Link>
          .
        </p>
      </section>

      <section
        id="contact"
        className="industrial-panel border-t border-[var(--line)]"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-20">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 id="contact-heading" className="mt-3 text-3xl md:text-4xl">
              Offre, location ou inspection
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-bright md:text-lg">
              Écrivez sur WhatsApp, appelez, ou utilisez le formulaire devis
              (achat / location / option d’achat). {company.legalName} — stock
              et siège à {company.city}. Identité légale sur{" "}
              <Link href="/a-propos" className="cta-underline text-ink">
                À propos
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={contactHref()} className="btn-primary">
                Demander un devis
              </Link>
              <Link href="/contact?offer=location" className="btn-ghost">
                Demander une location
              </Link>
              <a
                href={whatsappUrl(
                  "Bonjour GLOBMORO, je souhaite des infos (achat, location ou option d’achat) pour vos chariots à Agadir — conditions sur devis.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp {company.whatsappDisplay}
              </a>
            </div>
          </div>
          <div className="border border-[var(--line)] bg-paper-pure p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
              Coordonnées
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              <li>{company.legalName}</li>
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.tel}`} className="cta-underline">
                  Tel {company.telDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="cta-underline">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
