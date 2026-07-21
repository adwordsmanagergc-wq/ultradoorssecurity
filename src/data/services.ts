/**
 * Service catalogue. Each entry drives:
 *   - the /services/[slug]/ page (H1, copy, feature list, FAQs shown)
 *   - the services hub cards
 *   - internal links to/from location pages
 *
 * Copy is written to be genuinely accurate to the UK door/shutter trade —
 * there is no filler or Lorem Ipsum here.
 */

export interface ServiceSection {
  heading: string;
  body: string[];
}

export interface Service {
  slug: string;
  /** Short label for nav and cards. */
  name: string;
  /** <title> — kept under 60 characters. */
  metaTitle: string;
  /** meta description — kept under 155 characters. */
  metaDescription: string;
  /** Single <h1>. */
  h1: string;
  /** One-line summary used on cards and the hub page. */
  summary: string;
  /** Lead paragraph on the service page. */
  intro: string[];
  /** Bulleted selling points. */
  features: string[];
  /** Longer explanatory sections. */
  sections: ServiceSection[];
  /** Icon key (maps to an inline SVG in components/ServiceIcon). */
  icon: string;
  /** Whether this is an emergency/24hr service (affects CTA wording). */
  emergency?: boolean;
}

export const services: Service[] = [
  {
    slug: 'security-doors',
    name: 'Security Doors',
    metaTitle: 'Security Door Installation Bolton | Ultra Doors Security',
    metaDescription:
      'Steel security doors and reinforced entrance doors fitted across Bolton & Greater Manchester. PAS 24 rated, insurance approved. Free survey and quote.',
    h1: 'Security Door Installation in Bolton & Greater Manchester',
    summary:
      'Steel and reinforced security doors for homes, flats and commercial premises — insurance-rated and built to last.',
    intro: [
      'A door is only as strong as its weakest point, which is why our security doors are engineered as a complete system — frame, leaf, hinges, locks and anchoring all working together. We supply and fit certified security doors for private homes, apartment blocks, offices, warehouses and retail units throughout Bolton and Greater Manchester.',
      'Every installation starts with a free on-site survey so we can recommend the right level of protection for the property, whether that is a discreet reinforced composite door for a family home or a heavy-gauge steel door set for a high-risk commercial entrance.',
    ],
    features: [
      'PAS 24 and Secured by Design rated door sets available',
      'Multi-point locking with anti-snap, anti-bump, anti-pick cylinders',
      'Reinforced steel frames anchored into the structural opening',
      'Composite, steel and aluminium options to suit any property',
      'Insurance-approved specifications for reduced premiums',
      'Colour-matched finishes and glazed panels on request',
    ],
    sections: [
      {
        heading: 'Domestic security doors',
        body: [
          'For homeowners we most often fit reinforced composite and multi-point-locked doors that look like any other quality front door but perform to a far higher standard. They resist the common break-in methods — lock snapping, kick-ins and forced entry — while keeping the warm, welcoming look you want on the front of a house.',
          'Where a property has been targeted before, or backs onto an alley or communal area, we can step up to a certified steel-reinforced door set for genuine peace of mind.',
        ],
      },
      {
        heading: 'Commercial and communal security doors',
        body: [
          'Offices, storage units, plant rooms, riser cupboards and communal entrances all have different requirements. We fit heavy-duty steel door sets with hardened locking, closers and, where needed, panic hardware or access control integration so the door is both secure and compliant with fire-escape rules.',
          'We can also upgrade existing doors — adding London bars, hinge bolts, sash jammers and anti-snap cylinders — when a full replacement is not required.',
        ],
      },
    ],
    icon: 'shield',
  },
  {
    slug: 'fire-doors',
    name: 'Fire Doors',
    metaTitle: 'Fire Door Installation & Inspection Bolton | Ultra Doors',
    metaDescription:
      'Certified FD30 & FD60 fire door supply, installation and inspection across Bolton & Greater Manchester. Fully compliant, third-party certified fitters.',
    h1: 'Fire Door Supply, Installation & Inspection in Bolton',
    summary:
      'FD30 and FD60 certified fire doors, supplied, fitted and inspected to keep your building compliant.',
    intro: [
      'Fire doors save lives, but only when the door, frame, intumescent seals, hinges, closer and glazing are all correctly specified and installed as a certified set. We supply, install and inspect FD30 (30-minute) and FD60 (60-minute) fire doors for landlords, managing agents, schools, care homes, HMOs and commercial premises across Greater Manchester.',
      'Getting fire doors wrong is a serious liability. Our fitters install to the manufacturer’s certified specification and provide the documentation you need to demonstrate compliance under the Regulatory Reform (Fire Safety) Order and the Fire Safety (England) Regulations 2022.',
    ],
    features: [
      'FD30 and FD60 certified door sets supplied and fitted',
      'Correct intumescent and cold-smoke seals for every door',
      'Compliant with the Fire Safety (England) Regulations 2022',
      'Fire door inspections and remedial repair work',
      'Certified ironmongery, closers and vision panels',
      'Documentation and labelling for your fire safety records',
    ],
    sections: [
      {
        heading: 'Installation done to the certified spec',
        body: [
          'A fire door only performs to its rating if the gaps, seals and hardware match the tested configuration. We fit to the correct 3–4mm perimeter gaps, install the right intumescent strips and smoke seals, and use CE/UKCA-marked hinges and closers so the whole assembly holds its rating.',
          'For flat entrance doors and communal doors in blocks, we can supply certified composite or timber FD30S sets with the smoke seals and self-closers that current regulations require.',
        ],
      },
      {
        heading: 'Fire door inspections',
        body: [
          'Responsible persons must now carry out regular fire door checks in many buildings. We provide practical inspections that flag failing seals, damaged leaves, excessive gaps, missing closers and non-compliant modifications — with a clear report and a quote for any remedial work needed to bring doors back into compliance.',
        ],
      },
    ],
    icon: 'flame',
  },
  {
    slug: 'industrial-roller-shutters',
    name: 'Industrial Roller Shutters',
    metaTitle: 'Roller Shutters & Sectional Doors Bolton | Ultra Doors',
    metaDescription:
      'Industrial roller shutters, sectional overhead doors & security grilles supplied, fitted, serviced & repaired across Bolton and Greater Manchester.',
    h1: 'Industrial Roller Shutters & Sectional Doors in Bolton',
    summary:
      'Electric roller shutters, sectional overhead doors and security grilles for warehouses, units and shopfronts.',
    intro: [
      'From a single lock-up garage to a full loading bay, we supply, install, service and repair industrial roller shutters and sectional overhead doors across Greater Manchester. These doors take heavy daily use, so we fit robust, well-known components and back them with a responsive repair and maintenance service.',
      'We work with warehouses, industrial units, distribution centres, car showrooms, retail units and trade counters — matching the door type and motor rating to the size of the opening and how often it will be used.',
    ],
    features: [
      'Insulated and non-insulated steel roller shutters',
      'Sectional overhead doors for loading bays and warehouses',
      'Electric operation with remote, keypad and induction-loop control',
      'Security grilles and perforated shutters for retail frontages',
      'Fire-rated shutters where compartmentation is required',
      'Planned maintenance, servicing and 24-hour breakdown repair',
    ],
    sections: [
      {
        heading: 'Supply and installation',
        body: [
          'We size and specify each shutter to the opening, the wind loading and the duty cycle. Insulated lath shutters help keep heat in busy units, while sectional overhead doors make the most of headroom on loading bays. All electric doors are fitted with safety edges, photocells and manual overrides so they are safe and compliant.',
        ],
      },
      {
        heading: 'Service, maintenance and repair',
        body: [
          'A stuck shutter can shut down a business, so we offer planned servicing to prevent failures and a fast breakdown service when something does go wrong. Common repairs include snapped springs, worn barrels, failed motors, damaged bottom rails and shutters knocked off their guides by vehicles — most of which we can put right in a single visit.',
        ],
      },
    ],
    icon: 'shutter',
    emergency: true,
  },
  {
    slug: 'shop-front-glazing',
    name: 'Shop Front Glazing',
    metaTitle: 'Shop Front Glazing & Aluminium Fronts Bolton | Ultra Doors',
    metaDescription:
      'Aluminium shop fronts, toughened glazing, automatic doors and curtain walling supplied and fitted across Bolton & Greater Manchester. Free quotes.',
    h1: 'Shop Front Glazing & Aluminium Fronts in Bolton',
    summary:
      'Aluminium shop fronts, toughened glazing and automatic entrance doors that make the right first impression.',
    intro: [
      'Your shop front is your business’s first impression and its first line of defence. We design, supply and install aluminium shop fronts, toughened and laminated glazing, automatic sliding doors and curtain walling for retail units, offices, salons, takeaways and showrooms across Greater Manchester.',
      'Whether you are fitting out a new unit or replacing a tired, draughty frontage, we combine a clean, modern look with toughened safety glass and secure locking to give you a frontage that looks good and stands up to daily trade.',
    ],
    features: [
      'Aluminium shop fronts in any RAL colour and finish',
      'Toughened and laminated safety glass to BS EN 12150 / 14449',
      'Automatic sliding and swing entrance doors',
      'Manifestation, signage-ready and low-threshold access options',
      'Integrated roller shutters and security grilles',
      'Full replacement or single glass unit repair',
    ],
    sections: [
      {
        heading: 'New shop fronts and fit-outs',
        body: [
          'We handle the whole frontage — survey, design, manufacture and installation — so the framing, glazing, doors and any shutters are coordinated as one clean system. Low-threshold and automatic door options keep the entrance accessible and DDA-friendly for all your customers.',
        ],
      },
      {
        heading: 'Repairs and upgrades',
        body: [
          'A cracked pane or failed door closer doesn’t always mean a whole new front. We replace individual toughened units, repair and adjust doors, swap out failed door gear and upgrade locking so your existing frontage is safe, secure and weather-tight again.',
        ],
      },
    ],
    icon: 'storefront',
  },
  {
    slug: 'emergency-glazing-boarding-up',
    name: 'Emergency Glazing & Boarding Up',
    metaTitle: '24hr Emergency Glazing & Boarding Up Bolton | Ultra Doors',
    metaDescription:
      '24hr emergency glazing & boarding up across Bolton & Greater Manchester. Fast response to break-ins & breakages. We make safe, then repair permanently.',
    h1: '24-Hour Emergency Glazing & Boarding Up in Bolton',
    summary:
      'Been broken into or had a window smashed? We make your property safe fast, day or night, then sort the permanent repair.',
    intro: [
      'A smashed shop window or a forced door leaves your property exposed — so our emergency glazing and boarding-up service runs 24 hours a day, 7 days a week across Bolton and Greater Manchester. We make the property safe and secure first, then arrange the permanent glass or door repair to follow.',
      'We regularly attend after break-ins, attempted break-ins, vandalism and accidental breakages for homeowners, landlords, shops and offices. Where we can re-glaze on the spot we will; where we can’t, we board up or fit a temporary secure panel the same visit.',
    ],
    features: [
      '24/7 rapid response, 365 days a year',
      'Make-safe boarding up for windows, doors and shop fronts',
      'Same-visit re-glazing where possible',
      'Temporary secure panels and lock changes after a break-in',
      'Insurance-friendly reports and photographs on request',
      'Follow-up permanent glazing and door repairs',
    ],
    sections: [
      {
        heading: 'What to do after a break-in',
        body: [
          'Call the police first and get a crime reference number for your insurer, then call us. We will attend, make the property safe, and — if you ask — photograph the damage and provide a simple report to support your insurance claim.',
        ],
      },
      {
        heading: 'Make safe now, repair properly after',
        body: [
          'Our priority on an emergency call is to get your property watertight and secure. Once the immediate risk is dealt with we’ll book in the permanent repair — new toughened glazing, a replacement door, or upgraded locks — at a time that suits you.',
        ],
      },
    ],
    icon: 'alert',
    emergency: true,
  },
  {
    slug: 'garage-doors',
    name: 'Garage Doors',
    metaTitle: 'Garage Door Installation & Repair Bolton | Ultra Doors',
    metaDescription:
      'Sectional, roller & up-and-over garage doors supplied, fitted & repaired across Bolton & Greater Manchester. Insulated, electric & secure. Free quote.',
    h1: 'Garage Door Installation & Repair in Bolton',
    summary:
      'Insulated sectional, roller and up-and-over garage doors, supplied, fitted and repaired.',
    intro: [
      'A new garage door instantly improves how a home looks, feels and performs — warmer, quieter and far more secure. We supply, fit and repair insulated roller, sectional and up-and-over garage doors for homes across Bolton and Greater Manchester, with smooth electric operation and remote control as standard on most ranges.',
      'If your existing door has jammed, come off its tracks or the springs have gone, we also carry out garage door repairs and can motorise many existing manual doors.',
    ],
    features: [
      'Insulated roller and sectional garage doors',
      'Electric operation with remote controls and manual override',
      'Wide choice of colours, finishes and woodgrain effects',
      'Secure locking and anti-lift protection',
      'Repairs: springs, cables, motors, panels and tracks',
      'Conversion of manual doors to electric operation',
    ],
    sections: [
      {
        heading: 'New garage doors',
        body: [
          'Insulated roller and sectional doors are our most popular choice — they save space inside the garage, cut down draughts and noise, and give a clean, modern finish in the colour of your choice. Electric operation with a remote and a manual override comes as standard on most models.',
        ],
      },
      {
        heading: 'Garage door repairs',
        body: [
          'Broken springs and snapped cables are the most common faults we see, and they can leave a heavy door stuck or unsafe. We repair all common garage door types, replace worn parts with quality components, and can motorise a sound manual door rather than replacing it entirely.',
        ],
      },
    ],
    icon: 'garage',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
