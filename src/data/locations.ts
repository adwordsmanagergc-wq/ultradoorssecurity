/**
 * Location (town) pages. Each town has genuinely unique local content —
 * these are NOT the same paragraph reworded. Every entry names real local
 * landmarks, districts and characteristics so the page is useful to a
 * reader and defensible to Google.
 *
 * Coverage area (~15 mile radius of the Bolton workshop) — CONFIRM this
 * matches the area you actually serve before publishing.
 */

export interface Location {
  slug: string;
  town: string;
  /** <title> — under 60 characters. */
  metaTitle: string;
  /** meta description — under 155 characters. */
  metaDescription: string;
  /** Single <h1>. */
  h1: string;
  /** One-line summary for cards. */
  summary: string;
  /** Approx drive time / distance note from the Bolton base. */
  travel: string;
  /** Unique local body copy (300–500 words across paragraphs). */
  body: string[];
  /** Service slugs most requested in this area (for internal links + copy). */
  popularServices: string[];
  /** Local districts / areas covered, named on the page. */
  areas: string[];
  /** Approx map centre for the embedded map. */
  latitude: number;
  longitude: number;
}

export const locations: Location[] = [
  {
    slug: 'bolton',
    town: 'Bolton',
    metaTitle: 'Security Doors Bolton | Ultra Doors Security',
    metaDescription:
      'Security doors, fire doors, roller shutters & emergency glazing in Bolton. Local NVQ-qualified fitters, 15+ years’ experience, 24hr callout. Free quotes.',
    h1: 'Security Doors Bolton | Ultra Doors Security',
    summary:
      'Our home town — security doors, shutters, fire doors and emergency glazing right across Bolton.',
    travel: 'This is our home base — same-day attendance across Bolton is routine.',
    body: [
      'Bolton is our home town and where our workshop is based, so we know its streets, its housing stock and its businesses inside out. From the Victorian terraces of Halliwell and Daubhill to the newer estates around Lostock and Horwich, and the retail and trade units around Waters Meeting and the town centre, we install and repair doors and shutters right across the borough every week.',
      'For homeowners, the most common jobs are reinforced security doors and new insulated garage doors, along with the odd emergency call when a window or door has been forced. Bolton’s mix of older properties means front doors and frames often need proper measuring and squaring up rather than a simple swap — something we always allow for on the survey.',
      'For Bolton businesses — the trade counters, warehouses and shops around Bury Road, Manchester Road and the town centre — roller shutters, shop front glazing and fire doors make up most of our work. We service and repair industrial shutters on planned visits so a breakdown doesn’t stop trade, and we keep the town’s many independent shops secure with toughened glazing and grilles.',
      'Because we are local, response times in Bolton are fast. Most surveys are booked within a day or two, emergency make-safe calls are attended quickly at any hour, and there is never a long-distance callout charge tacked on. If you are anywhere in Bolton and need a door, shutter or window sorting, you are talking to a genuinely local firm.',
    ],
    popularServices: ['security-doors', 'garage-doors', 'industrial-roller-shutters', 'emergency-glazing-boarding-up'],
    areas: ['Halliwell', 'Horwich', 'Lostock', 'Farnworth', 'Westhoughton', 'Little Lever', 'Daubhill', 'Tonge Moor'],
    latitude: 53.5769,
    longitude: -2.4282,
  },
  {
    slug: 'manchester',
    town: 'Manchester',
    metaTitle: 'Security Doors Manchester | Ultra Doors Security',
    metaDescription:
      'Security doors, roller shutters, shop fronts & fire doors across Manchester. Commercial & domestic, 24hr emergency glazing. Experienced local fitters.',
    h1: 'Security Doors Manchester | Ultra Doors Security',
    summary:
      'Commercial shutters, shop fronts and fire doors plus domestic security doors across Manchester.',
    travel: 'Around 30–40 minutes from our Bolton base, covering the city and inner suburbs.',
    body: [
      'Manchester’s busy retail and commercial districts keep us in demand for shop front glazing, roller shutters and security grilles. From the independent shops and takeaways of Rusholme, Chorlton and Withington to the trade and industrial units around Trafford Park and Openshaw, we secure frontages, fit fire doors and re-glaze toughened units for businesses across the city.',
      'Break-ins and smashed frontages are an unfortunate reality of city-centre and high-street trade, so our 24-hour emergency glazing and boarding-up service is used regularly across Manchester. We make premises safe quickly at any hour, then return to fit permanent glazing or a replacement door once the immediate risk is dealt with.',
      'On the domestic side, Manchester’s huge stock of terraces, apartments and converted flats means plenty of demand for reinforced security doors and certified fire doors — the latter now a legal requirement for many flat entrances and communal doors in blocks. We install FD30S flat-entrance sets and communal fire doors with the smoke seals and self-closers current regulations require.',
      'Whether you run a shop that needs its shutters serviced, manage a block that needs its fire doors bringing up to standard, or want your home better protected, we cover the city and its inner suburbs from our Bolton workshop with fair, transparent pricing and no city-centre premium.',
    ],
    popularServices: ['shop-front-glazing', 'industrial-roller-shutters', 'fire-doors', 'emergency-glazing-boarding-up'],
    areas: ['City Centre', 'Salford Quays', 'Chorlton', 'Rusholme', 'Withington', 'Openshaw', 'Trafford Park'],
    latitude: 53.4808,
    longitude: -2.2426,
  },
  {
    slug: 'bury',
    town: 'Bury',
    metaTitle: 'Security Doors Bury | Ultra Doors Security',
    metaDescription:
      'Security doors, garage doors, roller shutters & fire doors in Bury. Local fitters, free surveys, insurance-rated installs, 24hr emergency glazing.',
    h1: 'Security Doors Bury | Ultra Doors Security',
    summary:
      'Security and garage doors for Bury homes, plus shutters and glazing for its shops and markets.',
    travel: 'Roughly 20 minutes from Bolton — we cover Bury several times a week.',
    body: [
      'Bury is one of our busiest neighbouring areas, just a short run from our Bolton workshop. The town’s famous market and its many independent shops mean we do a steady stream of shop front glazing, security grilles and roller shutter work, keeping traders secure and their frontages looking sharp.',
      'Across Bury’s residential areas — from Prestwich and Whitefield in the south to Ramsbottom and Tottington to the north — we fit reinforced security doors, insulated garage doors and replacement fire doors for homes and flats. The area’s mix of stone-built and newer properties means we take care to measure and fit each door to the exact opening rather than forcing a standard size.',
      'Homeowners in Bury often call us after an attempted break-in to upgrade a vulnerable front or back door — usually a reinforced door set with an anti-snap cylinder and multi-point locking, which resists the most common forced-entry methods. For landlords and managing agents we handle certified fire doors and inspections across HMOs and blocks in the borough.',
      'With Bury so close to base, our surveys are booked quickly, our prices are honest, and our emergency glazing team can reach the town fast when a window or door has been broken. It is the kind of responsive, local service that a firm based miles away simply can’t match.',
    ],
    popularServices: ['security-doors', 'shop-front-glazing', 'garage-doors', 'fire-doors'],
    areas: ['Prestwich', 'Whitefield', 'Radcliffe', 'Ramsbottom', 'Tottington', 'Unsworth'],
    latitude: 53.5933,
    longitude: -2.2966,
  },
  {
    slug: 'burnley',
    town: 'Burnley',
    metaTitle: 'Security Doors Burnley | Ultra Doors Security',
    metaDescription:
      'Security doors, fire doors, roller shutters & emergency glazing in Burnley. Domestic & commercial, insurance-rated. Experienced fitters, free quotes.',
    h1: 'Security Doors Burnley | Ultra Doors Security',
    summary:
      'Security doors, fire doors and commercial shutters across Burnley and the surrounding towns.',
    travel: 'About 30–35 minutes up the M65 — we cover Burnley and nearby Padiham and Nelson.',
    body: [
      'Burnley sits within our regular coverage area up the M65, and we look after homes and businesses across the town and its neighbours. Its strong stock of solid stone terraces and mill-era buildings means plenty of demand for well-fitted security doors and replacement fire doors that suit older, characterful openings.',
      'For Burnley’s commercial premises — the shops around the town centre and the units on the town’s business and industrial parks — we supply and repair industrial roller shutters, fit toughened shop front glazing and install certified fire doors. Our planned shutter servicing keeps busy units trading without unexpected breakdowns.',
      'Homeowners across Burnley, Padiham and Nelson call on us for reinforced security doors and insulated garage doors. Where a property has been targeted, we upgrade weak points with anti-snap cylinders, London bars and hinge bolts, or fit a full certified door set for stronger protection.',
      'When the worst happens and a window or door is smashed, our 24-hour emergency glazing and boarding-up service reaches Burnley to make the property safe, before returning to complete a permanent repair. Being used to the drive up the M65, we give Burnley customers the same fair pricing and quick, tidy service as our nearer towns.',
    ],
    popularServices: ['security-doors', 'fire-doors', 'industrial-roller-shutters', 'emergency-glazing-boarding-up'],
    areas: ['Padiham', 'Nelson', 'Brierfield', 'Reedley', 'Rosegrove'],
    latitude: 53.789,
    longitude: -2.2483,
  },
  {
    slug: 'wigan',
    town: 'Wigan',
    metaTitle: 'Security Doors Wigan | Ultra Doors Security',
    metaDescription:
      'Security doors, garage doors, roller shutters & fire doors in Wigan. Local fitters, insurance-rated installs, free surveys, 24hr emergency glazing.',
    h1: 'Security Doors Wigan | Ultra Doors Security',
    summary:
      'Domestic security and garage doors plus commercial shutters and glazing across Wigan.',
    travel: 'Around 25–30 minutes from Bolton, covering Wigan and towns like Leigh and Atherton.',
    body: [
      'Wigan is comfortably inside our coverage area to the west of Bolton, and we work across the town and the surrounding communities of Leigh, Atherton and Hindley. The borough’s large residential estates keep us busy with reinforced security doors and insulated garage doors, both popular upgrades that improve how a home looks as well as how secure it is.',
      'Wigan’s retail parks, trade counters and industrial estates — including the busy units around Martland Park and Robin Park — generate steady demand for industrial roller shutters, sectional loading-bay doors and shop front glazing. We install, service and repair all of these, with a fast breakdown service for when a shutter fails mid-trade.',
      'For landlords and property managers across the borough, we fit and inspect certified fire doors in flats, HMOs and communal blocks, providing the documentation needed to show compliance. And when a break-in or breakage leaves a property exposed, our 24-hour emergency glazing team attends to make it safe.',
      'Because Wigan is a short run from base, we keep survey and repair waiting times short and our pricing straightforward, with no long-distance callout charges. It is the responsive, local service Wigan homes and businesses expect from a firm that genuinely covers the area.',
    ],
    popularServices: ['security-doors', 'garage-doors', 'industrial-roller-shutters', 'fire-doors'],
    areas: ['Leigh', 'Atherton', 'Hindley', 'Ashton-in-Makerfield', 'Standish', 'Orrell'],
    latitude: 53.5448,
    longitude: -2.6318,
  },
  {
    slug: 'salford',
    town: 'Salford',
    metaTitle: 'Security Doors Salford | Ultra Doors Security',
    metaDescription:
      'Security doors, roller shutters, shop fronts & fire doors across Salford & the Quays. Commercial & domestic, 24hr emergency glazing. Free quotes.',
    h1: 'Security Doors Salford | Ultra Doors Security',
    summary:
      'Commercial shutters, shop fronts and fire doors plus home security doors across Salford.',
    travel: 'About 25–30 minutes from Bolton, covering Salford and the Quays.',
    body: [
      'Salford blends busy commercial and media districts with dense residential neighbourhoods, and we cover the whole city from our Bolton base. Around Salford Quays, Eccles, Swinton and Walkden we handle a good deal of commercial work — shop front glazing, roller shutters and security grilles for retail and trade premises, and certified fire doors for offices and apartment blocks.',
      'The city’s large stock of flats and apartment blocks means fire door compliance is a major part of our Salford work. We install FD30S flat-entrance door sets and communal fire doors, carry out fire door inspections, and provide the certification and labelling that responsible persons need for their records.',
      'For Salford homeowners, reinforced security doors and insulated garage doors are the most requested upgrades, particularly across the terraced streets and newer estates in Swinton, Walkden and Little Hulton. Where properties back onto alleys or communal areas, we strengthen rear and side doors that are the most common point of forced entry.',
      'Break-ins and vandalism are a fact of city life, so our 24-hour emergency glazing and boarding-up service is regularly called to Salford to make premises safe, day or night, ahead of a permanent repair. Whatever the job, Salford customers get the same fair, transparent pricing as everywhere we cover.',
    ],
    popularServices: ['fire-doors', 'shop-front-glazing', 'industrial-roller-shutters', 'security-doors'],
    areas: ['Salford Quays', 'Eccles', 'Swinton', 'Walkden', 'Worsley', 'Little Hulton', 'Pendlebury'],
    latitude: 53.4875,
    longitude: -2.2901,
  },
  {
    slug: 'chorley',
    town: 'Chorley',
    metaTitle: 'Security Doors Chorley | Ultra Doors Security',
    metaDescription:
      'Security doors, garage doors, fire doors & roller shutters in Chorley. Local fitters, free surveys, insurance-rated installs, 24hr emergency glazing.',
    h1: 'Security Doors Chorley | Ultra Doors Security',
    summary:
      'Home security and garage doors plus commercial shutters and glazing across Chorley.',
    travel: 'Around 20 minutes north of Bolton — Chorley is well within our regular patch.',
    body: [
      'Chorley sits just to the north of Bolton and is one of our nearer coverage towns, so we are there regularly. Its market town centre and the surrounding villages of Adlington, Coppull and Euxton give us a good mix of domestic and commercial work, from home security doors to shop front glazing on the high street.',
      'For Chorley homeowners, insulated garage doors and reinforced security doors are the most popular upgrades. Many of the area’s semi-detached and detached homes have integral or attached garages where a new insulated roller or sectional door makes a noticeable difference to warmth, noise and kerb appeal, as well as security.',
      'Chorley’s shops, trade units and the businesses around the town’s industrial estates keep us busy with roller shutter installation, servicing and repair, along with toughened shop front glazing and security grilles. Our planned maintenance keeps shutters reliable, and our breakdown service gets failed doors moving again quickly.',
      'Being so close to base, Chorley benefits from quick surveys, short waiting times and our 24-hour emergency glazing cover for break-ins and breakages. It is genuinely local service from a firm just down the road, not a national chain routing a job through a call centre.',
    ],
    popularServices: ['garage-doors', 'security-doors', 'industrial-roller-shutters', 'shop-front-glazing'],
    areas: ['Adlington', 'Coppull', 'Euxton', 'Clayton-le-Woods', 'Whittle-le-Woods', 'Eccleston'],
    latitude: 53.6531,
    longitude: -2.6323,
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugs = locations.map((l) => l.slug);

/** Comma list of every town served — reused in schema areaServed + copy. */
export const servedTowns = locations.map((l) => l.town);
