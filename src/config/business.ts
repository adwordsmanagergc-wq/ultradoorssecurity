/**
 * SINGLE SOURCE OF TRUTH for all business (NAP) details.
 *
 * Everything that appears in the header, footer, contact page, JSON-LD
 * structured data and page metadata reads from this file, so the business
 * name, address and phone number stay perfectly consistent everywhere —
 * which is exactly what Google looks for when ranking a local business.
 *
 * ┌───────────────────────────────────────────────────────────────────┐
 * │ BEFORE GOING LIVE, replace the values marked  // TODO: VERIFY  with │
 * │ the exact details from your Google Business Profile. The phone      │
 * │ numbers below use Ofcom's reserved "fiction/drama" ranges           │
 * │ (01204 496xxx and 07700 900xxx) so they can never ring a real       │
 * │ person by accident — swap them for your real numbers.               │
 * └───────────────────────────────────────────────────────────────────┘
 */

export const business = {
  name: 'Ultra Doors Security',
  legalName: 'Ultra Doors Security Ltd',
  tagline: 'Security Doors, Fire Doors & Shutters in Bolton & Greater Manchester',
  shortDescription:
    'Bolton-based installers of security doors, fire doors, industrial roller shutters, shop front glazing and 24-hour emergency glazing. Over 15 years of experience serving homes and businesses across Greater Manchester.',
  foundedYear: 2009,
  yearsTradingText: 'over 15 years',

  // --- Contact -----------------------------------------------------------
  phone: {
    // Primary daytime line
    display: '01204 496 123', // TODO: VERIFY — replace with your real landline
    href: 'tel:+441204496123',
    // 24-hour emergency line
    emergencyDisplay: '07700 900 982', // TODO: VERIFY — replace with your real mobile
    emergencyHref: 'tel:+447700900982',
  },
  email: 'info@ultradoorssecurity.co.uk', // TODO: VERIFY

  // --- Address (NAP) -----------------------------------------------------
  address: {
    // TODO: VERIFY — must match your Google Business Profile exactly
    streetAddress: 'Unit 4, Waters Meeting Industrial Estate, Britannia Way',
    locality: 'Bolton',
    region: 'Greater Manchester',
    postalCode: 'BL2 2HH',
    country: 'GB',
    // Approximate coordinates for the Bolton area — refine to your unit.
    latitude: 53.5869,
    longitude: -2.4181,
  },

  // --- Hours -------------------------------------------------------------
  hours: [
    { day: 'Monday', open: '08:00', close: '18:00' },
    { day: 'Tuesday', open: '08:00', close: '18:00' },
    { day: 'Wednesday', open: '08:00', close: '18:00' },
    { day: 'Thursday', open: '08:00', close: '18:00' },
    { day: 'Friday', open: '08:00', close: '18:00' },
    { day: 'Saturday', open: '09:00', close: '16:00' },
    { day: 'Sunday', open: 'Closed', close: 'Closed' },
  ],
  emergencyHoursNote: '24-hour emergency callout, 7 days a week',

  // --- Web ---------------------------------------------------------------
  // Used to build absolute URLs for canonical tags, sitemaps and JSON-LD.
  url: 'https://www.ultradoorssecurity.co.uk', // TODO: VERIFY — your live domain

  social: {
    facebook: 'https://www.facebook.com/', // TODO: VERIFY or remove
    google: 'https://www.google.com/maps', // TODO: VERIFY — your GBP link
  },

  // --- Trust signals -----------------------------------------------------
  aggregateRating: {
    // TODO: VERIFY — set these to the figures shown on your Google profile.
    ratingValue: 4.9,
    reviewCount: 63,
  },
} as const;

export type Business = typeof business;

/** Build a fully-qualified URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  const base = business.url.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}

/** Human-readable one-line address, e.g. for the footer NAP block. */
export function formattedAddress(separator = ', '): string {
  const a = business.address;
  return [a.streetAddress, a.locality, a.region, a.postalCode].join(separator);
}
