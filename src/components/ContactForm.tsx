"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type MachineInterest = "linde" | "toyota" | "both" | "other";

function mapMachineInterest(value: string): MachineInterest {
  switch (value) {
    case "linde":
      return "linde";
    case "toyota":
      return "toyota";
    case "both":
      return "both";
    default:
      return "other";
  }
}

export function ContactForm({
  defaultMachine = "",
}: {
  defaultMachine?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const companyName = String(data.get("company") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const city = String(data.get("city") || "").trim();
    const machine = String(data.get("machine") || "").trim();
    const userMessage = String(data.get("message") || "").trim();

    if (!name || !companyName || !phone || !userMessage) {
      setStatus("error");
      setMessage("Merci de renseigner nom, société, téléphone et message.");
      return;
    }

    // Backend Zod requires a valid email — form path needs it; WhatsApp remains no-email.
    if (!email) {
      setStatus("error");
      setMessage(
        "L’e-mail est requis pour le formulaire (sinon contactez-nous via WhatsApp).",
      );
      return;
    }

    const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
    if (!apiBase) {
      setStatus("error");
      setMessage(
        "Formulaire indisponible pour le moment. Contactez-nous par WhatsApp, téléphone ou e-mail.",
      );
      return;
    }

    const composedMessage = [
      city ? `Ville : ${city}` : null,
      userMessage,
    ]
      .filter(Boolean)
      .join("\n\n");

    const payload = {
      name,
      company: companyName,
      phone,
      email,
      message: composedMessage,
      machineInterest: mapMachineInterest(machine),
    };

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${apiBase}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus("success");
      setMessage("Demande envoyée. Nous vous répondrons rapidement.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Envoi impossible. Utilisez WhatsApp, le téléphone ou l’e-mail ci-contre.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-mist-bright">Nom *</span>
          <input className="field" name="name" autoComplete="name" required />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist-bright">Société *</span>
          <input
            className="field"
            name="company"
            autoComplete="organization"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-mist-bright">Téléphone / WhatsApp *</span>
          <input
            className="field"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist-bright">E-mail *</span>
          <input
            className="field"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-mist-bright">Ville</span>
          <input
            className="field"
            name="city"
            autoComplete="address-level2"
            placeholder="Ex. : Agadir"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist-bright">Machine concernée</span>
          <select className="field" name="machine" defaultValue={defaultMachine}>
            <option value="">—</option>
            <option value="linde">LINDE E20 PHL-02</option>
            <option value="toyota">TOYOTA 7FBEST15</option>
            <option value="both">Les deux</option>
            <option value="other">Autre demande</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-mist-bright">Message *</span>
        <textarea
          className="field min-h-32"
          name="message"
          placeholder="Ex. : je souhaite recevoir une offre et planifier une inspection à Agadir…"
          required
        />
      </label>

      <button
        type="submit"
        className="btn-primary w-full md:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi…" : "Recevoir une offre"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-accent" : "text-mist-bright"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
