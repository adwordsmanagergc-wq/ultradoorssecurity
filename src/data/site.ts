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

  // --- Invoicing (owner-only /admin/invoice tool) ------------------------
  // Everything here is filled onto every invoice automatically. Edit these
  // values once and they apply to all future invoices.
  invoice: {
    // Passcode to open the invoicing tool. This is a light gate only (the
    // check runs in the browser), so keep the tool URL private and change
    // this to your own code. Can also be set via PUBLIC_INVOICE_PASSCODE.
    passcode: 'ultra2009',
    // Trading name shown at the top of the invoice.
    tradingName: 'Ultra Doors Security',
    // Legal entity that appears on the bank line.
    legalName: 'ULTRADOORS NW Ltd',
    addressLines: ['Bolton', 'Greater Manchester'], // TODO: add full premises address
    phone: '01204 244403',
    emergencyPhone: '07570 335330',
    email: 'info@ultradoorssecurity.co.uk',
    website: 'ultradoorssecurity.co.uk',
    // Real bank details from the current invoice.
    bank: {
      name: 'ULTRADOORS NW Ltd',
      sortCode: '20-55-41',
      accountNumber: '00670332',
    },
    signOff: 'Kind regards',
    signatory: 'John McDonald',
    // Payment terms line shown under the total.
    terms: 'Payment due within 14 days of invoice date.',
    // VAT: owner is not VAT registered, so no VAT line by default.
    vatRegistered: false,
    vatRate: 20,
    vatNumber: '',
    // Invoice number format: PREFIX-YYYY-NNN (NNN auto-increments locally).
    numberPrefix: 'UDS',

    // Supabase backend for cloud-synced invoice records (safe to commit:
    // the URL + publishable key are public by design and the database is
    // protected by Row Level Security). Override via PUBLIC_SUPABASE_URL /
    // PUBLIC_SUPABASE_ANON_KEY / PUBLIC_INVOICE_OWNER_EMAIL if you rotate keys.
    // Leave url/anonKey blank to disable cloud sync and use on-device storage.
    supabase: {
      url: 'https://rrivtgwhjebwmvxwbwof.supabase.co',
      anonKey: 'sb_publishable_ml23dP8lWaRaS7nLG6hahw_j4Nm9WUv',
      ownerEmail: 'info@ultradoorssecurity.co.uk',
    },
  },
} as const;

export type Site = typeof site;
