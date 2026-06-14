@AGENTS.md

# Permis Bateau — Révision & Apprentissage

Application web Next.js 16 + React 19 + Tailwind v4 pour réviser le permis bateau fluvial (côtier en Phase 2).

## Stack technique

- **Next.js 16** (App Router, TypeScript strict) — React 19
- **Tailwind CSS v4** — `@import "tailwindcss"` dans globals.css, `@theme inline` pour les variables
- **Lucide React** — icônes
- **clsx + tailwind-merge** — utilitaires CSS (`cn()`)
- Pas de dépendance backend — données en TypeScript statique, progression en localStorage

## Architecture

```
src/
├── app/                # Pages (Server Components par défaut)
│   ├── layout.tsx      # NavBar + font Geist
│   ├── page.tsx        # Accueil
│   ├── revision/       # Mode révision par catégorie
│   ├── examen/         # Examen blanc 40 questions / 45 min
│   ├── flashcards/     # Mode cartes recto/verso
│   └── stats/          # Tableau de bord progression
├── components/         # Composants UI ("use client" si interactif)
├── data/               # questions-fluvial.ts, categories.ts
├── hooks/              # useProgress, useExam (localStorage)
├── lib/                # utils, storage, questions, uuid
└── types/index.ts      # Types partagés
```

## Modèle de données

Les questions sont dans `src/data/questions-fluvial.ts` — format TypeScript statique, pas de BDD.
La progression (attempts, mastered) est stockée dans `localStorage` via `src/lib/storage.ts`.

## Conventions Next.js 16 importantes

- `params` dans les routes dynamiques est une `Promise` : `const { id } = await params`
- Tailwind v4 : pas de `tailwind.config.js`, configuration via `@theme` dans CSS
- Server Components par défaut, `"use client"` seulement pour les hooks et événements

## Commandes

```bash
npm run dev      # localhost:3000
npm run build
npm run lint
```

## Règles de l'examen fluvial

- 40 questions tirées au hasard
- 45 minutes
- Seuil : 87,5% (35/40)
- Pas de déduction pour mauvaise réponse

## Roadmap

### Phase 1 — Permis fluvial (MVP)
- [x] Setup Next.js 16 + Tailwind v4
- [x] 44 questions fluvial (7 catégories)
- [x] Mode révision par catégorie avec shuffle
- [x] Mode examen simulé (timer, score, récapitulatif)
- [x] Mode flashcards (recto/verso, connues/à retravailler)
- [x] Statistiques + historique localStorage
- [ ] Ajouter images pour signalisation (panneaux, feux)
- [ ] Atteindre 200+ questions

### Phase 2
- [ ] Questions permis côtier
- [ ] Mode "questions ratées uniquement"
- [ ] Supabase (multi-appareils, auth)
- [ ] PWA (offline)
