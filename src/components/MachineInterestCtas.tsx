"use client";

import Link from "next/link";
import { useState } from "react";
import {
  OfferTypeId,
  getOfferType,
  offerTypes,
  whatsappUrl,
} from "@/data/company";
import {
  Machine,
  contactHref,
  machineWhatsappPrefill,
} from "@/data/machines";

export function MachineInterestCtas({
  machine,
  showTel = false,
  tel,
}: {
  machine: Machine;
  showTel?: boolean;
  tel?: string;
}) {
  const [offer, setOffer] = useState<OfferTypeId>("achat");
  const selected = getOfferType(offer);

  return (
    <div className="space-y-5">
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
          Votre intérêt
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {offerTypes.map((item) => {
            const active = item.id === offer;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOffer(item.id)}
                aria-pressed={active}
                className={`border px-3 py-2 text-left text-sm transition ${
                  active
                    ? "border-accent bg-accent-soft font-semibold text-ink"
                    : "border-[var(--line-strong)] bg-paper-pure text-mist-bright hover:border-accent/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-mist">
          Conditions sur devis — aucun loyer ni dépôt affiché.
        </p>
      </fieldset>

      <div className="flex flex-wrap gap-3">
        <Link
          href={contactHref(machine.interestKey, offer)}
          className="btn-primary"
        >
          {selected.cta}
        </Link>
        <a
          href={whatsappUrl(machineWhatsappPrefill(machine, offer))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          WhatsApp
        </a>
        {showTel && tel ? (
          <a href={`tel:${tel}`} className="btn-ghost">
            Appeler
          </a>
        ) : null}
      </div>
    </div>
  );
}
