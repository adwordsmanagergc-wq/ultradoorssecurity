# Drop your images here

Place all `.jpg` / `.png` files referenced in `src/data/portfolio.ts` and
`src/data/services.ts` into this folder (`/public/images/`), keeping the exact
filenames.

Until an image is added, the site shows a clean branded "Image coming soon"
placeholder instead of a broken image — so you can deploy now and add photos
as they come in.

## Expected filenames

**Logos** (optional — the header/footer use an inline SVG logo by default):
- `ultradoors-logo-1.jpg`
- `ultradoors-ud-logo-original.png`

**Service thumbnails**
- `windows-doors-thumb.jpg`, `gates.jpg`, `commercial-thumb.jpg`, `security-gates-thumb.jpg`

**Security gates** (9): `ultradoors-security-gates.jpg`, `ultradoors-security-gates-2.jpg` … `-9.jpg`

**Roller shutter**: `Roller-shutter-image.jpg`

**General project photos** (34): `ultradoors-2-1.jpg`, `ultradoors-3.jpg`, `ultradoors-4.jpg`,
`ultradoors-6.jpg` … see `src/data/portfolio.ts` for the full list.

**Social preview** (recommended, 1200×630): `og-default.jpg`

## Tips for Lighthouse 95+
- Export as optimised **WebP** or well-compressed **JPEG**.
- Keep each image roughly ≤ 250 KB where possible.
- The hero background reads from `ultradoors-security-gates.jpg` — use a strong,
  well-lit shot there.
