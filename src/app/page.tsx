import Image from "next/image";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { company, trustPoints, whatsappUrl } from "@/data/company";
import { machines, saleDisclaimer } from "@/data/machines";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden grain">
        <div className="hero-media absolute inset-0">
          <Image
            src="/forklifts/linde/hero.jpg"
            alt="Chariot élévateur LINDE E20 en stock chez GLOBMORO Agadir"
            fill
            priority
            className="object-cover object-[55%_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,10,14,0.94)_0%,rgba(6,10,14,0.78)_42%,rgba(6,10,14,0.35)_68%,rgba(6,10,14,0.22)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,10,14,0.92)] via-transparent to-[rgba(6,10,14,0.45)]" />
          <div className="hero-rail" aria-hidden />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-10 md:justify-center md:px-8 md:pb-24 md:pt-16">
          <p className="brand-mark animate-rise text-5xl tracking-[0.12em] text-paper md:text-7xl lg:text-8xl">
            {company.name}
          </p>
          <h1 className="animate-rise-delay-1 mt-6 max-w-xl text-2xl font-semibold leading-tight text-paper md:text-4xl">
            Chariots électriques d’occasion, prêts à inspecter à Agadir.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-lg text-base leading-relaxed text-mist-bright md:text-lg">
            Import Europe documenté · stock local · vendu en l’état · chargeur
            inclus.
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
            <Link href="/stock" className="btn-primary">
              Voir le stock
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je souhaite planifier une inspection à Agadir.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section
        id="stock"
        className="border-b border-[var(--line)] bg-ink-soft/70"
        aria-labelledby="stock-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Stock actuel</p>
              <h2 id="stock-heading" className="mt-3 text-3xl md:text-4xl">
                Deux machines en vente
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-bright">
                {saleDisclaimer}
              </p>
            </div>
            <Link
              href="/stock"
              className="cta-underline text-sm font-semibold uppercase tracking-[0.14em] text-paper"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,10,14,0.96)] via-[rgba(6,10,14,0.4)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-bright">
                    {machine.year} · {machine.capacityKg} kg · {machine.hours}
                  </p>
                  <h3 className="mt-2 text-3xl">
                    {machine.brand} {machine.model}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-mist-bright">
                    {machine.shortPitch}
                  </p>
                  <p className="price-plate mt-5 inline-block text-xl text-paper">
                    {machine.priceLabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
        aria-labelledby="offer-heading"
      >
        <div className="max-w-2xl">
          <p className="section-kicker">Offre B2B</p>
          <h2 id="offer-heading" className="mt-4 text-3xl md:text-4xl">
            Stock réel à Agadir. Specs sourcées. Vente en l’état.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-bright md:text-lg">
            {company.legalName} propose deux chariots électriques d’occasion,
            physiquement disponibles à {company.city}. Pas de garanties
            inventées, pas d’avis fictifs — dossier, visite, décision.
          </p>
        </div>

        <ul className="mt-12 grid gap-0 border border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, index) => (
            <li
              key={item.title}
              className={`border-[var(--line)] p-6 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index > 1 ? "lg:border-t-0" : ""} ${
                index === 2 ? "md:border-t lg:border-t-0" : ""
              }`}
            >
              <h3 className="text-lg text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="border-y border-[var(--line)] bg-[rgba(12,20,28,0.85)]"
        aria-labelledby="parcours-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="section-kicker">Parcours</p>
            <h2 id="parcours-heading" className="mt-4 text-3xl md:text-4xl">
              Contact · inspection · achat
            </h2>
          </div>
          <ol className="mt-12 grid gap-0 border border-[var(--line)] md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Contactez-nous",
                text: `WhatsApp ${company.whatsappDisplay}, téléphone ou formulaire — ${company.contactName} répond pour GLOBMORO.`,
              },
              {
                step: "02",
                title: "Inspectez à Agadir",
                text: "Visite et essai sur site à El Wifaq / Bensergao. Photos et specs en amont, réalité sur place.",
              },
              {
                step: "03",
                title: "Achetez en l’état",
                text: "Vente ferme B2B. Chargeur inclus. Livraison possible — coût à discuter selon destination.",
              },
            ].map((item, index) => (
              <li
                key={item.step}
                className={`relative p-6 md:p-8 ${
                  index > 0 ? "border-t border-[var(--line)] md:border-t-0 md:border-l" : ""
                }`}
              >
                <p className="brand-mark text-4xl text-copper">{item.step}</p>
                <h3 className="mt-4 text-xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-bright">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="industrial-panel"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-20">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 id="contact-heading" className="mt-3 text-3xl md:text-4xl">
              Planifier une inspection à {company.city}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-bright md:text-lg">
              Écrivez sur WhatsApp ou appelez. {company.legalName} — stock et
              siège à {company.city}. Identité légale détaillée sur{" "}
              <Link href="/a-propos" className="cta-underline text-paper">
                la page Entreprise
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp {company.whatsappDisplay}
              </a>
              <Link href="/contact" className="btn-ghost">
                Page contact
              </Link>
              <Link href="/a-propos" className="btn-ghost">
                L’entreprise
              </Link>
            </div>
          </div>
          <div className="border border-[var(--line)] bg-ink/55 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
              Coordonnées
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper">
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
