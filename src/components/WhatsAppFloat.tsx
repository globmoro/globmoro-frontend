"use client";

import { company, defaultWhatsappMessage, whatsappUrl } from "@/data/company";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(defaultWhatsappMessage)}
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
