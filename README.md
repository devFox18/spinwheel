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

For stable canonical URLs, set this production environment variable in Vercel:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Without it, the build automatically uses Vercel's production project URL.

## Search engine launch checklist

1. Add the production domain to Google Search Console.
2. Submit `/sitemap.xml`.
3. Inspect the five picker URLs and request indexing.
4. Keep canonical domains consistent when a custom domain is attached.

## Privacy

Lists are stored only in the browser using `localStorage`. There is no database, login, analytics, or cookie banner logic.

