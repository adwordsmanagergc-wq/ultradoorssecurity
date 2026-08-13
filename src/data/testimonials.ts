/**
 * Real customer testimonials — used verbatim. All 5 stars.
 * Drives the home testimonials carousel and the Review/AggregateRating
 * JSON-LD schema.
 */
export interface Testimonial {
  name: string;
  town: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jayson Winfield',
    town: 'Manchester',
    rating: 5,
    quote:
      'Very professional company and we are really pleased with the standard of work completed. Customer service and sales team are excellent.',
  },
  {
    name: 'Mark Hartley',
    town: 'Manchester',
    rating: 5,
    quote:
      'Polite and efficient fitters, kept disruption to a minimum. Very pleased with the quality of the roller shutter but also with the quality of workmanship.',
  },
  {
    name: 'Andrew Kent',
    town: 'Burnley',
    rating: 5,
    quote:
      'Excellent service - I would highly recommend to anyone for their professionalism, organisation and customer care. Great company!',
  },
  {
    name: 'Steven Jonson',
    town: 'Manchester',
    rating: 5,
    quote:
      'Great service by John at Ultra Doors. Thanks for the professionalism, was really nice meeting him. Love the shutter door too!',
  },
  {
    name: 'Sue Owen',
    town: 'Bury',
    rating: 5,
    quote:
      'The service from Ultra Doors was outstanding from start to finish — Sales Exec, customer service, Surveyor and installer. The installation of the roller shutter was excellent, the installer very efficient, polite and knowledgeable. Lovely finish and all building work was cleared away. We are very happy and I would highly recommend this company.',
  },
  {
    name: 'Danny Jones',
    town: 'Bolton',
    rating: 5,
    quote:
      'It was a pleasure dealing with Ultra Doors — always pleasant, attentive and informative right through to the final installation. I found them good value for money.',
  },
  {
    name: 'Jake Smart',
    town: 'Bolton',
    rating: 5,
    quote:
      'I was so impressed with the care and attention from the workers on site. The windows and doors are really good quality and the whole fitting process was well executed, including a proper clean up and removal of the old frames and glass.',
  },
  {
    name: 'Emma Ryan',
    town: 'Bolton',
    rating: 5,
    quote:
      'Really pleased with my windows. The fitter was friendly, professional, clean and tidy. The whole process was really easy. I would definitely recommend this company.',
  },
];

/** Derived aggregate for Review schema. */
export const aggregateRating = {
  ratingValue: (
    testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
  ).toFixed(1),
  reviewCount: testimonials.length,
};
