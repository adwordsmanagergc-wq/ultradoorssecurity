# Ultra Doors Security — Website

A fast, modern, statically-generated marketing site for **Ultra Doors Security**
— bespoke security doors & industrial door specialists in Bolton, serving the
North West of England.

Built with **Astro + Tailwind CSS**. Fully responsive, accessible (WCAG 2.1 AA
oriented), SEO-optimised, and built for Lighthouse 95+.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output -> ./dist
npm run preview    # preview the production build
```

Requires Node 18+ (Node 20 recommended).

---

## Where to drop your images

Put every photo in **`/public/images/`** using the exact filenames listed in
`public/images/README.md` (and `src/data/portfolio.ts`). Until a file is added,
the site shows a clean branded **"Image coming soon"** placeholder — so you can
deploy immediately and add photos as they come in.

- **Hero background** reads from `ultradoors-security-gates.jpg`.
- **Social share image**: add `og-default.jpg` (1200×630) for rich link previews.
- **Logo**: the header/footer use a crisp inline-SVG logo by default. To use your
  own logo image instead, edit `src/components/Logo.astro` (a one-line swap is
  documented at the top of that file).

## Correcting the gallery categories

The portfolio filters (All · Security Doors · Roller Shutters · Industrial Doors
· Shop Fronts · Security Gates) are driven by **`src/data/portfolio.ts`**. The
general project photos were distributed across categories in a rotating pattern
and each is flagged `// TODO: confirm category`. Since you know what each photo
actually shows, correct the `category` value and the filters + lightbox update
automatically.

## Editing content

Everything content-related lives in small data files:

| File | Controls |
|------|----------|
| `src/data/site.ts` | Business name, phones, email, address, hours, trust points, social links |
| `src/data/services.ts` | The six service cards + the quote-form dropdown options |
| `src/data/portfolio.ts` | Gallery image manifest + categories, logo/brand paths |
| `src/data/testimonials.ts` | Customer reviews (also feeds Review schema) |

Phone numbers, email and address are **used verbatim** and kept in one place so
they stay consistent across the header, footer, forms and structured data.

## Contact / quote form

The forms use **Netlify Forms** (works on a static Netlify deploy — no backend):
`data-netlify="true"` + a honeypot field (`bot-field`) for spam protection, with
progressive-enhancement AJAX submission and inline success/error states. On
success (or with JS disabled) it lands on `/thank-you`.

**Prefer Formspree?** In `src/components/QuoteForm.astro`, change the `fetch('/')`
URL to your Formspree endpoint (`https://formspree.io/f/xxxx`) and add the header
`Accept: application/json`. (Search for the `TODO`/comment in that file.)

---

## Deployment

### Netlify (recommended for the built-in forms)
- Connect the repo. Build command `npm run build`, publish directory `dist`
  (already set in `netlify.toml`).
- Forms are detected automatically from the built HTML — submissions appear
  under **Forms** in the Netlify dashboard. Add a notification email there.

### Vercel
- Import the repo; Astro is auto-detected (build `npm run build`, output `dist`).
- Note: Netlify Forms only work on Netlify — switch the form to Formspree (above)
  if hosting on Vercel.

Before going live, set your real domain in **`astro.config.mjs`** (`site:`) — it
drives canonical URLs, the sitemap and Open Graph absolute URLs.

---

## SEO & technical

- Per-page `<title>` / meta description, canonical, Open Graph + Twitter cards
- **JSON-LD**: `LocalBusiness` on every page (name, `+447570335330`, Bolton /
  Greater Manchester / GB, `areaServed` North West England, 24/7 opening hours,
  price range); `Review` + `AggregateRating` on the home page; `BreadcrumbList`
  on inner pages
- Auto-generated `sitemap-index.xml` (via `@astrojs/sitemap`) and `robots.txt`
- Semantic HTML, one `<h1>` per page, skip-to-content link, visible focus rings,
  ARIA labels, keyboard-accessible menu, gallery filters and lightbox
- Self-hosted variable fonts (Inter + Plus Jakarta Sans) — no render-blocking
  third-party font requests
- Lazy-loaded images with width/height to avoid layout shift (CLS)
- Minimal, dependency-free vanilla JS (menu, gallery/lightbox, carousel, reveal)

## Project structure

```
public/
  images/            ← drop all photos here (see its README)
  favicon.svg  robots.txt
src/
  components/        Header, TopBar, Hero, TrustBar, ServiceCard, ServicesGrid,
                     WhyUs, Gallery, Testimonials, QuoteForm, Footer,
                     FloatingCallButton, Logo
  data/              site, services, portfolio, testimonials
  layouts/Base.astro meta, JSON-LD, fonts, skip link, reveal + image fallback
  pages/             index, portfolio, contact, thank-you, privacy, terms, 404
  styles/global.css  brand CSS variables + Tailwind theme
astro.config.mjs  tailwind.config.mjs  netlify.toml
```

## Cleaned up from the old site
Single canonical email, one consistent "15+ years" experience figure, no
"lorem ipsum", no 50%-off summer-sale banner, and clean social placeholders in
place of the old dead links.
