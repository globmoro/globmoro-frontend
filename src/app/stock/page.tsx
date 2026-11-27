import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { company, whatsappUrl } from "@/data/company";
import {
  contactHref,
  machineWhatsappPrefill,
  machines,
  saleDisclaimer,
} from "@/data/machines";

export const metadata: Metadata = {
  title: "Chariots élévateurs électriques Agadir — stock",
  description:
    "Stock chariot élévateur électrique Agadir — LINDE E20 PHL-02 2019 et TOYOTA 7FBEST15 2015. Prix sur demande. Vente, location ou option d’achat — inspection libre El Wifaq.",
  alternates: { canonical: "/stock" },
  openGraph: {
    title: "Stock chariots élévateurs électriques · GLOBMORO Agadir",
    description:
      "LINDE E20 et TOYOTA 7FBEST15 en stock à Agadir. Inspection libre. Prix / conditions sur devis.",
  },
};

export default function StockPage() {
  return (
    <>
      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Nos machines</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Chariots élévateurs électriques disponibles à Agadir
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            Achat, location ou location avec option d’achat. {saleDisclaimer}{" "}
            Photos et specs ci-dessous ; décision après visite. Prix / conditions
            sur devis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Recevoir une offre
            </Link>
            <Link href="/contact?offer=location" className="btn-ghost">
              Demander une location
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je souhaite des infos sur le stock Agadir (achat, location ou option d’achat) — conditions sur devis.",
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

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="space-y-10">
          {machines.map((machine) => (
            <article
              key={machine.slug}
              className="grid overflow-hidden border border-[var(--line)] bg-paper-pure lg:grid-cols-[1.1fr_0.9fr]"
            >
              <Link
                href={`/stock/${machine.slug}`}
                className="group relative min-h-[300px] lg:min-h-[400px]"
              >
                <Image
                  src={machine.heroImage}
                  alt={`${machine.brand} ${machine.model}`}
                  fill
                  className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </Link>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {machine.year} · {machine.capacityKg} kg · {machine.hours} ·{" "}
                  {machine.origin}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl">
                  <Link href={`/stock/${machine.slug}`} className="cta-underline">
                    {machine.brand} {machine.model}
                  </Link>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-mist-bright md:text-base">
                  {machine.shortPitch}
                </p>
                <ul className="mt-5 space-y-1 text-sm text-steel-bright">
                  <li>
                    Mât {machine.mast} —{" "}
                    {machine.liftMaxMm.toLocaleString("fr-FR")} mm
                  </li>
                  <li>{machine.charger}</li>
                  <li>Chargeur inclus · inspection Agadir</li>
                </ul>
                <p className="price-plate mt-6 inline-block w-fit text-xl">
                  {machine.priceLabel}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-steel-bright">
                  Votre intérêt
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    href={contactHref(machine.interestKey, "achat")}
                    className="btn-primary text-sm"
                  >
                    Achat
                  </Link>
                  <Link
                    href={contactHref(machine.interestKey, "location")}
                    className="btn-ghost text-sm"
                  >
                    Location
                  </Link>
                  <Link
                    href={contactHref(machine.interestKey, "location-option")}
                    className="btn-ghost text-sm"
                  >
                    Option d’achat
                  </Link>
                  <a
                    href={whatsappUrl(
                      machineWhatsappPrefill(machine, "location"),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm"
                  >
                    WhatsApp location
                  </a>
                  <Link
                    href={`/stock/${machine.slug}`}
                    className="cta-underline self-center text-sm font-semibold uppercase tracking-[0.14em]"
                  >
                    Fiche complète
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
