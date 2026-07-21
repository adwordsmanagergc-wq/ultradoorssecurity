/**
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ ACTION REQUIRED BEFORE LAUNCH                                          │
 * │                                                                        │
 * │ Replace the entries below with your OWN genuine, collected customer    │
 * │ reviews (e.g. copied from your Google Business Profile). The           │
 * │ testimonials page renders Review + AggregateRating structured data,    │
 * │ and Google's guidelines require that this markup reflect REAL reviews  │
 * │ actually left by customers — never invented ones. The samples here     │
 * │ are realistic placeholders to show layout only; swap them for the      │
 * │ real thing and update `aggregateRating` in src/config/business.ts to   │
 * │ match your true rating and review count.                               │
 * └──────────────────────────────────────────────────────────────────────┘
 */

export interface Testimonial {
  /** Reviewer name as you're permitted to display it. */
  name: string;
  /** Town — used to group reviews on location pages. */
  town: string;
  /** Star rating 1–5. */
  rating: number;
  /** The review text. */
  quote: string;
  /** Which service the job related to (optional, for context). */
  service?: string;
  /** ISO date of the review (optional, improves Review schema). */
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sample review — replace with a real Bolton customer',
    town: 'Bolton',
    rating: 5,
    quote:
      'Had a new steel security door fitted after a break-in. The lads turned up when they said, measured everything properly and the door is solid. Tidy job and a fair price — would recommend to anyone in Bolton.',
    service: 'security-doors',
    date: '2025-03-14',
  },
  {
    name: 'Sample review — replace with a real Manchester customer',
    town: 'Manchester',
    rating: 5,
    quote:
      'Our shop window was put through overnight. They boarded it up within a couple of hours of the call and had new toughened glass in two days later. Saved us from losing a day’s trade. Brilliant emergency service.',
    service: 'emergency-glazing-boarding-up',
    date: '2025-01-22',
  },
  {
    name: 'Sample review — replace with a real Bury customer',
    town: 'Bury',
    rating: 5,
    quote:
      'Replaced the roller shutter on our unit that had been playing up for months. Serviced the second one while they were here. Professional, knew exactly what they were doing and no mess left behind.',
    service: 'industrial-roller-shutters',
    date: '2024-11-08',
  },
  {
    name: 'Sample review — replace with a real Burnley customer',
    town: 'Burnley',
    rating: 5,
    quote:
      'New insulated garage door and it has made a real difference — much warmer and so much quieter than the old up-and-over. Great communication from quote to fitting. Very happy.',
    service: 'garage-doors',
    date: '2025-02-19',
  },
  {
    name: 'Sample review — replace with a real Bolton customer',
    town: 'Bolton',
    rating: 5,
    quote:
      'We needed the fire doors in our flats bringing up to standard for the block. They inspected them, told us honestly what needed doing and fitted certified doors with all the paperwork. Straightforward to deal with.',
    service: 'fire-doors',
    date: '2024-12-03',
  },
  {
    name: 'Sample review — replace with a real Salford customer',
    town: 'Salford',
    rating: 5,
    quote:
      'Fitted a new aluminium shop front for our unit at the Quays. Looks smart, feels secure and the automatic door works perfectly. From survey to finish they were reliable and easy to deal with.',
    service: 'shop-front-glazing',
    date: '2025-04-11',
  },
];

/** All testimonials for a given town slug's display name. */
export function testimonialsForTown(town: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.town.toLowerCase() === town.toLowerCase(),
  );
}
