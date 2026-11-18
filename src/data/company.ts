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
  activity:
    "Manutention — vente et location de chariots élévateurs électriques d’occasion",
  instagramUrl: "https://www.instagram.com/globmoro/",
  instagramHandle: "@globmoro",
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${digits(company.whatsapp)}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const telUrl = `tel:${company.tel}`;
export const mailUrl = `mailto:${company.email}`;

export const defaultWhatsappMessage =
  "Bonjour GLOBMORO, je souhaite des informations sur vos chariots électriques à Agadir (achat, location ou location avec option d’achat) — conditions sur devis.";

/** Commercial interest types — fold into inquiry message; no extra API field. */
export const offerTypes = [
  {
    id: "achat",
    label: "Achat",
    shortLabel: "Achat",
    cta: "Recevoir une offre",
    messageLabel: "Achat (vente ferme)",
  },
  {
    id: "location",
    label: "Location",
    shortLabel: "Location",
    cta: "Demander une location",
    messageLabel: "Location",
  },
  {
    id: "location-option",
    label: "Location avec option d’achat",
    shortLabel: "Option d’achat",
    cta: "Demander une option d’achat",
    messageLabel: "Location avec option d’achat",
  },
] as const;

export type OfferTypeId = (typeof offerTypes)[number]["id"];

export function isOfferTypeId(value: string): value is OfferTypeId {
  return offerTypes.some((offer) => offer.id === value);
}

export function getOfferType(id: OfferTypeId) {
  return offerTypes.find((offer) => offer.id === id)!;
}

/** Morocco B2B paths — no invented monthly prices, deposits, or warranty claims. */
export const commercialOffers = [
  {
    id: "achat" as const,
    title: "Vente",
    text: "Achat ferme B2B du stock Agadir. Prix sur demande. Vendu en l’état, inspection libre.",
  },
  {
    id: "location" as const,
    title: "Location",
    text: "Location courte durée ou plus longue selon disponibilité — sur devis, conditions à confirmer.",
  },
  {
    id: "location-option" as const,
    title: "Location avec option d’achat",
    text: "Location puis option d’achat après une période convenue (N mois) — sur devis, conditions à confirmer. Pas de grille légale inventée.",
  },
] as const;

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
    text: `${company.legalName} — siège et stock à ${company.city}. Identité légale (ICE / RC / IF) sur la page À propos.`,
  },
] as const;

/** Services — honest scope only; no invented SLAs / warranties / rental rates. */
export const services = [
  {
    slug: "vente",
    title: "Vente",
    text: "Vente B2B de chariots électriques d’occasion en stock à Agadir. Prix sur demande. Vendu en l’état, inspection libre.",
  },
  {
    slug: "location",
    title: "Location",
    text: "Location courte durée ou plus longue selon disponibilité du stock. Demandez une location — conditions et durée sur devis, à confirmer.",
  },
  {
    slug: "location-option",
    title: "Location avec option d’achat",
    text: "Formule location puis option d’achat après une période convenue (N mois). Étudiée au cas par cas — sur devis, sans grille de loyers ni dépôt inventés.",
  },
  {
    slug: "import",
    title: "Import Europe",
    text: "Import documenté depuis l’Europe (dossier fournisseur, série, équipements). Sourcing possible selon besoin — devis après cadrage.",
  },
  {
    slug: "pieces",
    title: "Pièces",
    text: "Orientation pièces et équipements selon machine — disponibilité et délais à confirmer au cas par cas.",
  },
  {
    slug: "entretien",
    title: "Entretien / SAV",
    text: "Suivi et entretien possibles selon termes convenus. Pas de garantie constructeur ni période gratuite inventée.",
  },
] as const;

export const faqItems = [
  {
    q: "Où puis-je inspecter les machines ?",
    a: `À ${company.city}, El Wifaq / Bensergao. Inspection et essai sur site sur rendez-vous.`,
  },
  {
    q: "Les machines sont-elles garanties ?",
    a: "Non — vendues en l’état, sans garantie constructeur incluse. SAV / entretien possibles selon termes convenus.",
  },
  {
    q: "Proposez-vous la location ?",
    a: "Oui — location courte durée ou plus longue selon disponibilité. Conditions et durée sur devis, à confirmer. Utilisez « Demander une location » ou WhatsApp.",
  },
  {
    q: "Qu’est-ce que la location avec option d’achat ?",
    a: "Une location pendant une période convenue, puis une option d’achat étudiée au cas par cas. Détails (durée, conditions) uniquement sur devis — nous n’affichons pas de formule légale standard.",
  },
  {
    q: "Le chargeur est-il inclus ?",
    a: "Oui pour le stock actuel (LINDE et TOYOTA) — confirmé propriétaire.",
  },
  {
    q: "Comment obtenir le prix ?",
    a: "Prix sur demande pour la vente. Location et option d’achat : conditions sur devis. Formulaire, « Recevoir une offre » / « Demander une location », ou WhatsApp.",
  },
  {
    q: "Livraison possible ?",
    a: "Oui — coût à discuter selon destination (pas de tarif fixe publié).",
  },
] as const;
