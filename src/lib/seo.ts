import type { Metadata } from 'next';
import { business, absoluteUrl, formattedAddress } from '@/config/business';
import { servedTowns } from '@/data/locations';
import { testimonials } from '@/data/testimonials';

/**
 * Build a page's <title>/description/canonical/OpenGraph metadata from a
 * few fields. Titles and descriptions are passed through already trimmed
 * to the length limits by the calling page.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/fire-doors/". */
  path: string;
  /** OG image path under /public (optional). */
  ogImage?: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  // A branded default OG image is shipped; swap for a raster PNG/JPG before
  // launch if you want richer link previews on Facebook/X (they don't render
  // SVG). It's referenced here so every page has a social preview.
  const ogImage = opts.ogImage ?? '/og-image.svg';
  return {
    // `absolute` stops the layout's title template appending the brand name
    // a second time — our page titles already include it and are tuned to
    // stay under 60 characters.
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: business.name,
      locale: 'en_GB',
      type: 'website',
      images: [{ url: absoluteUrl(ogImage) }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
    },
  };
}

/** Opening-hours in schema.org format, e.g. "Mo-Fr 08:00-18:00". */
function openingHoursSpecification() {
  return business.hours
    .filter((h) => h.open !== 'Closed')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    }));
}

/**
 * LocalBusiness schema — placed on every page. Lists the full NAP, opening
 * hours, geo coordinates and every town in areaServed.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.shortDescription,
    url: business.url,
    telephone: business.phone.display,
    email: business.email,
    foundingDate: String(business.foundedYear),
    priceRange: '££',
    image: absoluteUrl('/og-image.svg'),
    logo: absoluteUrl('/logo.svg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.address.latitude,
      longitude: business.address.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: servedTowns.map((town) => ({
      '@type': 'City',
      name: town,
    })),
    sameAs: Object.values(business.social).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.aggregateRating.ratingValue,
      reviewCount: business.aggregateRating.reviewCount,
    },
  };
}

/** BreadcrumbList schema for inner pages. */
export function breadcrumbSchema(
  crumbs: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Review + AggregateRating schema for the testimonials page. */
export function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${business.url}/#business`,
    name: business.name,
    image: absoluteUrl('/og-image.svg'),
    telephone: business.phone.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.aggregateRating.ratingValue,
      reviewCount: business.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { '@type': 'Person', name: t.name },
      ...(t.date ? { datePublished: t.date } : {}),
      reviewBody: t.quote,
    })),
  };
}

/** FAQPage schema for the FAQs page. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Service schema for a service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { '@id': `${business.url}/#business` },
    areaServed: servedTowns.map((town) => ({ '@type': 'City', name: town })),
  };
}

export { formattedAddress };
