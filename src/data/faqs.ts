/**
 * Real, specific FAQs about pricing, warranty, lead times and materials.
 * These answer the questions customers genuinely ask a door and shutter
 * firm — review them against your own terms before publishing (in
 * particular the warranty length and any figures).
 */

export interface Faq {
  question: string;
  answer: string;
  /** Optional grouping for filtering. */
  category?: 'pricing' | 'warranty' | 'lead-times' | 'materials' | 'general';
}

export const faqs: Faq[] = [
  {
    category: 'pricing',
    question: 'How much does a security door cost?',
    answer:
      'It depends on the door type, size and specification. A reinforced composite front door with multi-point locking is very different in price to a heavy-gauge steel commercial door set. Because every opening and property is different, we quote after a free on-site survey rather than giving a misleading “from” price — so the figure you get is the figure you pay, with no surprises.',
  },
  {
    category: 'pricing',
    question: 'Do you charge for a quote or survey?',
    answer:
      'No. Surveys and quotes are free and come with no obligation. We measure up, talk through your options and give you a clear written price. You only pay once you decide to go ahead.',
  },
  {
    category: 'pricing',
    question: 'Is there a call-out charge for emergencies?',
    answer:
      'For 24-hour emergency glazing and boarding-up we agree the charge with you on the phone before we set off, so you always know where you stand. There are no hidden extras added afterwards. For standard surveys and quotes during working hours there is no call-out charge at all.',
  },
  {
    category: 'warranty',
    question: 'What warranty do you offer?',
    answer:
      'Our installation workmanship is guaranteed, and the doors, shutters and glazing we fit carry the manufacturer’s product warranty on top. Warranty length varies by product — we confirm the exact cover in writing with your quote so it is clear before you commit. Keep your paperwork, as it is needed for any warranty claim.',
  },
  {
    category: 'warranty',
    question: 'Are your installations insurance approved?',
    answer:
      'We can supply and fit security doors and locks to recognised standards such as PAS 24 and Secured by Design, and fit anti-snap cylinders to TS007 / Sold Secure ratings where required. If your insurer specifies a particular standard, tell us and we will make sure the installation meets it and give you documentation to confirm the specification.',
  },
  {
    category: 'lead-times',
    question: 'How long does installation take?',
    answer:
      'Most domestic doors — a security door, front door or garage door — are fitted in a day. Shop fronts, multiple fire doors or larger roller shutters can take longer, and we’ll tell you the expected time when we quote. Emergency make-safe and boarding-up is dealt with the same visit.',
  },
  {
    category: 'lead-times',
    question: 'What are your lead times from order to fitting?',
    answer:
      'Stock and standard-size items can often be fitted within one to two weeks. Made-to-measure doors, certified fire door sets, bespoke shop fronts and larger shutters are manufactured to order, which typically takes two to four weeks depending on the product and finish. We confirm the lead time on your quote and keep you updated.',
  },
  {
    category: 'lead-times',
    question: 'Can you attend emergencies out of hours?',
    answer:
      'Yes. Our emergency glazing and boarding-up service runs 24 hours a day, 7 days a week, including weekends and bank holidays. If you have had a break-in or a window or door has been smashed, call the emergency line and we will make your property safe as quickly as we can.',
  },
  {
    category: 'materials',
    question: 'What materials do you use for security doors?',
    answer:
      'It depends on the setting. For homes we most often fit reinforced composite doors (a solid core with a tough GRP skin) or steel-reinforced door sets. For commercial and high-risk openings we use heavy-gauge galvanised steel door sets with hardened locking. We’ll recommend the right material for the level of protection you need.',
  },
  {
    category: 'materials',
    question: 'What is the difference between an FD30 and FD60 fire door?',
    answer:
      'The number is the number of minutes the door is tested to hold back fire — 30 minutes for FD30 and 60 minutes for FD60. Which you need depends on the building and its fire strategy. FD30 (and FD30S, which adds cold-smoke seals) covers most flat entrances and communal doors, while FD60 is used where longer protection is required. We can advise on the correct rating for your building.',
  },
  {
    category: 'materials',
    question: 'Are your shop fronts and glazing toughened / safety glass?',
    answer:
      'Yes. Shop fronts, doors and low-level glazing are fitted with toughened or laminated safety glass to the relevant British Standards, which is far stronger than ordinary glass and, if it does break, does so safely. Laminated glass also holds together when struck, giving added security against forced entry.',
  },
  {
    category: 'general',
    question: 'Which areas do you cover?',
    answer:
      'We are based in Bolton and cover Greater Manchester and the surrounding towns — including Manchester, Bury, Salford, Wigan, Chorley and Burnley — roughly within a 15-mile radius of Bolton. If you are just outside that area, call us anyway and we’ll let you know if we can help.',
  },
  {
    category: 'general',
    question: 'Do you work for both homeowners and businesses?',
    answer:
      'Yes. Roughly half our work is domestic — security doors, garage doors and home glazing — and half is commercial, covering roller shutters, shop fronts, fire doors and emergency glazing for shops, offices, warehouses and landlords. Whatever the property, the same experienced team handles the job.',
  },
];
