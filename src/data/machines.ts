/** Specs from Richter invoice + owner-approved facts + sales sheets. Cite-or-silence. */

export type MachinePhoto = {
  src: string;
  alt: string;
};

export type Machine = {
  slug: string;
  brand: string;
  model: string;
  productCode: string;
  year: number;
  origin: string;
  capacityKg: number;
  mast: string;
  liftMaxMm: number;
  mastLoweredMm: number;
  freeLiftMm: number;
  forksMm: number;
  hours: string;
  hoursNote: string;
  battery: string;
  batteryHealth: string;
  charger: string;
  serial?: string;
  condition: string;
  priceMadTtc: number;
  priceLabel: string;
  equipment: string[];
  heroImage: string;
  photos: MachinePhoto[];
  shortPitch: string;
  metaDescription: string;
};

export const machines: Machine[] = [
  {
    slug: "linde-e20",
    brand: "LINDE",
    model: "E20 PHL-02",
    productCode: "0001",
    year: 2019,
    origin: "Allemagne",
    capacityKg: 2000,
    mast: "Triplex",
    liftMaxMm: 4625,
    mastLoweredMm: 2120,
    freeLiftMm: 1520,
    forksMm: 1200,
    hours: "3 807 h",
    hoursNote: "compteur",
    battery: "48 V · 930 Ah · 6 PzS 930 Ah (10/2019)",
    batteryHealth: "Bonne (évaluation propriétaire) — à confirmer à l’inspection",
    charger: "GNB Intronic D 48 V / 100 A — inclus",
    serial: "H2X 386 V 10827",
    condition: "Bon état (évaluation propriétaire) — inspection recommandée",
    priceMadTtc: 230_000,
    priceLabel: "230 000 MAD TTC",
    equipment: [
      "Sideshift",
      "2 fonctions hydrauliques additionnelles",
      "Pare-brise",
      "Toit vitré",
      "Mono-Pedal",
      "Blue Spot",
      "Phares",
    ],
    heroImage: "/forklifts/linde/hero.jpg",
    photos: [
      { src: "/forklifts/linde/hero.jpg", alt: "LINDE E20 — vue avant trois-quarts" },
      { src: "/forklifts/linde/rear.jpg", alt: "LINDE E20 — vue arrière" },
      { src: "/forklifts/linde/cab.jpg", alt: "LINDE E20 — cabine et siège" },
      { src: "/forklifts/linde/controls.jpg", alt: "LINDE E20 — commandes fingertip" },
      { src: "/forklifts/linde/hours.jpg", alt: "LINDE E20 — compteur d’heures" },
      { src: "/forklifts/linde/battery.jpg", alt: "LINDE E20 — batterie 48 V" },
      { src: "/forklifts/linde/charger.jpg", alt: "Chargeur GNB Intronic D 48 V / 100 A" },
    ],
    shortPitch:
      "Électrique 2 t · mât triplex 4 625 mm · batterie 930 Ah · chargeur inclus · stock Agadir.",
    metaDescription:
      "LINDE E20 PHL-02 2019, 2000 kg, 3 807 h, triplex 4625 mm, chargeur inclus. 230 000 MAD TTC. Stock GLOBMORO Agadir — vendu en l’état, inspection libre.",
  },
  {
    slug: "toyota-7fbest15",
    brand: "TOYOTA",
    model: "7FBEST15",
    productCode: "0002",
    year: 2015,
    origin: "Japon",
    capacityKg: 1500,
    mast: "Duplex",
    liftMaxMm: 3010,
    mastLoweredMm: 1990,
    freeLiftMm: 1470,
    forksMm: 1200,
    hours: "1 300 h",
    hoursNote: "brochure / compteur ≈ 1 307 h",
    battery: "24 V · 800 Ah · 8 EPzV 800 Ah plomb-acide (08/2015)",
    batteryHealth: "Bonne (évaluation propriétaire) — à confirmer à l’inspection",
    charger: "24 V / 100 A — inclus",
    serial: "7FBEST15-E 14626",
    condition: "Bon état (évaluation propriétaire) — inspection recommandée",
    priceMadTtc: 150_000,
    priceLabel: "150 000 MAD TTC",
    equipment: [
      "Positionneur + sideshift",
      "2 fonctions hydrauliques additionnelles",
      "Grille",
      "Vitres",
      "Phares",
    ],
    heroImage: "/forklifts/toyota/hero.jpg",
    photos: [
      { src: "/forklifts/toyota/hero.jpg", alt: "TOYOTA 7FBEST15 — vue avant trois-quarts" },
      { src: "/forklifts/toyota/rear.jpg", alt: "TOYOTA 7FBEST15 — vue arrière" },
      { src: "/forklifts/toyota/front.jpg", alt: "TOYOTA 7FBEST15 — vue avant" },
      { src: "/forklifts/toyota/cab.jpg", alt: "TOYOTA 7FBEST15 — cabine" },
      { src: "/forklifts/toyota/controls.jpg", alt: "TOYOTA 7FBEST15 — commandes" },
      { src: "/forklifts/toyota/hours.jpg", alt: "TOYOTA 7FBEST15 — compteur d’heures" },
      { src: "/forklifts/toyota/nameplate.jpg", alt: "TOYOTA 7FBEST15 — plaque constructeur" },
      { src: "/forklifts/toyota/battery.jpg", alt: "TOYOTA 7FBEST15 — batterie" },
    ],
    shortPitch:
      "Électrique 1,5 t · mât duplex 3 010 mm · ~1 300 h · chargeur inclus · stock Agadir.",
    metaDescription:
      "TOYOTA 7FBEST15 2015, 1500 kg, ~1 300 h, duplex 3010 mm, chargeur inclus. 150 000 MAD TTC. Stock GLOBMORO Agadir — vendu en l’état, inspection libre.",
  },
];

export function getMachine(slug: string): Machine | undefined {
  return machines.find((m) => m.slug === slug);
}

export const saleDisclaimer =
  "Vendu en l’état · inspection libre sur site à Agadir · pas de garantie constructeur incluse.";

export const saleTerms = [
  "Vente ferme B2B — prioritaire.",
  "Vendu en l’état · inspection libre à Agadir (El Wifaq / Bensergao).",
  "Chargeur inclus pour chaque machine du stock actuel.",
  "Livraison possible — coût à discuter selon destination.",
  "SAV / entretien possible selon termes convenus (pas de garantie gratuite incluse).",
  "Paiement : conditions de marché standards.",
] as const;
