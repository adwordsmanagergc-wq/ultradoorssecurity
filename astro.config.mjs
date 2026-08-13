import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to your live domain — it's used for canonical URLs,
// the sitemap and Open Graph absolute URLs.
export default defineConfig({
  site: 'https://ultradoorssecurity.co.uk',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Keep utility pages out of the sitemap.
      filter: (page) =>
        !/\/(thank-you|404)\/?$/.test(page),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
