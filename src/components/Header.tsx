"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { company } from "@/data/company";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/stock", label: "Nos machines" },
  { href: "/services", label: "Nos services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
      firstLink?.focus();
    }
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="brand-mark text-xl tracking-[0.08em] text-ink md:text-2xl"
        >
          {company.name}
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Principale">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cta-underline text-sm font-semibold uppercase tracking-[0.12em] ${
                  active ? "text-accent" : "text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Instagram GLOBMORO"
          >
            <InstagramIcon />
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Demander un devis
          </Link>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex items-center border border-[var(--line-strong)] bg-paper-pure px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          className="border-t border-[var(--line)] bg-paper-pure px-5 py-4 xl:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-[0.14em] ${
                    active ? "text-accent" : "text-ink"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink"
              onClick={() => setOpen(false)}
            >
              <InstagramIcon /> Instagram
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
