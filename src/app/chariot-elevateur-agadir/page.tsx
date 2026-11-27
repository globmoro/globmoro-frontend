import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
import { company, faqItems, whatsappUrl } from "@/data/company";
import { machines, saleDisclaimer } from "@/data/machines";
import { localLanding, seoFaqExtra, serviceAreas } from "@/data/seo";

export const metadata: Metadata = {
  title: localLanding.title,
  description: localLanding.description,
  keywords: [
    "chariot élévateur Agadir",
    "chariot élévateur électrique Agadir",
    "chariot élévateur occasion Agadir",
    "forklift Agadir",
    "manutention Agadir",
    "chariot élévateur Aït Melloul",
    "chariot élévateur Maroc",
  ],
  alternates: { canonical: localLanding.path },
  openGraph: {
    title: `${localLanding.title} · ${company.name}`,
    description: localLanding.description,
    url: localLanding.path,
    locale: "fr_MA",
    images: [
      {
        url: "/forklifts/linde/hero.jpg",
        alt: "Chariot élévateur électrique à Agadir — GLOBMORO",
      },
    ],
  },
};

const allFaq = [...faqItems, ...seoFaqExtra];

export default function ChariotElevateurAgadirPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Chariot élévateur Agadir", path: localLanding.path },
        ]}
      />
      <FaqJsonLd />

      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Agadir · Souss-Massa · Maroc</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl">
            {localLanding.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            Vous cherchez un <strong>chariot élévateur électrique</strong> à{" "}
            {company.city} ou dans le Souss (Aït Melloul, Inezgane, Tassila) ?
            {company.legalName} propose la vente, la location et la location
            avec option d’achat sur un stock physique à El Wifaq — inspection
            libre, specs documentées, prix / conditions sur devis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stock" className="btn-primary">
              Voir le stock Agadir
            </Link>
            <Link href="/guides/choisir-chariot-elevateur" className="btn-ghost">
              Guide : choisir un chariot
            </Link>
            <Link href="/contact" className="btn-ghost">
              Demander un devis
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je cherche un chariot élévateur électrique à Agadir — pouvez-vous m’envoyer les infos stock / location ?",
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

      <section
        className="border-b border-[var(--line)] bg-paper-pure/70"
        aria-labelledby="stock-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="section-kicker">Stock actuel</p>
          <h2 id="stock-heading" className="mt-3 text-3xl md:text-4xl">
            Chariots élévateurs électriques d’occasion à Agadir
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-bright">
            {saleDisclaimer} Pas de catalogue fantôme : les deux machines
            ci-dessous sont à El Wifaq.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {machines.map((machine) => (
              <Link
                key={machine.slug}
                href={`/stock/${machine.slug}`}
                className="group relative block min-h-[360px] overflow-hidden border border-[var(--line)]"
              >
                <Image
                  src={machine.heroImage}
                  alt={`Chariot élévateur électrique ${machine.brand} ${machine.model} Agadir`}
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16"
        aria-labelledby="zones-heading"
      >
        <p className="section-kicker">Zones desservies</p>
        <h2 id="zones-heading" className="mt-3 text-3xl md:text-4xl">
          Agadir et alentours — manutention B2B
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright">
          Demande typique dans le Souss : agroalimentaire, froid, packing,
          plasturgie, distribution. Nous répondons d’abord depuis Agadir ;
          livraison possible ailleurs au Maroc — coût à discuter.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((zone) => (
            <li
              key={zone}
              className="border border-[var(--line)] bg-paper-pure px-3 py-2 text-sm text-ink"
            >
              {zone}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="border-y border-[var(--line)] bg-surface/80"
        aria-labelledby="related-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="section-kicker">Autres recherches</p>
          <h2 id="related-heading" className="mt-3 text-3xl md:text-4xl">
            Clark, nacelle, autre marque ?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright">
            Notre stock affiché aujourd’hui est{" "}
            <strong>électrique LINDE et TOYOTA</strong>. Si vous cherchez un
            chariot Clark, Still, Jungheinrich, un diesel, une{" "}
            <strong>nacelle élévatrice</strong>, un gerbeur ou un transpalette :
            demandez un <strong>sourcing import Europe</strong> — devis après
            cadrage. Nous n’inventons pas de stock.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="btn-primary">
              Voir import / services
            </Link>
            <Link href="/location-chariot-elevateur-agadir" className="btn-ghost">
              Location à Agadir
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je cherche (précisez : Clark / nacelle / autre) à Agadir ou en sourcing — pouvez-vous me rappeler ?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Demander un sourcing
            </a>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16"
        aria-labelledby="faq-local-heading"
      >
        <p className="section-kicker">FAQ Agadir</p>
        <h2 id="faq-local-heading" className="mt-3 text-3xl md:text-4xl">
          Questions fréquentes — chariot élévateur Agadir
        </h2>
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {allFaq.map((item) => (
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
      </section>

      <section className="industrial-panel border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <h2 className="text-3xl md:text-4xl">
            Contact — chariot élévateur Agadir
          </h2>
          <p className="mt-4 max-w-xl text-base text-mist-bright">
            {company.contactName} · {company.legalName} · {company.address}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Formulaire devis
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp {company.whatsappDisplay}
            </a>
            <Link href="/a-propos" className="btn-ghost">
              Identité légale
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
