import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/InstagramIcon";
import { company, mailUrl, telUrl, whatsappUrl } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:px-8">
        <div>
          <Link href="/" className="inline-block bg-black p-2" aria-label={company.name}>
            <Image
              src="/brand/globmoro-logo.png"
              alt={company.name}
              width={180}
              height={136}
              className="h-auto w-[9.5rem] object-contain"
            />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-bright">
            {company.legalName} — {company.activity}. Stock à {company.city},{" "}
            {company.region}.
          </p>
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link mt-5"
            aria-label="Instagram GLOBMORO"
          >
            <InstagramIcon />
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              <Link href="/" className="cta-underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/stock" className="cta-underline">
                Nos machines
              </Link>
            </li>
            <li>
              <Link href="/services" className="cta-underline">
                Nos services
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="cta-underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="cta-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
            Agadir & stock
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              <Link href="/chariot-elevateur-agadir" className="cta-underline">
                Chariot élévateur Agadir
              </Link>
            </li>
            <li>
              <Link
                href="/location-chariot-elevateur-agadir"
                className="cta-underline"
              >
                Location chariot Agadir
              </Link>
            </li>
            <li>
              <Link href="/stock/linde-e20" className="cta-underline">
                LINDE E20 électrique
              </Link>
            </li>
            <li>
              <Link href="/stock/toyota-7fbest15" className="cta-underline">
                TOYOTA 7FBEST15
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
            Coordonnées
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              <a href={whatsappUrl()} className="cta-underline">
                WhatsApp {company.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={telUrl} className="cta-underline">
                Tel {company.telDisplay}
              </a>
            </li>
            <li>
              <a href={mailUrl} className="cta-underline">
                {company.email}
              </a>
            </li>
            <li className="text-mist-bright">{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-mist-bright md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {company.legalName} · Agadir ·{" "}
            <Link href="/a-propos" className="cta-underline text-ink">
              Identité légale
            </Link>
          </p>
          <p>
            Vente · location · option d’achat · vendu en l’état · conditions sur
            devis
          </p>
        </div>
      </div>
    </footer>
  );
}
