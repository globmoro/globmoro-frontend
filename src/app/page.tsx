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
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,12,16,0.92)] via-[rgba(8,12,16,0.72)] to-[rgba(8,12,16,0.28)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,12,16,0.88)] via-transparent to-[rgba(8,12,16,0.35)]" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
          <p className="brand-mark animate-rise text-5xl tracking-[0.1em] text-paper md:text-7xl lg:text-8xl">
            {company.name}
          </p>
          <h1 className="animate-rise-delay-1 mt-6 max-w-xl text-2xl font-semibold leading-tight text-paper md:text-4xl">
            Chariots électriques d’occasion, prêts à inspecter à Agadir.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-mist md:text-lg">
            Import Europe documenté · stock local · vendu en l’état · chargeur inclus.
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

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">
            Confiance B2B
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            Une SARL identifiable. Un stock réel. Des specs sourcées.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
            {company.legalName} vend en priorité deux chariots électriques
            d’occasion, physiquement disponibles à {company.city}. Pas de
            garanties inventées, pas d’avis fictifs — dossier, visite, décision.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item) => (
            <li key={item.title} className="border-t border-[var(--line)] pt-6">
              <h3 className="text-lg text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[var(--line)] bg-ink-soft/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-copper">
                Stock actuel
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl">Deux machines en vente</h2>
              <p className="mt-4 max-w-xl text-sm text-mist">{saleDisclaimer}</p>
            </div>
            <Link
              href="/stock"
              className="cta-underline text-sm uppercase tracking-[0.14em] text-mist"
            >
              Fiches complètes
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {machines.map((machine) => (
              <Link
                key={machine.slug}
                href={`/stock/${machine.slug}`}
                className="group relative block min-h-[440px] overflow-hidden"
              >
                <Image
                  src={machine.heroImage}
                  alt={`${machine.brand} ${machine.model}`}
                  fill
                  className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,12,16,0.94)] via-[rgba(8,12,16,0.35)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.16em] text-copper-bright">
                    {machine.year} · {machine.capacityKg} kg · {machine.hours}
                  </p>
                  <h3 className="mt-2 text-3xl">
                    {machine.brand} {machine.model}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-mist">
                    {machine.shortPitch}
                  </p>
                  <p className="mt-5 text-xl text-paper">{machine.priceLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">Parcours</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Simple, rapide, sur place</h2>
        </div>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
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
          ].map((item) => (
            <li key={item.step} className="relative">
              <p className="brand-mark text-4xl text-copper/80">{item.step}</p>
              <h3 className="mt-4 text-xl text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-[var(--line)] bg-[rgba(20,32,41,0.55)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
          <div>
            <h2 className="text-3xl md:text-4xl">Prochaine étape</h2>
            <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
              Écrivez sur WhatsApp ou appelez pour planifier une inspection à{" "}
              {company.city}. Identité société : ICE {company.ice} · RC{" "}
              {company.rc} · IF {company.if}.
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
          <div className="border border-[var(--line)] bg-ink/40 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-steel">
              Coordonnées
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper">
              <li>{company.legalName}</li>
              <li>{company.address}</li>
              <li>Tel {company.telDisplay}</li>
              <li>{company.email}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
