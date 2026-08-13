/**
 * PORTFOLIO / GALLERY IMAGE MANIFEST
 * ==================================
 * Drop the real photos in /public/images/ using the filenames below.
 *
 * ⚠️ CATEGORY TAGS: the general project photos have been distributed across
 * categories in a rotating pattern because the true subject of each shot
 * isn't known here. Every one is marked `// TODO: confirm category`. Since
 * YOU know what each photo actually shows, please correct the `category`
 * value to match. The filter buttons and lightbox update automatically.
 *
 * Valid categories: 'Security Doors' | 'Roller Shutters' | 'Industrial Doors'
 *                 | 'Shop Fronts' | 'Security Gates'
 * (plus the implicit 'All' filter on the page).
 */

export const CATEGORIES = [
  'All',
  'Security Doors',
  'Roller Shutters',
  'Industrial Doors',
  'Shop Fronts',
  'Security Gates',
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], 'All'>;

export interface Project {
  src: string;
  alt: string;
  category: Category;
}

export const projects: Project[] = [
  // ── Security Gates (known category — 9 images) ─────────────────────────
  { src: '/images/ultradoors-security-gates.jpg', alt: 'Bespoke security gate installed by Ultra Doors Security', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-2.jpg', alt: 'Steel security gate protecting a residential entrance', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-3.jpg', alt: 'Commercial security gate fitted to business premises', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-4.jpg', alt: 'Made-to-measure security gate in the North West', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-5.jpg', alt: 'Powder-coated security gate by Ultra Doors Security', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-6.jpg', alt: 'Double security gate installation for a driveway', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-7.jpg', alt: 'Bespoke metal security gate with secure locking', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-8.jpg', alt: 'Security gate fitted to a commercial yard entrance', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-9.jpg', alt: 'Heavy-duty security gate installed by Ultra Doors Security', category: 'Security Gates' },

  // ── Roller Shutters (known + subset) ───────────────────────────────────
  { src: '/images/Roller-shutter-image.jpg', alt: 'Electric roller shutter fitted to a commercial unit', category: 'Roller Shutters' },

  // ── General project photos (34) — categories rotated, confirm each ─────
  { src: '/images/ultradoors-2-1.jpg', alt: 'Completed security door installation by Ultra Doors Security', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-3.jpg', alt: 'Roller shutter installation on commercial premises', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-4.jpg', alt: 'Industrial door fitted to a warehouse unit', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-6.jpg', alt: 'Aluminium shop front and glazing project', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-7.jpg', alt: 'Bespoke security door protecting a home', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-8.jpg', alt: 'Manual roller shutter for a shop window', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-9.jpg', alt: 'Durable industrial door for a commercial building', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-10.jpg', alt: 'Shop front fabrication and glazing installation', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-11.jpg', alt: 'High-security door installed by the Ultra Doors team', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-12.jpg', alt: 'Electric roller shutter on a retail frontage', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-13-1.jpg', alt: 'Industrial door built for performance and safety', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-14.jpg', alt: 'Aluminium glazing and shop front by Ultra Doors Security', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-15.jpg', alt: 'Bespoke security door with multi-point locking', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-16.jpg', alt: 'Roller shutter fitted to a commercial doorway', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-17.jpg', alt: 'Industrial door installation for an industrial unit', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-19-1.jpg', alt: 'Shop front glazing solution for a business', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-20.jpg', alt: 'Security door installed to protect a property', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-21.jpg', alt: 'Commercial roller shutter installation', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-22.jpg', alt: 'Reliable industrial door for a warehouse entrance', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-23.jpg', alt: 'Bespoke aluminium shop front installation', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-24.jpg', alt: 'Steel security door fitted by Ultra Doors Security', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-25.jpg', alt: 'Roller shutter protecting a shop front overnight', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-27.jpg', alt: 'Industrial door for a commercial loading bay', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-28.jpg', alt: 'Shop front and glazing fabrication project', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-29.jpg', alt: 'High-security door for domestic property', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-32.jpg', alt: 'Electric roller shutter installed on a unit', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-33.jpg', alt: 'Industrial door built to last for a business', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-34.jpg', alt: 'Aluminium shop front by the Ultra Doors team', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-36.jpg', alt: 'Bespoke security door installation in the North West', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-37-2.jpg', alt: 'Roller shutter for a commercial premises', category: 'Roller Shutters' }, // TODO: confirm category
  { src: '/images/ultradoors-38.jpg', alt: 'Industrial door fitted to a factory entrance', category: 'Industrial Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-39.jpg', alt: 'Shop front glazing installation for a retailer', category: 'Shop Fronts' }, // TODO: confirm category
  { src: '/images/ultradoors-40-1.jpg', alt: 'Security door protecting a family home', category: 'Security Doors' }, // TODO: confirm category
  { src: '/images/ultradoors-41.jpg', alt: 'Roller shutter installation by Ultra Doors Security', category: 'Roller Shutters' }, // TODO: confirm category
];

/** Logo / brand assets in /public/images/ */
export const brand = {
  // Header/footer wordmark
  logo: '/images/ultradoors-logo-1.jpg',
  // Icon / favicon source
  icon: '/images/ultradoors-ud-logo-original.png',
};
