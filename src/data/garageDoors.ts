/**
 * Local landing-page content for Garage Doors, one page per town.
 *
 * The shared service copy (door types, benefits) is the same trade
 * information on every page, but each town carries genuinely unique local
 * framing, a distinct local angle and its own FAQ set, so no two pages read
 * the same. Written in plain trade language with no em dashes.
 *
 * Town name, county, districts and coverage are reused from blogTowns so the
 * local detail stays consistent with the rest of the site.
 */
import { blogTowns, type BlogTown } from './blogTowns';

export interface GarageFaq {
  q: string;
  a: string;
}

export interface GarageDoorType {
  name: string;
  text: string;
}

export interface GarageTownContent {
  slug: string;
  /** Unique hero intro (2 to 3 sentences), garage-door specific. */
  intro: string;
  /** Unique local angle paragraph. */
  angle: string;
  /** Image used on the town page and its card. */
  image: string;
  imageAlt: string;
  /** Town-specific FAQs. */
  faqs: GarageFaq[];
}

/** Shared service information shown on every garage-door page. */
export const garageDoorTypes: GarageDoorType[] = [
  {
    name: 'Insulated roller garage doors',
    text: 'Aluminium slats that roll up into a compact box above the opening, so you keep the full width and depth of the garage and gain no swing-out. A popular choice where a car is parked close to the door.',
  },
  {
    name: 'Sectional garage doors',
    text: 'Panelled doors that lift straight up and sit under the ceiling. The foam-filled panels give the best insulation of any garage door, which matters if the garage is used as a workshop, gym or utility space.',
  },
  {
    name: 'Up-and-over garage doors',
    text: 'The classic single-panel door in canopy or fully retractable form. Straightforward, hard-wearing and cost-effective for a standard single garage.',
  },
  {
    name: 'Side-hinged garage doors',
    text: 'Doors that open outward like traditional timber garage doors, handy when you use the garage for storage and want quick pedestrian access without lifting the whole door.',
  },
];

export const garageDoorBenefits: string[] = [
  'Made to measure for the exact opening',
  'Manual or fully automated with remote control',
  'Insulated options for warmer, quieter garages',
  'Roller, sectional, up-and-over and side-hinged styles',
  'Wide range of colours and finishes',
  'Fitted and serviced by our own NVQ-qualified team',
];

/** Shared explanatory paragraphs. {town} is replaced at render time. */
export const garageDoorBody: string[] = [
  'We supply, fit and repair garage doors for homes across {town} and the wider area, from a straight swap of a tired single door to a fully automated insulated door for a double garage. Every door is measured to the opening and fitted properly, so it runs smoothly, seals well and lasts.',
  'If your existing door is stiff, noisy, sagging or beyond economical repair, we can talk you through the options in plain terms and give you a clear written price after a free survey. We also service and repair existing doors, including new springs, cables, motors and remotes, so you are not pushed into a full replacement when a repair will do.',
];

