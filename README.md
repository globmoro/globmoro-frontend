# GLOBMORO Frontend

Site marketing B2B de **GLOBMORO SARL** (Agadir) — chariots élévateurs électriques d’occasion.

Stack : **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil — hero, machines, services, why, parcours, Instagram, FAQ, CTA |
| `/stock` | Nos machines — LINDE E20 + TOYOTA 7FBEST15 |
| `/stock/linde-e20` | Fiche LINDE (specs, galerie, prix sur demande) |
| `/stock/toyota-7fbest15` | Fiche TOYOTA |
| `/services` | Vente / location / import / sourcing / pièces / entretien |
| `/a-propos` | Entreprise — ICE/RC/IF, engagement, limites |
| `/contact` | Devis — WhatsApp / tél / e-mail + formulaire → `/api/inquiries` |

## Contenu & conformité (cite-or-silence)

- Français (marché Maroc B2B).
- **Prix sur demande** — aucun montant de vente affiché (230k / 150k retirés du site).
- CTAs : Recevoir une offre / Demander un devis / WhatsApp.
- Mentions : *vendu en l’état* / *inspection libre* — **pas de garantie**.
- Trust accueil : import Europe documenté, stock Agadir, SARL — **ICE / RC / IF uniquement sur `/a-propos`**.
- Instagram : https://www.instagram.com/globmoro/
- **Interdit** : coûts d’achat, floors confidentiels, avis fictifs, heures inventées, « parfait état », SOH %, garantie.

Sources : Project store `docs/company-drive-brief.md` + `docs/owner-approved-facts.md`.

## Développement local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build & production

```bash
npm run build
npm start
```

`npm start` écoute `0.0.0.0` et respecte `PORT` (défaut `3000`).

## Variables d’environnement (EasyPanel)

| Variable | Obligatoire | Rôle |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Pour le formulaire | Base URL backend → `POST {URL}/api/inquiries` |
| `NEXT_PUBLIC_SITE_URL` | Recommandé | Canonical / sitemap / Open Graph / JSON-LD |
| `NEXT_PUBLIC_WHATSAPP` | Optionnel | WhatsApp E.164 (fallback brochure) |
| `NEXT_PUBLIC_PHONE` | Optionnel | Téléphone Maroc (fallback brochure) |
| `NEXT_PUBLIC_EMAIL` | Optionnel | E-mail public (fallback brochure) |
| `PORT` | Auto EasyPanel | Port HTTP runtime |

> Les variables `NEXT_PUBLIC_*` sont bakées au **build**. Après un changement d’env public, **rebuild** l’app EasyPanel.

Voir `.env.example`.

## Checklist déploiement EasyPanel

1. **App** : Dockerfile **ou** Nixpacks / Node
2. **Repo** : `https://github.com/globmoro/globmoro-frontend`
3. **Branch** : `main`
4. **Build path** : `.` (racine)
5. **Port** : `3000` (ou la valeur de `PORT`)
6. **Build** (Nixpacks) : `npm run build`
7. **Start** (Nixpacks) : `npm start`
8. **Env** : `NEXT_PUBLIC_SITE_URL` + `NEXT_PUBLIC_API_URL` vers `globmoro-backend`
9. Déployer / rebuild après merge sur `main`

Dockerfile multi-stage inclus à la racine. Fonts (Syne + Figtree) **self-hosted** sous `src/fonts/` via `next/font/local` — pas de Google Fonts au build.

## SEO & dossiers repo

- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- Métadonnées Open Graph / Twitter + JSON-LD Organization / Product (offre sans prix numérique)
- Photos machines dans `public/forklifts/`
- Fonts OFL : `src/fonts/`
