# Ultra Doors Security — Marketing Website

A fast, SEO-optimised marketing site for **Ultra Doors Security**, a Bolton-based
trade business specialising in security doors, fire doors, industrial roller
shutters, shop front glazing, garage doors and 24-hour emergency glazing across
Bolton and Greater Manchester.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, statically
generated (SSG) for every page, and deployable to Vercel or as a fully static
export.

---

## ⚠️ Before you go live — replace the real business data

The site is built and production-ready, but a handful of details **must be
confirmed and replaced with your genuine business facts**. Everything you need
to change lives in a small number of clearly-marked places:

| What | Where | Notes |
|------|-------|-------|
| **Phone numbers** | `src/config/business.ts` | Currently use Ofcom's reserved fiction ranges (`01204 496xxx`, `07700 900xxx`) so they can't ring a real person. Swap for your real landline & mobile. |
| **Address** | `src/config/business.ts` | Must match your Google Business Profile **exactly** (Name, Address, Phone must be identical everywhere for local SEO). |
| **Email, domain, opening hours, social links** | `src/config/business.ts` | Confirm all. |
| **Google rating & review count** | `src/config/business.ts` → `aggregateRating` | Set to the real figures shown on your Google profile. |
| **Customer testimonials** | `src/data/testimonials.ts` | The samples are placeholders. Replace with your **own genuine, collected reviews** — Google's rules require Review/AggregateRating schema to reflect real reviews only. |
| **Portfolio photos** | `src/data/portfolio.ts` + `public/portfolio/` | Add your **actual completed-project photos** and point each entry's `image` at the file. Until then a clean branded "photo coming soon" tile shows (no broken images). |
| **Coverage area** | `src/data/locations.ts` | Confirm the towns listed are ones you genuinely serve. |
| **Contact form backend** | `.env.local` | Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (see below). |

> The business facts baked into the copy — *over 15 years' experience,
> NVQ-qualified fitters, 24-hour emergency callout, domestic & commercial* —
> come from the project brief. Double-check they're accurate before publishing.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # standard build (for Vercel / Node hosting)
npm run export       # fully static build -> ./out  (EXPORT=true next build)
```

## Deployment

### Vercel (recommended)
Push to GitHub and import the repo in Vercel. No config needed — `next/image`
serves AVIF/WebP automatically and the sitemap/robots are generated at build.
Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in the Vercel project's Environment
Variables.

### Static export (any static host / object storage / GitHub Pages)
```bash
npm run export
```
The `./out` folder is a complete static site. Under static export, `next/image`
optimisation is disabled (no server), so add already-optimised WebP/AVIF images
to `public/`.

## Contact form

The form posts to [Formspree](https://formspree.io) — a serverless handler that
works with a static site (no PHP/WordPress). Create a free form, then set:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Without it, the form gracefully falls back to opening the visitor's email client
so no enquiry is lost. Prefer Resend or another handler? Swap the `fetch` call in
`src/components/ContactForm.tsx`.

---

## SEO features built in

- Unique `<title>` (< 60 chars) and meta description (< 155 chars) per page,
  each targeting a specific keyword
- **JSON-LD structured data**: `LocalBusiness` on every page (NAP, hours,
  geo, `areaServed` for each town), `Review` + `AggregateRating` on the
  testimonials page, `BreadcrumbList` on inner pages, `Service` on service
  pages, `FAQPage` on the FAQs page
- Auto-generated **`sitemap.xml`** (real pages only) and **`robots.txt`**
  (allow all, points to the sitemap)
- Semantic HTML — exactly one `<h1>` per page, logical `<h2>`/`<h3>` hierarchy
- `next/image` for automatic AVIF/WebP, lazy-loading and sizing
- Consistent **NAP block in the footer** on every page + embedded Google Map on
  `/contact/` and each location page
- Internal linking between every service and location page
- Lean JS (~109 kB First Load) for strong Core Web Vitals

## Project structure

```
src/
  app/                 # App Router pages (all statically generated)
    services/[slug]/   # 6 service pages from one template
    locations/[slug]/  # 7 location pages from one template
    sitemap.ts robots.ts
  components/          # Header, Footer, Hero, cards, form, map, JSON-LD…
  config/business.ts  # ← single source of truth for all NAP data
  data/               # services, locations, testimonials, faqs, portfolio
  lib/seo.ts          # metadata + structured-data builders
public/               # favicon, logo, OG image, (add /portfolio photos here)
```

To edit content, change the data files in `src/data/` and the config in
`src/config/business.ts` — the pages, nav, footer, sitemap and schema all read
from them.
