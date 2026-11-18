"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      machine: String(data.get("machine") || "").trim(),
      message: String(data.get("message") || "").trim(),
      source: "globmoro-frontend",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Merci de renseigner nom, e-mail et message.");
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

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus("success");
      setMessage("Message envoyé. Nous vous répondrons rapidement.");
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
          <span className="mb-2 block text-mist">Nom *</span>
          <input className="field" name="name" autoComplete="name" required />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Société</span>
          <input className="field" name="company" autoComplete="organization" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-mist">E-mail *</span>
          <input
            className="field"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Téléphone / WhatsApp</span>
          <input className="field" type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-mist">Machine concernée</span>
        <select className="field" name="machine" defaultValue="">
          <option value="">—</option>
          <option value="linde-e20">LINDE E20 PHL-02 — 230 000 MAD TTC</option>
          <option value="toyota-7fbest15">
            TOYOTA 7FBEST15 — 150 000 MAD TTC
          </option>
          <option value="autre">Les deux / autre demande</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-mist">Message *</span>
        <textarea
          className="field min-h-32"
          name="message"
          placeholder="Ex. : je souhaite planifier une inspection à Agadir…"
          required
        />
      </label>

      <button
        type="submit"
        className="btn-primary w-full md:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi…" : "Envoyer la demande"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-copper-bright" : "text-mist"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
