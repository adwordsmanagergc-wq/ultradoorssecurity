import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/business';

// Required so robots.txt is emitted as a static file under `output: export`.
export const dynamic = 'force-static';

/**
 * robots.txt — allow everything, disallow nothing, and point crawlers at
 * the sitemap. Rendered to /robots.txt at build time.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
