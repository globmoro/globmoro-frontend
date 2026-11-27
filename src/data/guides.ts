/** Durable SEO guides — educational, cite-or-silence.
 * No invented prices, warranties, battery SOH %, or fake inventory.
 */

import { company } from "@/data/company";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaq = { q: string; a: string };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  intro: string[];
  keywords: string[];
  updatedLabel: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  ctaNote: string;
};

export const guidesIndex = {
  path: "/guides",
  title: "Guides chariot élévateur",
  description:
    "Guides pratiques pour choisir un chariot élévateur (électrique, occasion, location) à Agadir et au Maroc — GLOBMORO SARL.",
  h1: "Guides — choisir le bon chariot élévateur",
} as const;

export const guides: Guide[] = [
  {
    slug: "choisir-chariot-elevateur",
    title: "Comment choisir un chariot élévateur pour votre entreprise",
    metaTitle: "Choisir un chariot élévateur — guide Agadir & Maroc",
    metaDescription:
      "Guide pratique : capacité, hauteur de levée, électrique vs diesel, occasion, location. Comment choisir un chariot élévateur pour votre entrepôt à Agadir / Souss-Massa. GLOBMORO.",
    h1: "Comment choisir un chariot élévateur pour votre entreprise",
    kicker: "Guide acheteur · Agadir · Maroc",
    updatedLabel: "2026-11",
    keywords: [
      "choisir chariot élévateur",
      "quel chariot élévateur pour mon entreprise",
      "chariot élévateur électrique ou diesel",
      "chariot élévateur occasion Agadir",
      "capacité chariot élévateur",
      "hauteur de levée chariot",
      "acheter chariot élévateur Maroc",
      "location chariot élévateur entreprise",
      "forklift guide Agadir",
    ],
    intro: [
      `Choisir un chariot élévateur, ce n’est pas « prendre le plus gros ». À Agadir et dans le Souss (froid, packing, plasturgie, distribution), la bonne machine dépend de la charge, de la hauteur de rayonnage, du sol, du bruit / émissions, et du mode d’acquisition (achat, location, option d’achat).`,
      `Ce guide ${company.name} vous aide à cadrer le besoin avant de demander un devis. Stock actuel inspectable à El Wifaq : LINDE E20 (2 t) et TOYOTA 7FBEST15 (1,5 t) électriques — prix / conditions sur devis. Autre marque (Clark, Still…) ou nacelle : sourcing import sur devis, sans stock fantôme.`,
    ],
    sections: [
      {
        id: "capacite",
        title: "1. Capacité de charge (kg) — partez du vrai besoin",
        paragraphs: [
          "Notez le poids max d’une charge typique (palette + produit), pas le « cas extrême une fois par an ». Ajoutez une marge de sécurité raisonnable, sans surdimensionner : un chariot trop lourd coûte plus cher à l’achat / location et est moins maniable en allée étroite.",
          "Repères simples : beaucoup de packing / distribution Souss tournent autour de 1,5–2 t pour palettes standards. Au-delà (bobines, big-bags, charges longues), il faut un cadrage spécifique — et parfois une autre famille de machine.",
        ],
        bullets: [
          "1 500 kg : allées compactes, PME, charges légères/moyennes (ex. TOYOTA 7FBEST15 en stock).",
          "2 000 kg : entrepôts / froid / volumes plus soutenus (ex. LINDE E20 en stock).",
          "> 2–3 t ou hors gabarit : décrivez le cas → devis / sourcing, pas de machine inventée sur le site.",
        ],
      },
      {
        id: "hauteur",
        title: "2. Hauteur de levée et mât — mesurez vos rayonnages",
        paragraphs: [
          "La capacité affichée n’est utile que si le mât atteint votre niveau de stockage utile. Mesurez la hauteur sous plafond, la hauteur max des fourches nécessaires, et le gabarit de passage (portes, camions, chambres froides).",
          "Repères techniques utiles à demander au vendeur : levée max, mât baissé (passage portes), free lift (travail sous plafond bas). Sur notre stock : LINDE E20 mât triplex jusqu’à 4 625 mm ; TOYOTA 7FBEST15 mât duplex jusqu’à 3 010 mm — chiffres issus du dossier machine.",
        ],
      },
      {
        id: "energie",
        title: "3. Électrique ou diesel ? (et pourquoi l’électrique gagne en indoor)",
        paragraphs: [
          "Électrique : idéal entrepôt, packing, chambre froide / zones où les gaz d’échappement et le bruit posent problème. Recharge + chargeur à prévoir (sur notre stock actuel, chargeur inclus).",
          "Diesel / thermique : plutôt extérieur, chantiers, sols irréguliers, longues distances sans recharge. Moins adapté aux espaces fermés agro / froid.",
          "Si votre activité est surtout indoor à Agadir / Aït Melloul, partez électrique sauf contrainte terrain claire. Hésitation ? Décrivez site + heures / jour → on oriente sans inventer une « règle magique ».",
        ],
        bullets: [
          "Froid / conserve / packing → électrique en priorité.",
          "Chantier / extérieur lourd → souvent thermique (sourcing si besoin).",
          "Mixte → précisez % indoor vs outdoor avant d’acheter.",
        ],
      },
      {
        id: "batterie-heures",
        title: "4. Batterie, heures et état — ce qu’il faut vérifier sur l’occasion",
        paragraphs: [
          "Sur l’occasion, les heures compteur et la batterie comptent autant que la marque. Exigez : photo compteur, type/date batterie si connue, chargeur, essai de levée et translation sur site.",
          `${company.legalName} vend en l’état, inspection libre à Agadir. Heures affichées = compteur / brochure propriétaire (LINDE 3 807 h ; TOYOTA ~1 300 h). État et batterie = évaluation propriétaire, à confirmer à la visite — pas de % SOH laboratoire inventé, pas de garantie constructeur incluse.`,
        ],
        bullets: [
          "Inspection + essai avant acompte.",
          "Chargeur inclus ou non (chez nous : inclus sur le stock actuel).",
          "Sideshift / positionneur / options : utiles en packing — vérifiez sur fiche.",
        ],
      },
      {
        id: "neuf-occasion",
        title: "5. Neuf vs occasion vs location",
        paragraphs: [
          "Neuf : garantie dealer typique, prix plus élevé, délais. Occasion import Europe : ticket plus bas, inspection critique, pas de garantie inventée. Location : lisse la trésorerie pour un pic de saison (agrumes, campagne conserve). Location avec option d’achat : possible au cas par cas — conditions sur devis seulement.",
          "Pour beaucoup de PME Souss, l’occasion électrique inspectable localement est le meilleur rapport vitesse / budget — à condition de visiter la machine.",
        ],
      },
      {
        id: "marques",
        title: "6. Marques (Linde, Toyota, Clark…) — et le stock réel",
        paragraphs: [
          "Linde et Toyota sont des références premium / volume sur l’électrique occasion. Clark, Still, Jungheinrich, Heli, Hangcha : très demandés aussi au Maroc, selon dealers et parc de location.",
          "Sur globmoro.com, seul le stock réellement disponible est listé. Aujourd’hui : LINDE E20 et TOYOTA 7FBEST15. Besoin Clark, diesel, nacelle, gerbeur : demandez un sourcing import Europe — devis après cadrage. Pas de catalogue fantôme.",
        ],
      },
      {
        id: "agadir",
        title: "7. Spécificités Agadir / Souss-Massa",
        paragraphs: [
          "Priorités locales fréquentes : entrepôts frigo et packing (émissions = 0 en électrique), allées parfois étroites, saisonnalité export fruits/légumes/poisson, besoin de livraison Aït Melloul / Inezgane / Tassila.",
          `Avantage d’un stock Agadir : vous inspectez avant d’acheter. ${company.legalName} — El Wifaq / Bensergao. Livraison possible — coût à discuter selon destination.`,
        ],
      },
      {
        id: "checklist",
        title: "8. Checklist avant devis (à copier)",
        paragraphs: [
          "Envoyez ces points sur WhatsApp ou via le formulaire — réponse plus rapide, offre plus juste.",
        ],
        bullets: [
          "Charge max typique (kg) + type de charge (palette, caisse, bobine…)",
          "Hauteur de levée utile (mm) + hauteur sous plafond / portes",
          "Indoor % / outdoor % · froid oui/non",
          "Heures / jour approximatives · postes (1× / 2×)",
          "Achat, location, ou location avec option d’achat ?",
          "Ville / zone (Agadir, Aït Melloul…)",
          "Marque souhaitée si contrainte (sinon « ouvert »)",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle capacité de chariot élévateur pour une PME à Agadir ?",
        a: "Souvent 1,5–2 tonnes pour palettes standards en packing / distribution. Mesurez votre charge réelle avant d’acheter. Notre stock : 1,5 t (Toyota) et 2 t (Linde).",
      },
      {
        q: "Faut-il un chariot élévateur électrique ou diesel ?",
        a: "Indoor, froid, packing : électrique en priorité. Extérieur / chantier : souvent diesel. Décrivez votre site pour trancher.",
      },
      {
        q: "Comment vérifier un chariot élévateur d’occasion ?",
        a: "Inspection sur site, essai levée/translation, photo compteur, batterie + chargeur, options (sideshift…). Chez GLOBMORO : visite El Wifaq, vendu en l’état.",
      },
      {
        q: "Acheter ou louer un chariot élévateur ?",
        a: "Achat si usage durable. Location pour un pic saisonnier ou test. Option d’achat : au cas par cas, sur devis — pas de grille inventée.",
      },
      {
        q: "GLOBMORO a-t-il des nacelles ou des Clark en stock ?",
        a: "Stock affiché = Linde E20 et Toyota 7FBEST15 électriques. Clark / nacelle / autre : sourcing import sur devis, sans stock fantôme.",
      },
    ],
    ctaNote:
      "Après lecture : envoyez la checklist WhatsApp ou demandez une inspection à Agadir. Prix et conditions uniquement sur devis.",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
