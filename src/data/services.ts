/**
 * Services shown in the home "Services" grid.
 * `image` points at a real photo in /public/images/.
 * `category` is the matching gallery filter on the portfolio page.
 */
export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
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
    image: '/images/composit-door.jpg',
    alt: 'Grey composite security door with glazed side panels',
    category: 'Security Doors',
  },
  {
    slug: 'roller-shutters',
    title: 'Roller Shutters',
    description:
      'Manual or electric roller shutters for windows, doors and commercial premises.',
    image: '/images/Roller-shutter-image.jpg',
    alt: 'White electric roller shutter fitted to a garage',
    category: 'Roller Shutters',
  },
  {
    slug: 'industrial-doors',
    title: 'Industrial Doors',
    description:
      'Durable industrial doors built for performance, safety and reliability.',
    image: '/images/gallery/steel-doors-storage-units.jpg',
    alt: 'Steel personnel doors fitted to a green-clad industrial unit',
    category: 'Industrial Doors',
  },
  {
    slug: 'shop-fronts-glazing',
    title: 'Shop Fronts & Glazing',
    description:
      'Aluminium shop fronts, glazing and bespoke fabrication services.',
    image: '/images/windows-doors-thumb.jpg',
    alt: 'Home fitted with new white uPVC windows and French doors',
    category: 'Shop Fronts & Glazing',
  },
  {
    slug: 'security-gates',
    title: 'Security Gates',
    description: 'Bespoke security gates for homes and commercial premises.',
    image: '/images/gates.jpg',
    alt: 'Bespoke wrought iron driveway security gates',
    category: 'Security Gates',
  },
  {
    slug: 'emergency-repairs',
    title: 'Emergency Repairs',
    description:
      '24/7 emergency call out for doors, shutters and glazing, including boarding up and same-day glass replacement.',
    image: '/images/broken-glass-door.jpg',
    alt: 'Smashed glazed door awaiting emergency glass replacement',
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
