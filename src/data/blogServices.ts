/**
 * Service content used to build the local blog posts (one per service, per
 * town). The `{town}` and `{county}` tokens are replaced at build time.
 *
 * Note: written deliberately in plain trade language, with no em dashes.
 */

export interface BlogServiceFaq {
  q: string;
  a: string;
}

export interface BlogService {
  slug: string;
  name: string;
  /** Short keyword label used in titles, e.g. "Security Doors". */
  keyword: string;
  /** One-line summary for the blog index and cards. */
  summary: string;
  /** Opening framing sentence for the post intro (before the town hook). */
  lead: string;
  /** Main explanatory paragraphs. May contain {town}. */
  body: string[];
  /** Bulleted benefits. */
  benefits: string[];
  /** Service-level FAQs (town injected). */
  faqs: BlogServiceFaq[];
  emergency?: boolean;
}

export const blogServices: BlogService[] = [
  {
    slug: 'security-doors',
    name: 'Security Doors',
    keyword: 'Security Doors',
    summary:
      'Steel and composite security doors that protect homes and businesses without looking like a fortress.',
    lead: 'A security door is only as strong as the way it is measured, built and fitted.',
    body: [
      'We design, make and fit bespoke security doors for homes and businesses across {town} and the wider {county} area. Every door is built to the opening rather than forced to fit, so the frame, hinges, locking points and the door leaf all work together as one secure unit.',
      'For homeowners in {town} that usually means a steel-reinforced or composite door that looks the part on the street but resists the common ways a door gets forced, such as lock snapping and kicking. For shops, offices and units it often means a heavier steel door set with hardened locking, and, where needed, panic hardware so the door stays compliant as a fire exit.',
    ],
    benefits: [
      'Made to measure for the exact opening',
      'Anti-snap, anti-bump and anti-pick locking',
      'Steel and composite options for homes and commercial premises',
      'Reinforced frames fixed properly into the structure',
      'Colour and finish choices to suit the property',
      'Fitted by our own experienced, NVQ-qualified team',
    ],
    faqs: [
      {
        q: 'How much does a security door cost in {town}?',
        a: 'It depends on the size, the material and the level of security you need, so we price each job after a free survey in {town} rather than quoting a misleading headline figure. You get a clear written price before any work starts.',
      },
      {
        q: 'Will a security door still look good on my {town} home?',
        a: 'Yes. Our composite and steel doors come in a wide range of colours and finishes, so you get a door that suits the street and the property while giving you far better protection than a standard door.',
      },
      {
        q: 'Do you fit security doors for commercial premises in {town}?',
        a: 'We fit security doors for shops, offices, industrial units and communal buildings across {town}, including heavy steel door sets, and we can add closers, panic hardware or access control where the door is also a fire escape.',
      },
    ],
  },
  {
    slug: 'roller-shutters',
    name: 'Roller Shutters',
    keyword: 'Roller Shutters',
    summary:
      'Manual and electric roller shutters for shops, windows and commercial units, supplied, fitted and repaired.',
    lead: 'A roller shutter has to shrug off daily use and still go up first thing every morning.',
    body: [
      'We supply, fit, service and repair manual and electric roller shutters throughout {town} and across {county}. Shutters take a lot of wear, so we fit robust, well known components and back them with a quick repair service for when something does go wrong.',
      'Shop keepers and unit holders in {town} use shutters to protect glazing and stock overnight, deter smash-and-grab, and cut down on vandalism. We match the shutter and motor to the size of the opening and how often it will be used, and we fit safety edges and photocells on electric shutters so they are safe as well as secure.',
    ],
    benefits: [
      'Insulated and non-insulated steel shutters',
      'Manual, electric and remote-controlled operation',
      'Security grilles and perforated shutters that keep displays visible',
      'Safety edges and photocells on powered shutters',
      'Planned servicing to prevent breakdowns',
      'Fast repair of springs, motors, barrels and damaged curtains',
    ],
    faqs: [
      {
        q: 'Can you repair a roller shutter that has stopped working in {town}?',
        a: 'Yes. A stuck shutter can shut a business down, so we cover roller shutter repairs across {town} for snapped springs, failed motors, worn barrels and curtains knocked out of their guides, usually putting it right in one visit.',
      },
      {
        q: 'Do you fit electric roller shutters to shops in {town}?',
        a: 'We fit both manual and electric shutters to shops and units in {town}, with remote, key switch or keypad control, and safety features built in as standard.',
      },
      {
        q: 'Can I still see my shop display with a shutter fitted?',
        a: 'Yes. In {town} we often fit perforated or punched shutters and brick-bond grilles that keep your window display visible and lit at night while still protecting the glass.',
      },
    ],
  },
  {
    slug: 'industrial-doors',
    name: 'Industrial Doors',
    keyword: 'Industrial Doors',
    summary:
      'Sectional overhead doors, roller shutters and loading-bay doors built for busy commercial sites.',
    lead: 'On a working site a door that jams is not an inconvenience, it stops the job.',
    body: [
      'We install and maintain industrial doors on units, warehouses and yards across {town} and the {county} area, from sectional overhead doors on loading bays to heavy roller shutters and fire-rated doors where compartmentation matters.',
      'Businesses on the industrial estates around {town} rely on these doors many times a day, so we size and specify each one to the opening, the wind loading and the duty cycle. We also offer planned maintenance and a breakdown service, because prevention is far cheaper than a door failing mid-shift.',
    ],
    benefits: [
      'Sectional overhead doors for loading bays and warehouses',
      'Insulated and non-insulated steel roller shutters',
      'Fire-rated doors where compartmentation is required',
      'Safety edges, photocells and manual overrides fitted as standard',
      'Planned maintenance to keep sites running',
      '24-hour breakdown repair for doors knocked off their guides',
    ],
    faqs: [
      {
        q: 'Do you service industrial doors on units in {town}?',
        a: 'Yes. We offer planned servicing and reactive repairs for industrial and sectional doors across {town}, which keeps busy units trading and heads off the breakdowns that stop work.',
      },
      {
        q: 'How quickly can you attend an industrial door breakdown in {town}?',
        a: 'We aim to get to breakdowns in {town} quickly, because a stuck loading-bay door can halt a whole operation. Call us and we will give you a realistic time before we set off.',
      },
      {
        q: 'Can you fit a sectional overhead door to our {town} warehouse?',
        a: 'We supply and fit insulated sectional overhead doors sized to your opening in {town}, which make the most of headroom on loading bays and help keep heat inside busy units.',
      },
    ],
  },
  {
    slug: 'shop-fronts-glazing',
    name: 'Shop Fronts & Glazing',
    keyword: 'Shop Fronts & Glazing',
    summary:
      'Aluminium shop fronts, toughened glazing, windows and bespoke fabrication for retail and commercial premises.',
    lead: 'A shop front is your first impression and your first line of defence at the same time.',
    body: [
      'We design, supply and fit aluminium shop fronts, toughened and laminated glazing, automatic doors and replacement windows across {town} and {county}. Whether you are fitting out a new unit or replacing a tired, draughty frontage, we combine a clean modern look with safety glass and secure locking.',
      'On the high streets and parades around {town} we handle new frontages, single glass unit replacements, failed door gear and lock upgrades. All shop front glazing, doors and low-level glass is fitted in toughened or laminated safety glass to the relevant British Standards, so it is stronger and, if it does break, breaks safely.',
    ],
    benefits: [
      'Aluminium shop fronts in any RAL colour',
      'Toughened and laminated safety glass',
      'Automatic sliding and swing entrance doors',
      'Replacement windows and glazed units',
      'Integrated shutters and grilles where needed',
      'Full frontages or single glass unit repairs',
    ],
    faqs: [
      {
        q: 'Can you replace a cracked shop window in {town}?',
        a: 'Yes. We replace single toughened or laminated units as well as whole frontages in {town}, so a cracked pane does not always mean a full new shop front.',
      },
      {
        q: 'Do you fit aluminium shop fronts for new units in {town}?',
        a: 'We handle the whole frontage for new and refitted units in {town}, from survey and design through to manufacture and installation, with low-threshold and automatic door options for easy access.',
      },
      {
        q: 'Is your glazing safety glass?',
        a: 'Yes. Shop fronts, doors and low-level glazing in {town} are fitted with toughened or laminated safety glass to the relevant standards, which is far stronger than ordinary glass and safer if broken.',
      },
    ],
  },
  {
    slug: 'security-gates',
    name: 'Security Gates',
    keyword: 'Security Gates',
    summary:
      'Bespoke security gates for driveways, yards and commercial entrances, made to measure and built to last.',
    lead: 'A good gate stops the wrong people getting in while making it easy for the right ones.',
    body: [
      'We design, make and fit bespoke security gates for homes and businesses across {town} and {county}, from wrought-iron driveway gates to heavy steel gates for commercial yards and compounds.',
      'For homes around {town} that often means a set of made-to-measure driveway gates that lift the look of the property as well as its security, with the option of automation so you never have to get out of the car. For businesses it means robust gates and, where needed, palisade and fencing to secure the whole perimeter of a yard or site.',
    ],
    benefits: [
      'Made-to-measure wrought-iron and steel gates',
      'Manual or fully automated operation',
      'Driveway, pedestrian and double gates',
      'Heavy-duty gates for commercial yards and compounds',
      'Matching railings, fencing and palisade',
      'Secure locking and access control options',
    ],
    faqs: [
      {
        q: 'Can you automate driveway gates in {town}?',
        a: 'Yes. We fit automated gates across {town} with remote, keypad or intercom control, so you can open and close the gates without leaving the car.',
      },
      {
        q: 'Do you make security gates to measure in {town}?',
        a: 'Every gate we fit in {town} is made to measure for the opening, so it hangs and closes properly and suits the style of the property or premises.',
      },
      {
        q: 'Can you secure a commercial yard in {town}?',
        a: 'We fit heavy-duty gates, palisade and fencing to secure yards, compounds and site entrances across {town}, protecting vehicles, plant and stock.',
      },
    ],
  },
  {
    slug: 'emergency-repairs',
    name: 'Emergency Repairs',
    keyword: 'Emergency Repairs',
    summary:
      '24/7 emergency call out for doors, shutters and glazing, including boarding up and same-day glass replacement.',
    lead: 'When a property is left open after a break-in or breakage, every hour counts.',
    body: [
      'Our emergency team covers {town} and the {county} area 24 hours a day, 7 days a week. We make the property safe first, boarding up or fitting a temporary secure panel, then arrange the permanent repair to follow.',
      'We are called out across {town} after break-ins, attempted break-ins, vandalism, accidental breakages and storm damage. Where we can re-glaze or refit a door on the spot we will, and where we cannot we secure the opening the same visit so you are not left exposed.',
    ],
    benefits: [
      '24/7 response, 365 days a year',
      'Boarding up for windows, doors and shop fronts',
      'Same-day glass replacement where possible',
      'Temporary secure panels and lock changes after a break-in',
      'Doors, shutters and glazing all covered by one team',
      'Follow-up permanent repairs arranged to suit you',
    ],
    faqs: [
      {
        q: 'Do you board up properties in {town} out of hours?',
        a: 'Yes. Our boarding-up and emergency glazing service runs around the clock in {town}, including nights, weekends and bank holidays, so we can make your property safe whenever it happens.',
      },
      {
        q: 'How fast can you reach an emergency in {town}?',
        a: 'We aim to reach emergencies in {town} as quickly as we safely can and will tell you a realistic time when you call, so you know when help is on the way.',
      },
      {
        q: 'Can you replace the glass after boarding up in {town}?',
        a: 'Yes. Once your {town} property is made safe we book in the permanent repair, whether that is new toughened glazing, a replacement door or upgraded locks, at a time that suits you.',
      },
    ],
  },
];

export function getBlogService(slug: string): BlogService | undefined {
  return blogServices.find((s) => s.slug === slug);
}
