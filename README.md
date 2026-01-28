# Poker Extreme Trainer

Web app d’entraînement Texas Hold’em avec IA, statistiques avancées, animations Framer Motion et coaching post-main.

## Stack
- Next.js (App Router) + TypeScript + TailwindCSS
- Framer Motion
- Zustand
- NextAuth
- PostgreSQL + Prisma
- Vitest

## Installation

```bash
npm install
```

## Variables d’environnement
Copier `.env.example` en `.env` et renseigner :

```bash
cp .env.example .env
```

## Base de données

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

## Lancer en dev

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Pages
- `/` landing
- `/app` table + hub
- `/history` historique
- `/hand/[id]` détail main
- `/stats` stats
- `/profile` profil
- `/settings` réglages
- `/auth/*` auth

## Endpoints API
- `POST /api/register`
- `GET/POST /api/hands`
- `GET/DELETE /api/hands/[id]`
- `GET /api/stats`
- `POST /api/equity`
- `GET /api/ai-profiles`

## Tests

```bash
npm run test
```
