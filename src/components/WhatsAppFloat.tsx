"use client";

import { company, whatsappUrl } from "@/data/company";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(
        "Bonjour GLOBMORO, je souhaite des informations sur le stock Agadir.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label={`WhatsApp ${company.whatsappDisplay}`}
    >
      <span className="wa-float-dot" aria-hidden />
      WhatsApp
    </a>
  );
}
