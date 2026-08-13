/**
 * Services shown in the home "Services" grid.
 * `image` points at a file in /public/images/ (see portfolio.ts manifest).
 * `slug` is used for the anchor/id only (single-page site — no per-service
 * routes yet).
 */
export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Gallery category this service links to on the portfolio page. */
  category: string;
  /** Emergency services get the red accent + emergency phone. */
  emergency?: boolean;
}

export const services: Service[] = [
  {
    slug: 'security-doors',
    title: 'Security Doors',
    description:
      'High security doors designed to protect your home or business with style.',
    image: '/images/windows-doors-thumb.jpg',
    alt: 'Bespoke steel security door installed by Ultra Doors Security',
    category: 'Security Doors',
  },
  {
    slug: 'roller-shutters',
    title: 'Roller Shutters',
    description:
      'Manual or electric roller shutters for windows, doors and commercial premises.',
    image: '/images/gates.jpg',
    alt: 'Commercial roller shutter fitted to a shop front',
    category: 'Roller Shutters',
  },
  {
    slug: 'industrial-doors',
    title: 'Industrial Doors',
    description:
      'Durable industrial doors built for performance, safety and reliability.',
    image: '/images/commercial-thumb.jpg',
    alt: 'Industrial door installed on a commercial unit',
    category: 'Industrial Doors',
  },
  {
    slug: 'shop-fronts-glazing',
    title: 'Shop Fronts & Glazing',
    description:
      'Aluminium shop fronts, glazing and bespoke fabrication services.',
    image: '/images/windows-doors-thumb.jpg',
    alt: 'Aluminium shop front and glazing by Ultra Doors Security',
    category: 'Shop Fronts',
  },
  {
    slug: 'security-gates',
    title: 'Security Gates',
    description: 'Bespoke security gates for homes and commercial premises.',
    image: '/images/security-gates-thumb.jpg',
    alt: 'Bespoke security gate fitted to a property entrance',
    category: 'Security Gates',
  },
  {
    slug: 'emergency-repairs',
    title: 'Emergency Repairs',
    description:
      '24/7 emergency call out for doors, shutters and glazing — including boarding up and same-day glass replacement.',
    image: '/images/security-gates-thumb.jpg',
    alt: 'Ultra Doors Security 24/7 emergency repair and boarding up service',
    category: 'All',
    emergency: true,
  },
];

/** Options for the quote/enquiry "Service required" dropdown. */
export const serviceOptions = [
  'Security Doors',
  'Roller Shutters',
  'Industrial Doors',
  'Shop Fronts & Glazing',
  'Security Gates',
  'Emergency Repair',
];
