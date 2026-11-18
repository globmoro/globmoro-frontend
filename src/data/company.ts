/** Owner-approved / Drive-proven company facts only. Cite-or-silence.
 * Contact channels prefer NEXT_PUBLIC_* env (EasyPanel) with approved fallbacks.
 */

function env(name: string, fallback: string): string {
  const value = process.env[name]?.trim();
  return value && value.length > 0 ? value : fallback;
}

const whatsappRaw = env("NEXT_PUBLIC_WHATSAPP", "+491637726127");
const phoneRaw = env("NEXT_PUBLIC_PHONE", "+212706503606");
const emailRaw = env("NEXT_PUBLIC_EMAIL", "Globmoro@gmail.com");
const siteUrlRaw = env("NEXT_PUBLIC_SITE_URL", "https://www.globmoro.com");

function digits(value: string): string {
  return value.replace(/\D/g, "");
}

function displayPhone(value: string): string {
  const d = digits(value);
  if (d.startsWith("49") && d.length >= 11) {
    return `+49 ${d.slice(2, 5)} ${d.slice(5)}`;
  }
  if (d.startsWith("212") && d.length >= 11) {
    return `+212 ${d.slice(3, 4)} ${d.slice(4)}`;
  }
  return value.startsWith("+") ? value : `+${value}`;
}

export const company = {
  name: "GLOBMORO",
  legalName: "GLOBMORO SARL",
  tagline: "Chariots élévateurs électriques — stock Agadir",
  address: "Bloc C N° 324, El Wifaq Bensergao, Agadir",
  city: "Agadir",
  region: "Souss-Massa",
  country: "Maroc",
  email: emailRaw,
  whatsapp: whatsappRaw.startsWith("+") ? whatsappRaw : `+${digits(whatsappRaw)}`,
  whatsappDisplay: displayPhone(whatsappRaw),
  tel: phoneRaw.startsWith("+") ? phoneRaw : `+${digits(phoneRaw)}`,
  telDisplay: displayPhone(phoneRaw),
  web: "www.Globmoro.com",
  siteUrl: siteUrlRaw.replace(/\/$/, ""),
  ice: "003765921000092",
  rc: "64603",
  if: "68306387",
  contactName: "Salah Eddine Amentague",
  /** From Drive `informations clés` — company created 11/07/2025 */
  foundedLabel: "2025",
  activity: "Manutention — vente de chariots élévateurs électriques d’occasion",
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${digits(company.whatsapp)}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const telUrl = `tel:${company.tel}`;
export const mailUrl = `mailto:${company.email}`;

export const trustPoints = [
  {
    title: "Import Europe documenté",
    text: "Machines importées d’Europe avec dossier (facture fournisseur, série, équipements). Specs affichées uniquement lorsqu’elles sont prouvées.",
  },
  {
    title: "Stock physique à Agadir",
    text: "Inspection et essai sur site à El Wifaq / Bensergao — pas de catalogue fantôme.",
  },
  {
    title: "Vendu en l’état",
    text: "Inspection libre. Pas de garantie constructeur incluse. SAV / entretien possibles selon termes convenus.",
  },
  {
    title: "SARL à Agadir",
    text: `${company.legalName} — siège et stock à ${company.city}. Identité légale (ICE / RC / IF) sur la page Entreprise.`,
  },
] as const;
