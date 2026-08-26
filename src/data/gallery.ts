/**
 * Home-page "Recent work" sliding gallery.
 * Real installation photos supplied by the business. Two kinds of item:
 *  - single: one finished-install photo
 *  - beforeAfter: a matched pair (old -> new) shown side by side
 * Images live in /public/images/gallery and are pre-compressed.
 */
export interface GallerySingle {
  type: 'single';
  src: string;
  alt: string;
  caption: string;
  category: string;
}
export interface GalleryBeforeAfter {
  type: 'beforeAfter';
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
  category: string;
}
export type GalleryItem = GallerySingle | GalleryBeforeAfter;

const g = (name: string) => `/images/gallery/${name}.jpg`;

export const gallery: GalleryItem[] = [
  {
    type: 'beforeAfter',
    before: g('shop-shutter-before'),
    after: g('shop-shutter-after'),
    beforeAlt: 'Old worn shop roller shutter before replacement',
    afterAlt: 'New galvanised roller shutter fitted to the shopfront',
    caption: 'Shopfront roller shutter replacement',
    category: 'Shopfronts',
  },
  {
    type: 'beforeAfter',
    before: g('garage-black-before'),
    after: g('garage-black-after'),
    beforeAlt: 'Old weathered black garage door before replacement',
    afterAlt: 'New black insulated roller shutter fitted to the garage',
    caption: 'Domestic garage roller shutter upgrade',
    category: 'Roller Shutters',
  },
  { type: 'single', src: g('roller-shutter-white-garage'), alt: 'White insulated roller shutter fitted to a domestic garage', caption: 'Domestic garage roller shutter', category: 'Roller Shutters' },
  { type: 'single', src: g('industrial-roller-shutters-double'), alt: 'Twin insulated industrial roller shutters on a commercial warehouse', caption: 'Twin industrial roller shutters', category: 'Industrial' },
  { type: 'single', src: g('security-door-green-unit'), alt: 'Green composite security personnel door on an industrial unit', caption: 'Green steel security door', category: 'Security Doors' },
  { type: 'single', src: g('roller-shutter-green-workshop'), alt: 'Green industrial roller shutter inside a steel workshop unit', caption: 'Industrial roller shutter', category: 'Roller Shutters' },
  { type: 'single', src: g('shopfront-shutters-night'), alt: 'Shopfront with security shutters and glazing installed', caption: 'Shopfront security shutters', category: 'Shopfronts' },
  { type: 'single', src: g('industrial-unit-green-cladding'), alt: 'Green steel industrial unit with roller shutter and personnel door', caption: 'Industrial unit shutter and door', category: 'Industrial' },
  { type: 'single', src: g('roller-shutters-garage-block'), alt: 'Galvanised roller shutters fitted to a block of garages', caption: 'Garage-block roller shutters', category: 'Roller Shutters' },
  { type: 'single', src: g('retail-shutter-shopping-centre'), alt: 'Retail security shutter fitted to a shopping-centre unit', caption: 'Retail unit security shutter', category: 'Shopfronts' },
  { type: 'single', src: g('security-door-green-industrial'), alt: 'Green steel security door fitted to an industrial building', caption: 'Industrial security door', category: 'Security Doors' },
  { type: 'single', src: g('industrial-roller-shutter-warehouse'), alt: 'Insulated industrial roller shutter on a steel-clad warehouse', caption: 'Warehouse roller shutter', category: 'Industrial' },
  { type: 'single', src: g('steel-doors-storage-units'), alt: 'Steel personnel doors fitted to commercial storage units', caption: 'Storage-unit steel doors', category: 'Security Doors' },
  { type: 'single', src: g('shop-counter-security-shutter'), alt: 'Security shutter protecting a convenience-store counter', caption: 'Shop counter security shutter', category: 'Shopfronts' },
  { type: 'single', src: g('roller-shutter-green-loading-bay'), alt: 'Green roller shutter fitted to a loading bay', caption: 'Loading-bay roller shutter', category: 'Roller Shutters' },
  { type: 'single', src: g('retail-shutter-store-interior'), alt: 'Galvanised retail roller shutter fitted inside a store', caption: 'In-store retail shutter', category: 'Shopfronts' },
  { type: 'single', src: g('security-grille-storeroom'), alt: 'Steel security grille and shutters fitted to a storeroom', caption: 'Storeroom security grille', category: 'Security Gates' },
  { type: 'single', src: g('roller-shutter-green-unit'), alt: 'New green roller shutter fitted to an industrial unit', caption: 'Industrial unit roller shutter', category: 'Roller Shutters' },
  { type: 'single', src: g('industrial-door-warehouse'), alt: 'Large industrial door opening on a working warehouse', caption: 'Industrial warehouse doorway', category: 'Industrial' },
  { type: 'single', src: g('roller-shutter-green-storage'), alt: 'Green roller shutter fitted to a storage unit', caption: 'Storage-unit roller shutter', category: 'Roller Shutters' },
  { type: 'single', src: g('shopfront-refurbishment'), alt: 'Shopfront and interior refurbishment in progress', caption: 'Shopfront refurbishment', category: 'Shopfronts' },
  { type: 'single', src: g('industrial-building-refurbishment'), alt: 'Large industrial building undergoing refurbishment', caption: 'Industrial building refurbishment', category: 'Industrial' },
];
