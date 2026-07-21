/**
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ ACTION REQUIRED BEFORE LAUNCH                                          │
 * │                                                                        │
 * │ Add your OWN completed-project photographs to /public/portfolio/ and   │
 * │ point each entry's `image` at the real file. Until you do, the gallery │
 * │ shows a clean branded placeholder tile (no broken images), but the     │
 * │ brief is explicit that the portfolio must show ACTUAL completed work.  │
 * │                                                                        │
 * │ Keep the descriptive `alt` text accurate to the photo you add — it is  │
 * │ read by screen readers and used by Google Images for SEO.              │
 * └──────────────────────────────────────────────────────────────────────┘
 */

export interface Project {
  /** Path under /public, or null to show the branded placeholder tile. */
  image: string | null;
  /** Descriptive alt text — describe what is actually in the photo. */
  alt: string;
  /** Short project title. */
  title: string;
  /** One–two sentence description of the job. */
  description: string;
  /** Town the job was in. */
  town: string;
  /** Related service slug. */
  service: string;
}

export const projects: Project[] = [
  {
    image: null,
    alt: 'Reinforced steel security door fitted to a terraced house in Bolton',
    title: 'Steel security door — Bolton',
    description:
      'Insurance-rated steel security door set fitted after an attempted break-in, with anti-snap multi-point locking and a colour-matched finish.',
    town: 'Bolton',
    service: 'security-doors',
  },
  {
    image: null,
    alt: 'Electric insulated roller shutter installed on an industrial unit loading bay',
    title: 'Industrial roller shutter — Wigan',
    description:
      'Electrically operated insulated roller shutter installed on a warehouse loading bay, with safety edge, photocells and remote control.',
    town: 'Wigan',
    service: 'industrial-roller-shutters',
  },
  {
    image: null,
    alt: 'New aluminium shop front with toughened glazing and automatic sliding door',
    title: 'Aluminium shop front — Manchester',
    description:
      'Full aluminium shop front replacement with toughened safety glazing and an automatic sliding entrance door for a city-centre retail unit.',
    town: 'Manchester',
    service: 'shop-front-glazing',
  },
  {
    image: null,
    alt: 'Certified FD30S fire door fitted as a flat entrance door in an apartment block',
    title: 'FD30S fire doors — Salford',
    description:
      'Certified FD30S flat-entrance fire doors fitted across an apartment block, with intumescent and smoke seals, self-closers and full documentation.',
    town: 'Salford',
    service: 'fire-doors',
  },
  {
    image: null,
    alt: 'Insulated sectional garage door in anthracite grey fitted to a detached home',
    title: 'Sectional garage door — Burnley',
    description:
      'Insulated sectional garage door in anthracite grey with electric operation, remote controls and a manual override, fitted to a detached home.',
    town: 'Burnley',
    service: 'garage-doors',
  },
  {
    image: null,
    alt: 'Shop front boarded up after a break-in with a temporary secure panel',
    title: 'Emergency boarding up — Bury',
    description:
      'Overnight emergency call after a break-in — shop front made safe with a secure temporary panel, followed by permanent toughened re-glazing.',
    town: 'Bury',
    service: 'emergency-glazing-boarding-up',
  },
  {
    image: null,
    alt: 'Perforated security grille fitted inside a high-street shop window',
    title: 'Security grille — Bolton',
    description:
      'Perforated punched security grille fitted internally to a high-street shop, keeping the window display visible while protecting against smash-and-grab.',
    town: 'Bolton',
    service: 'industrial-roller-shutters',
  },
  {
    image: null,
    alt: 'Reinforced composite front door in racing green with multi-point locking',
    title: 'Composite security door — Chorley',
    description:
      'Reinforced composite front door in racing green with a multi-point lock and anti-snap cylinder, improving both security and kerb appeal.',
    town: 'Chorley',
    service: 'security-doors',
  },
];
