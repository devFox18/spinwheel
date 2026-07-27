# Spinwheel

A production-ready, privacy-friendly random picker built with Next.js, TypeScript, and Tailwind CSS. It includes five focused landing pages, a canvas wheel, a random team generator, local list saving, offline support, structured data, and static export support.

## Local setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

The site uses `output: "export"`, so the static build is written to `out/`.

## Deploy to Vercel

Import the GitHub repository in Vercel. Vercel detects Next.js automatically; no environment variables or backend services are required.

## Before using a custom domain

Replace `https://spinwheel.app` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `components/LandingPage.tsx` with the production origin.

## Privacy

Lists are stored only in the browser using `localStorage`. There is no database, login, analytics, or cookie banner logic.
