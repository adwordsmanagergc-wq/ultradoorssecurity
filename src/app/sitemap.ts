import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/business';
import { serviceSlugs } from '@/data/services';
import { locationSlugs } from '@/data/locations';

// Required so the sitemap is emitted as a static file under `output: export`.
export const dynamic = 'force-static';

/**
 * XML sitemap listing ONLY real, indexable pages — no placeholder or
 * throwaway URLs. Next.js renders this to /sitemap.xml at build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/locations/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/portfolio/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/testimonials/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faqs/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about/', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/contact/', priority: 0.8, changeFrequency: 'yearly' },
  ];

  const servicePaths = serviceSlugs.map((slug) => ({
    path: `/services/${slug}/`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const locationPaths = locationSlugs.map((slug) => ({
    path: `/locations/${slug}/`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }));

  const lastModified = new Date('2026-07-21');

  return [...staticPaths, ...servicePaths, ...locationPaths].map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
