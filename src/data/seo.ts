/** SEO copy & keyword clusters — honest claims only (cite-or-silence).
 * Do not invent Clark / nacelle stock. Sourcing = import Europe sur devis.
 */

import { company } from "@/data/company";

/** Primary FR intents for Agadir / Souss-Massa / Maroc */
export const primaryKeywords = [
  "chariot élévateur Agadir",
  "chariot élévateur électrique Agadir",
  "chariot élévateur électrique Maroc",
  "chariot élévateur occasion Agadir",
  "location chariot élévateur Agadir",
  "vente chariot élévateur Agadir",
  "forklift Agadir",
  "manutention Agadir",
  "chariot élévateur Aït Melloul",
  "chariot élévateur Souss-Massa",
] as const;

/** Related search intents — covered via stock brands + sourcing, never fake inventory */
export const relatedKeywords = [
  "chariot élévateur Linde Agadir",
  "chariot élévateur Toyota Agadir",
  "chariot élévateur Clark",
  "nacelle élévatrice Agadir",
  "gerbeur Agadir",
  "transpalette électrique Agadir",
  "matériel de manutention Agadir",
] as const;

export const siteKeywords = [
  ...primaryKeywords,
  ...relatedKeywords,
  "GLOBMORO",
  "LINDE E20",
  "TOYOTA 7FBEST15",
  "location avec option d’achat",
  "import chariot élévateur Europe Maroc",
] as const;

export const defaultDescription =
  "GLOBMORO SARL — chariot élévateur électrique d’occasion à Agadir (El Wifaq). Vente, location et location avec option d’achat. Stock LINDE E20 et TOYOTA 7FBEST15. Inspection libre · prix / conditions sur devis.";

export const defaultTitle = `${company.name} — Chariot élévateur électrique Agadir`;

export const serviceAreas = [
  "Agadir",
  "Aït Melloul",
  "Inezgane",
  "Tassila",
  "Anza",
  "Dcheira",
  "Taroudant",
  "Souss-Massa",
  "Maroc",
] as const;

export const localLanding = {
  path: "/chariot-elevateur-agadir",
  title: "Chariot élévateur électrique Agadir",
  description:
    "Chariot élévateur électrique d’occasion à Agadir et Souss-Massa — vente, location, option d’achat. Stock inspectable El Wifaq (LINDE E20, TOYOTA 7FBEST15). GLOBMORO SARL · devis WhatsApp.",
  h1: "Chariot élévateur électrique à Agadir — stock inspectable",
} as const;

export const locationLanding = {
  path: "/location-chariot-elevateur-agadir",
  title: "Location chariot élévateur Agadir",
  description:
    "Location de chariot élévateur électrique à Agadir — courte ou plus longue durée, option d’achat possible. Stock GLOBMORO El Wifaq. Conditions sur devis · WhatsApp +49 163 7726127.",
  h1: "Location de chariot élévateur électrique à Agadir",
} as const;

export const buyerGuideLanding = {
  path: "/guides/choisir-chariot-elevateur",
  title: "Choisir un chariot élévateur",
  description:
    "Guide : capacité, hauteur, électrique vs diesel, occasion et location — pour trouver le bon chariot élévateur à Agadir / Maroc.",
} as const;

export const seoFaqExtra = [
  {
    q: "Où trouver un chariot élévateur électrique à Agadir ?",
    a: `Chez ${company.legalName}, stock physique à El Wifaq / Bensergao (${company.city}). Inspection et essai sur rendez-vous. Vente, location ou location avec option d’achat — conditions sur devis.`,
  },
  {
    q: "Livrez-vous à Aït Melloul, Inezgane ou ailleurs dans le Souss ?",
    a: "Oui — livraison possible dans la région (Aït Melloul, Inezgane, Tassila, Anza, etc.) et plus loin au Maroc. Coût à discuter selon destination — pas de tarif fixe publié.",
  },
  {
    q: "Avez-vous des chariots Clark, Still, Jungheinrich ou des nacelles ?",
    a: "Stock actuel affiché : LINDE E20 et TOYOTA 7FBEST15 électriques. Pour Clark, autre marque, diesel ou nacelle élévatrice : demandez un sourcing import Europe — devis après cadrage. Nous n’affichons pas de stock fantôme.",
  },
  {
    q: "Proposez-vous un chariot élévateur d’occasion moins cher que le neuf à Agadir ?",
    a: "Oui — notre offre porte sur l’occasion électrique import Europe, inspectable sur site. Prix sur demande. Comparaison vs neuf / dealers locaux : après visite et besoin réel (capacité, hauteur, heures).",
  },
] as const;
