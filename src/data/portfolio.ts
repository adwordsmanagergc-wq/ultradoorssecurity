/**
 * PORTFOLIO / GALLERY IMAGE MANIFEST
 * ==================================
 * Every image below is a real photo in /public/images/, categorised by its
 * actual subject. Adjust any `category` if you'd like a photo to appear under
 * a different filter — the gallery + lightbox update automatically.
 *
 * Categories: 'Security Doors' | 'Roller Shutters' | 'Industrial Doors'
 *           | 'Shop Fronts & Glazing' | 'Security Gates'
 */

export const CATEGORIES = [
  'All',
  'Security Doors',
  'Roller Shutters',
  'Industrial Doors',
  'Shop Fronts & Glazing',
  'Security Gates',
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], 'All'>;

export interface Project {
  src: string;
  alt: string;
  category: Category;
}

export const projects: Project[] = [
  // ── Security Doors ─────────────────────────────────────────────────────
  { src: '/images/composit-door.jpg', alt: 'Grey composite security door with glazed side panels', category: 'Security Doors' },
  { src: '/images/composit-door-shortcut.jpg', alt: 'Anthracite grey composite front door with side glazing', category: 'Security Doors' },
  { src: '/images/composit-door2.jpg', alt: 'Sage green composite front door fitted to a home', category: 'Security Doors' },

  // ── Roller Shutters ────────────────────────────────────────────────────
  { src: '/images/Roller-shutter-image.jpg', alt: 'White electric roller shutter fitted to a domestic garage', category: 'Roller Shutters' },
  { src: '/images/ultradoors-2-1.jpg', alt: 'Roller shutter repair cordoned off with safety barrier tape', category: 'Roller Shutters' },
  { src: '/images/ultradoors-3.jpg', alt: 'White window roller shutter partially open', category: 'Roller Shutters' },
  { src: '/images/ultradoors-4.jpg', alt: 'Row of security roller shutters seen in perspective', category: 'Roller Shutters' },
  { src: '/images/ultradoors-8.jpg', alt: 'Beige insulated roller shutter on a commercial unit', category: 'Roller Shutters' },
  { src: '/images/ultradoors-9.jpg', alt: 'White roller shutter garage door', category: 'Roller Shutters' },
  { src: '/images/ultradoors-14.jpg', alt: 'Grey insulated roller shutter door', category: 'Roller Shutters' },
  { src: '/images/ultradoors-15.jpg', alt: 'Anthracite window roller shutter on a rendered wall', category: 'Roller Shutters' },
  { src: '/images/ultradoors-17.jpg', alt: 'White roller shutter with manual override', category: 'Roller Shutters' },
  { src: '/images/ultradoors-19-1.jpg', alt: 'Grey roller shutters on a commercial frontage', category: 'Roller Shutters' },
  { src: '/images/ultradoors-20.jpg', alt: 'White window roller shutter for security and insulation', category: 'Roller Shutters' },
  { src: '/images/ultradoors-21.jpg', alt: 'Red roller shutter door on a commercial unit', category: 'Roller Shutters' },
  { src: '/images/ultradoors-22.jpg', alt: 'White insulated roller shutter on a garage', category: 'Roller Shutters' },
  { src: '/images/ultradoors-24.jpg', alt: 'Domestic window roller shutter, part lowered', category: 'Roller Shutters' },
  { src: '/images/ultradoors-25.jpg', alt: 'Grey roller shutter garage door', category: 'Roller Shutters' },
  { src: '/images/ultradoors-28.jpg', alt: 'Fitter cleaning a woodgrain-effect roller shutter', category: 'Roller Shutters' },
  { src: '/images/ultradoors-29.jpg', alt: 'Dark roller shutter protecting a shop front', category: 'Roller Shutters' },
  { src: '/images/ultradoors-32.jpg', alt: 'Brown roller shutter on a brick garage', category: 'Roller Shutters' },
  { src: '/images/ultradoors-36.jpg', alt: 'Beige roller shutter on a commercial building', category: 'Roller Shutters' },
  { src: '/images/ultradoors-37-2.jpg', alt: 'Security shutters inside a shopping centre unit', category: 'Roller Shutters' },
  { src: '/images/ultradoors-39.jpg', alt: 'Black roller shutter on a brick garage', category: 'Roller Shutters' },

  // ── Industrial Doors ───────────────────────────────────────────────────
  { src: '/images/commercial-thumb.jpg', alt: 'Dark commercial roller shutter door', category: 'Industrial Doors' },
  { src: '/images/ultradoors-6.jpg', alt: 'Red and white industrial sectional doors on a depot', category: 'Industrial Doors' },
  { src: '/images/ultradoors-7.jpg', alt: 'Industrial roller shutter door inside a warehouse', category: 'Industrial Doors' },
  { src: '/images/ultradoors-10.jpg', alt: 'Anthracite sectional overhead door on a unit', category: 'Industrial Doors' },
  { src: '/images/ultradoors-11.jpg', alt: 'Row of commercial sectional loading-bay doors', category: 'Industrial Doors' },
  { src: '/images/ultradoors-12.jpg', alt: 'Industrial loading bay doors on a distribution unit', category: 'Industrial Doors' },
  { src: '/images/ultradoors-13-1.jpg', alt: 'Industrial roller shutters protected by bollards', category: 'Industrial Doors' },
  { src: '/images/ultradoors-16.jpg', alt: 'Rows of insulated shutters in an industrial interior', category: 'Industrial Doors' },
  { src: '/images/ultradoors-23.jpg', alt: 'Blue shutter doors on self-storage units', category: 'Industrial Doors' },
  { src: '/images/ultradoors-27.jpg', alt: 'Warehouse loading bay fitted with industrial doors', category: 'Industrial Doors' },
  { src: '/images/ultradoors-34.jpg', alt: 'Anthracite double sectional garage door', category: 'Industrial Doors' },
  { src: '/images/ultradoors-38.jpg', alt: 'Fitters installing a white sectional industrial door', category: 'Industrial Doors' },
  { src: '/images/ultradoors-41.jpg', alt: 'Grey sectional garage door on a brick garage', category: 'Industrial Doors' },

  // ── Shop Fronts & Glazing (incl. windows & conservatories) ─────────────
  { src: '/images/windows-doors-thumb.jpg', alt: 'Home with new white uPVC windows and French doors', category: 'Shop Fronts & Glazing' },
  { src: '/images/back-of-house-shortcut1.jpg', alt: 'Rear of a home with new windows and a conservatory', category: 'Shop Fronts & Glazing' },
  { src: '/images/broken-glass-door.jpg', alt: 'Smashed glazed door awaiting emergency glass replacement', category: 'Shop Fronts & Glazing' },
  { src: '/images/consevetory.jpg', alt: 'Hardwood conservatory with a glazed roof', category: 'Shop Fronts & Glazing' },
  { src: '/images/consevetory2.jpg', alt: 'Timber-framed conservatory extension to a home', category: 'Shop Fronts & Glazing' },
  { src: '/images/consevetory3.jpg', alt: 'Conservatory base and brickwork under construction', category: 'Shop Fronts & Glazing' },
  { src: '/images/consevetory4.jpg', alt: 'Bright uPVC conservatory interior with a glazed roof', category: 'Shop Fronts & Glazing' },
  { src: '/images/consevetory-right-banner2.jpg', alt: 'White uPVC Victorian conservatory', category: 'Shop Fronts & Glazing' },
  { src: '/images/windows-page-image3.jpg', alt: 'Home fitted with new double-glazed windows', category: 'Shop Fronts & Glazing' },
  { src: '/images/windows-page-image3-1.jpg', alt: 'Detached home with replacement double-glazed windows', category: 'Shop Fronts & Glazing' },
  { src: '/images/windows-page-image6.jpg', alt: 'Interior view of a new uPVC window and door', category: 'Shop Fronts & Glazing' },
  { src: '/images/ultradoors-33.jpg', alt: 'New double-glazed window in a converted loft room', category: 'Shop Fronts & Glazing' },

  // ── Security Gates ─────────────────────────────────────────────────────
  { src: '/images/gates.jpg', alt: 'Bespoke wrought iron driveway gates', category: 'Security Gates' },
  { src: '/images/security-gates-thumb.jpg', alt: 'Automated sliding driveway gate between stone pillars', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates.jpg', alt: 'Security shutter over a commercial glazed frontage', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-2.jpg', alt: 'Ornate wrought iron estate gates with gold finials', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-3.jpg', alt: 'Sliding metal driveway gate on a gravel drive', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-4.jpg', alt: 'Wrought iron vehicle and pedestrian gates on brick pillars', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-5.jpg', alt: 'Black wrought iron double driveway gates outside a home', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-6.jpg', alt: 'Palisade security gate with razor-wire topped fencing', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-7.jpg', alt: 'Electric estate gates at the end of a sweeping drive', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-8.jpg', alt: 'Tall wrought iron driveway gates set within hedging', category: 'Security Gates' },
  { src: '/images/ultradoors-security-gates-9.jpg', alt: 'Automated metal gates to a residential development', category: 'Security Gates' },
];

/** Brand assets in /public/images/ */
export const brand = {
  logo: '/images/ultradoors-logo.webp',
};