const townContent: Record<string, GarageTownContent> = {
  bolton: {
    slug: 'bolton',
    intro:
      'Bolton is our home town, so garage doors are bread-and-butter work for us here. From the single garages that sit beside the semis in Harwood, Breightmet and Astley Bridge to the older detached garages in Heaton and Lostock, we replace, automate and repair doors across the borough every week.',
    angle:
      'A lot of Bolton garages still have the original up-and-over door that came with the house in the 1960s and 70s, and after decades of use the springs tire and the panel starts to catch. We often swap these for an insulated roller door, which frees up the driveway because nothing swings out, a real bonus on the tighter estate plots around Farnworth and Little Lever.',
    image: '/images/gallery/roller-shutter-white-garage.jpg',
    imageAlt: 'White insulated roller garage door fitted to a Bolton home',
    faqs: [
      {
        q: 'Can you replace an old up-and-over garage door in Bolton?',
        a: 'Yes, that is one of our most common jobs across Bolton. We remove the old door and frame, check the opening is square, and fit a new roller, sectional or up-and-over door to suit. Because we are based in the town there is no distance charge on the call-out.',
      },
      {
        q: 'How long does a garage door take to fit in Bolton?',
        a: 'Most single garage doors are fitted in a few hours, and a double or automated door usually inside a day. We agree a date after the free survey and turn up when we say we will.',
      },
      {
        q: 'Do you repair garage doors as well as replace them?',
        a: 'We do. If your Bolton garage door has a broken spring, frayed cable or a failed motor, we can often repair it the same visit rather than sell you a whole new door.',
      },
    ],
  },
  manchester: {
    slug: 'manchester',
    intro:
      'Across Manchester the garage-door work sits mainly in the suburbs, where the semis and detached homes of Didsbury, Chorlton, Withington and Northenden come with single and double garages. We fit, automate and repair doors throughout the city and its outer districts.',
    angle:
      'Plenty of Manchester homeowners now use the garage as a home office, gym or utility room rather than just for the car, so insulation and a quiet, smooth door matter more than they used to. In those cases we usually recommend an insulated sectional door, which keeps the heat in and cuts noise from the street.',
    image: '/images/gallery/garage-black-after.jpg',
    imageAlt: 'New black roller garage door fitted to a Manchester home',
    faqs: [
      {
        q: 'Do you fit insulated garage doors in Manchester?',
        a: 'Yes. If your Manchester garage doubles as a work or living space, an insulated sectional or roller door makes it noticeably warmer and quieter, and we will explain the difference in insulation levels before you choose.',
      },
      {
        q: 'Can you automate my existing garage door?',
        a: 'Often, yes. If the door itself is sound we can fit a motor and remotes to many existing doors across Manchester, which is cheaper than a full replacement. We will tell you honestly at the survey if the door is worth automating.',
      },
      {
        q: 'Do you cover the Manchester suburbs?',
        a: 'We do, including Didsbury, Chorlton, Withington, Sale-side districts and out towards the city. There is no city premium on our garage-door prices.',
      },
    ],
  },
  salford: {
    slug: 'salford',
    intro:
      'In Salford the garage-door demand comes largely from the newer estates and family suburbs, from Worsley and Boothstown to Ellenbrook, Swinton and Walkden, where integral and attached garages are common. We handle everything from a single door swap to automated doors for double garages.',
    angle:
      'Many of the newer Salford homes around Boothstown and Ellenbrook have integral garages that share a wall with the house, so an insulated door helps keep the adjoining rooms warmer. Where the garage opens onto a shared driveway or a tight close, a roller door is popular because it needs no clearance in front to open.',
    image: '/images/gallery/roller-shutters-garage-block.jpg',
    imageAlt: 'Galvanised roller garage doors on a block of garages near Salford',
    faqs: [
      {
        q: 'Do you fit garage doors on the newer Salford estates?',
        a: 'Yes, we regularly work on the estates around Worsley, Boothstown, Ellenbrook and Walkden, fitting roller and sectional doors sized to the standard integral garage openings you find there.',
      },
      {
        q: 'Which garage door is best for an integral garage?',
        a: 'For an integral garage in Salford we usually suggest an insulated door, either roller or sectional, so the rooms next to and above the garage stay warmer and quieter. We size it to your exact opening.',
      },
      {
        q: 'Is Salford a long way for you to come?',
        a: 'Not at all, Salford is a short run from our Bolton base, so surveys and fitting dates are booked quickly with no distance charge.',
      },
    ],
  },
  bury: {
    slug: 'bury',
    intro:
      'Around Bury the garage doors we fit tend to sit beside the semis and detached homes of Whitefield, Prestwich, Tottington and Ramsbottom. From a simple replacement to an automated insulated door, we cover the whole borough.',
    angle:
      'Bury climbs towards the hills at Ramsbottom and Tottington, so garages on those higher, more exposed streets take more weather than most. A well-sealed insulated door keeps out the wind and driving rain far better than a worn up-and-over, and it stops the garage feeling like a wind tunnel in winter.',
    image: '/images/Roller-shutter-image.jpg',
    imageAlt: 'Electric roller garage door fitted to a home near Bury',
    faqs: [
      {
        q: 'Do you fit garage doors in Ramsbottom and Tottington?',
        a: 'Yes, we cover the whole of Bury including the higher, more exposed streets in Ramsbottom and Tottington, where a properly sealed insulated door makes a real difference against the weather.',
      },
      {
        q: 'How much is a new garage door in Bury?',
        a: 'It depends on the size, the style and whether you want it automated, so we give a clear written price after a free survey in Bury rather than a misleading headline figure.',
      },
      {
        q: 'Can you get to Bury quickly?',
        a: 'Bury is around twenty minutes from our base, so we are there several times a week and can usually survey promptly.',
      },
    ],
  },
  wigan: {
    slug: 'wigan',
    intro:
      'In Wigan the garage-door work spreads across the larger homes and family estates of Standish, Orrell, Shevington and Ashton-in-Makerfield, as well as Leigh and Atherton. We replace, automate and repair single and double garage doors throughout the area.',
    angle:
      'The bigger detached homes around Standish and Orrell often have double garages, where a single wide sectional or two matching roller doors give a clean, modern look. Automation is popular here too, so you can open the garage from the car without getting out on a wet Wigan morning.',
    image: '/images/gallery/roller-shutter-white-garage.jpg',
    imageAlt: 'White insulated roller garage door fitted to a Wigan home',
    faqs: [
      {
        q: 'Do you fit double garage doors in Wigan?',
        a: 'Yes. For the double garages common around Standish and Orrell we can fit a single wide sectional door or a pair of matching roller doors, and automate them so they open from the car.',
      },
      {
        q: 'Do you cover Leigh and Atherton for garage doors?',
        a: 'We do. Leigh, Atherton, Hindley and the wider Wigan borough are all part of our regular patch for garage-door fitting and repairs.',
      },
      {
        q: 'Can you fit a matching door and pedestrian access?',
        a: 'Yes, where you use the garage for storage we can pair a main garage door with a side-hinged or personnel door so you get in and out without lifting the whole thing.',
      },
    ],
  },
  preston: {
    slug: 'preston',
    intro:
      'Across Preston the garage doors we fit are concentrated in the family suburbs of Fulwood, Penwortham, Broughton and Bamber Bridge, where detached and semi-detached homes often come with single or double garages. We cover replacement, automation and repair citywide.',
    angle:
      'Fulwood and Penwortham have a lot of larger detached homes with double garages, where homeowners increasingly want an insulated sectional door with a smart, panelled finish to match the property. We match the colour and style to the frontage so the door looks part of the house rather than an afterthought.',
    image: '/images/gallery/garage-black-after.jpg',
    imageAlt: 'New black roller garage door fitted to a Preston home',
    faqs: [
      {
        q: 'Do you fit garage doors in Fulwood and Penwortham?',
        a: 'Yes, these are two of the busiest areas we cover in Preston, and we fit insulated roller and sectional doors matched to the colour and style of the property.',
      },
      {
        q: 'Can I get a garage door to match my house?',
        a: 'You can. Our garage doors come in a wide range of colours and panel styles, so we help you choose one that suits your Preston home rather than a plain off-the-shelf finish.',
      },
      {
        q: 'Do you travel to Preston from Bolton?',
        a: 'Yes, Preston is a straight run up the M61 and a regular part of our Lancashire coverage, so surveys and fittings are easy to arrange.',
      },
    ],
  },
  blackburn: {
    slug: 'blackburn',
    intro:
      'In Blackburn the garage doors we fit range from the older brick garages on the established streets to the newer homes towards Wilpshire and Mellor. We replace tired doors, automate them and carry out repairs across the town and out to Darwen.',
    angle:
      'A good number of Blackburn garages are solid brick-built structures with a standard single opening, and after years of use the original steel up-and-over door rusts and stiffens. Swapping it for an insulated roller or sectional door instantly modernises the frontage and makes the door far easier to use day to day.',
    image: '/images/gallery/roller-shutters-garage-block.jpg',
    imageAlt: 'Galvanised roller garage doors on a block of garages near Blackburn',
    faqs: [
      {
        q: 'Can you replace a rusty steel garage door in Blackburn?',
        a: 'Yes, replacing old rusted up-and-over doors is a common Blackburn job. We remove the old door, check the brick opening and fit a new insulated roller or sectional door that runs smoothly and seals properly.',
      },
      {
        q: 'Do you cover Darwen for garage doors?',
        a: 'We do. Darwen, Great Harwood and the surrounding villages are all within our regular Blackburn coverage for fitting and repairs.',
      },
      {
        q: 'How do I get a price for a garage door in Blackburn?',
        a: 'We arrange a free survey, measure the opening and give you a clear written price with no obligation, so you know exactly what you are paying before any work starts.',
      },
    ],
  },
  burnley: {
    slug: 'burnley',
    intro:
      'Around Burnley the garage doors we fit sit beside the stone terraces and semis of the town and the newer homes towards Reedley, Cliviger and Padiham. We handle replacement, automation and repair right across the area.',
    angle:
      'Burnley sits high in the Pennines and its garages catch the wind and driving rain more than most, so a well-sealed insulated door earns its keep here. We steer customers on the exposed edges towards doors with good weather seals and a robust finish, because a cheap door soon lets in draughts and damp on these hillside streets.',
    image: '/images/Roller-shutter-image.jpg',
    imageAlt: 'Electric roller garage door fitted to a home near Burnley',
    faqs: [
      {
        q: 'Which garage door copes best with Burnley weather?',
        a: 'On the exposed streets around Burnley we recommend an insulated door with good weather seals, either roller or sectional, as it keeps out the wind and rain far better than an old up-and-over and stops the garage feeling damp.',
      },
      {
        q: 'Do you fit garage doors in Padiham and Nelson?',
        a: 'Yes, Padiham, Nelson and the surrounding areas are all part of our regular Burnley coverage for garage-door fitting and repairs.',
      },
      {
        q: 'Is Burnley too far for a call-out?',
        a: 'No, Burnley is a settled part of our Lancashire coverage up the M65, so we reach it comfortably for both surveys and repairs.',
      },
    ],
  },
  blackpool: {
    slug: 'blackpool',
    intro:
      'On the Fylde coast the garage doors we fit run through South Shore, Bispham, Marton and out to Cleveleys, beside the resort homes and the residential streets set back from the seafront. We fit, automate and repair doors across Blackpool.',
    angle:
      'The one thing that shapes every Blackpool job is the salt air. Cheaper garage doors and their fixings corrode fast so near the sea, so we specify aluminium roller doors and coastal-grade fittings that stand up to the exposed seaside setting far longer. It is the single biggest piece of advice we give homeowners on the coast.',
    image: '/images/gallery/roller-shutter-white-garage.jpg',
    imageAlt: 'White aluminium roller garage door fitted to a Blackpool home',
    faqs: [
      {
        q: 'What garage door lasts longest by the sea in Blackpool?',
        a: 'An aluminium roller door with coastal-grade fittings is the best bet in Blackpool, because aluminium does not rust the way cheaper steel doors do in the salt air. We specify garage doors with the coast in mind.',
      },
      {
        q: 'Do you cover Cleveleys and Bispham?',
        a: 'Yes, we cover the Fylde coast including Bispham, Cleveleys, South Shore and Marton, and we plan coastal work so you still get a fair price.',
      },
      {
        q: 'Can salt air damage a garage door motor?',
        a: 'It can, which is why on the Blackpool coast we fit and service automation suited to the conditions and advise on keeping it running reliably in the salt air.',
      },
    ],
  },
  liverpool: {
    slug: 'liverpool',
    intro:
      'Across Liverpool the garage-door work sits mainly in the leafier suburbs, from Allerton, Woolton and Mossley Hill to Aigburth and Childwall, where larger homes come with single and double garages. We fit, automate and repair doors throughout the city and out to the edges.',
    angle:
      'The bigger detached and semi-detached homes around Woolton and Mossley Hill often have wide or double garages, where a made-to-measure sectional door with a smart panelled finish suits the character of the property. Where the driveway is short, a roller door is the practical choice because nothing swings out over the parking space.',
    image: '/images/gallery/garage-black-after.jpg',
    imageAlt: 'New black roller garage door fitted to a Liverpool home',
    faqs: [
      {
        q: 'Do you fit garage doors in Woolton and Allerton?',
        a: 'Yes, the south Liverpool suburbs including Woolton, Allerton, Mossley Hill and Childwall are a busy area for us, and we fit roller and sectional doors matched to the property.',
      },
      {
        q: 'What if my driveway is short?',
        a: 'For a short Liverpool driveway a roller door is ideal, as it rolls straight up into a box above the opening and needs no clearance in front, so you keep every inch of parking space.',
      },
      {
        q: 'Do you cover the whole of Liverpool?',
        a: 'We cover Liverpool and its suburbs as part of our wider North West coverage, and we will confirm timing when you get in touch.',
      },
    ],
  },
  warrington: {
    slug: 'warrington',
    intro:
      'In Warrington the garage doors we fit are concentrated on the new-town estates, from Birchwood and Chapelford to Great Sankey, Woolston and Stockton Heath, where integral and attached garages are the norm. We cover replacement, automation and repair across the town.',
    angle:
      'A lot of Warrington homes on the newer estates around Chapelford and Great Sankey have integral garages built into the house, so an insulated door helps keep the connected rooms warmer and cuts road noise. Automation is popular on these busy estate closes, letting you open the garage from the car without stepping out into traffic.',
    image: '/images/gallery/roller-shutters-garage-block.jpg',
    imageAlt: 'Galvanised roller garage doors on a block of garages near Warrington',
    faqs: [
      {
        q: 'Do you fit garage doors on Warrington new-town estates?',
        a: 'Yes, we regularly work across Birchwood, Chapelford, Great Sankey and Woolston, fitting insulated roller and sectional doors sized to the standard integral garage openings.',
      },
      {
        q: 'Is an insulated door worth it for an integral garage?',
        a: 'For an integral Warrington garage it usually is, because the door shares a wall with the house, so an insulated door keeps the adjoining rooms warmer and quieter.',
      },
      {
        q: 'Do you cover Stockton Heath and Woolston?',
        a: 'We do, Stockton Heath, Woolston, Latchford and the wider Warrington area are all part of our coverage between the two cities.',
      },
    ],
  },
  chester: {
    slug: 'chester',
    intro:
      'Around Chester the garage doors we fit sit beside the family homes of Upton, Vicars Cross, Hoole and Handbridge, and the larger detached properties on the city edges. We replace, automate and repair single and double garage doors across the area.',
    angle:
      'Chester has more than its share of characterful and period homes, so where a garage faces the street we help choose a door style and colour that suits the property rather than clashing with it. On the larger detached homes around Upton and the greener suburbs, a matched sectional or roller door with a smart finish keeps the frontage looking right.',
    image: '/images/Roller-shutter-image.jpg',
    imageAlt: 'Electric roller garage door fitted to a home near Chester',
    faqs: [
      {
        q: 'Can you fit a garage door that suits a period Chester home?',
        a: 'Yes. Where a Chester garage faces the street we help you pick a door style, panel design and colour that complements a period or characterful frontage rather than standing out.',
      },
      {
        q: 'Do you cover Upton, Hoole and Handbridge?',
        a: 'We do, these Chester suburbs are all within our coverage, along with Vicars Cross and the greener edges of the city.',
      },
      {
        q: 'How far in advance should I book a garage door in Chester?',
        a: 'Chester sits towards the edge of our patch, so we plan work here efficiently. Get in touch and we will arrange a free survey and confirm a fitting date that suits you.',
      },
    ],
  },
};

export interface GarageTown extends BlogTown {
  garage: GarageTownContent;
}

/** Towns that have a garage-door page, joined with their local detail. */
export const garageTowns: GarageTown[] = blogTowns
  .filter((t) => townContent[t.slug])
  .map((t) => ({ ...t, garage: townContent[t.slug] }));

export function getGarageTown(slug: string): GarageTown | undefined {
  return garageTowns.find((t) => t.slug === slug);
}
