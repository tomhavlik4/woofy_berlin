# woofy_berlin

Dog sitting app localised for Berlin. Connecting pet owners with dog lovers.

A small-business landing page for **Woofy Berlin** — dog walking & daycare across Berlin. Built with Next.js + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing the page

Almost all text lives in one file: **`content.ts`** (business name, hero, services, gallery, FAQ, contact). Edit there first. Colors and fonts are in `tailwind.config.ts`; each page section is a component in `components/`.

## Deploy to Vercel

```bash
vercel login
vercel --prod
```

Accept the defaults and you'll get a live URL.
