/**
 * Single source of truth for business / NAP details.
 * All real, verbatim from the business owner. Keep every phone number,
 * email and address identical everywhere for local-SEO consistency.
 */
export const site = {
  name: 'Ultra Doors Security',
  tagline: 'Bespoke · Secure · Built to Last',
  what: 'Bespoke security doors & industrial door specialists, protecting homes & businesses across the North West of England.',
  url: 'https://ultradoorssecurity.co.uk',

  // Phones
  emergencyPhone: { display: '07570 335330', href: 'tel:+447570335330' },
  enquiriesPhone: { display: '01204 244403', href: 'tel:+441204244403' },

  // Single canonical email
  email: 'info@ultradoorssecurity.co.uk',

  // WhatsApp chat (same number as the 24/7 line). wa.me needs no + or spaces.
  whatsapp: {
    number: '447570335330',
    href: 'https://wa.me/447570335330?text=Hi%20Ultra%20Doors%20Security%2C%20I%27d%20like%20a%20quote',
  },

  location: {
    town: 'Bolton',
    region: 'Greater Manchester',
    areaServed: 'North West England',
    country: 'GB',
    // Approximate Bolton centre, refine to the real premises if desired.
    latitude: 53.5769,
    longitude: -2.4282,
  },

  hoursText: '24/7 emergency callout, 7 days a week',

  trustPoints: [
    "15+ years' experience",
    'NVQ-qualified fitters',
    'Bespoke made-to-measure',
    'Domestic & commercial',
    'Free surveys & quotations',
    '24/7 emergency support',
  ],

  // Social profiles, the old site had dead links; leave clean placeholders
  // and fill these in (or remove) when real profiles exist.
  social: {
    facebook: '', // TODO: add real URL or leave blank to hide
    instagram: '',
    linkedin: '',
  },
} as const;

export type Site = typeof site;
