"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, whatsappUrl } from "@/data/company";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/stock", label: "Stock" },
  { href: "/a-propos", label: "Entreprise" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="brand-mark text-xl tracking-[0.08em] md:text-2xl">
          {company.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cta-underline text-sm uppercase tracking-[0.14em] ${
                  active ? "text-copper-bright" : "text-mist"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={whatsappUrl(
              "Bonjour GLOBMORO, je souhaite des informations sur vos chariots.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center border border-[var(--line)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-mist lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-[rgba(11,18,24,0.96)] px-5 py-4 backdrop-blur lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.14em] text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
