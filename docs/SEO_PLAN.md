# Spinwheel SEO plan

## Goal

Grow qualified organic visits to the five picker tools while keeping the site fast, useful, and privacy-friendly.

## Phase 1 — Technical foundation (implemented)

- Unique title, meta description, canonical, H1, and human-written body copy per tool.
- Deployment-aware production origin using `NEXT_PUBLIC_SITE_URL`, with automatic Vercel URL fallback.
- Absolute XML sitemap with only canonical, indexable URLs.
- `robots.txt` with crawl permission, host, and sitemap reference.
- Open Graph and X metadata with a branded 1200×630 social preview.
- `WebSite`, `WebApplication`, `BreadcrumbList`, and `FAQPage` JSON-LD.
- Strong internal links in the header, related-tools block, and footer.
- Static rendering, responsive layout, small client bundle, and offline support.
- Legal and trust pages linked site-wide.

## Phase 2 — Launch (site owner)

1. Attach the final custom domain in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to that exact HTTPS origin for Production.
3. Add the domain property in Google Search Console.
4. Submit `https://YOUR-DOMAIN/sitemap.xml`.
5. Inspect and request indexing for all five picker routes.
6. Add Bing Webmaster Tools and import the Search Console property.
7. Test the live URLs with Google Rich Results Test and PageSpeed Insights.

## Phase 3 — Content growth

- Publish practical guides only when they answer a distinct user need.
- Suggested clusters:
  - classroom participation ideas and fair student selection;
  - team-building formats and group-size guidance;
  - transparent giveaway and raffle checklists;
  - decision games for parties, meetings, and families.
- Link each guide to one primary tool and related tools where genuinely useful.
- Avoid near-duplicate city, industry, or keyword-variant pages.

## Phase 4 — Authority

- Offer the classroom picker to teacher resource lists.
- Share the team generator with workshop and facilitation communities.
- Create a simple embeddable-wheel feature only if requested by real users.
- Seek descriptive links to the most relevant landing page, not only the homepage.

## Measurement

Review monthly:

- indexed canonical pages;
- non-brand clicks and impressions per tool;
- click-through rate by query and landing page;
- Core Web Vitals and mobile usability;
- referring domains and useful mentions;
- engagement with Spin / Generate actions using privacy-respecting measurement only if analytics is intentionally added later.

## Guardrails

- Write for the user’s task, not keyword density.
- Keep one clear search intent per landing page.
- Do not add analytics, advertising scripts, or consent logic without updating the privacy and storage policies.
- Update `lastModified` dates only when page content materially changes.

