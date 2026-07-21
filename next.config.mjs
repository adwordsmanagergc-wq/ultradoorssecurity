/** @type {import('next').NextConfig} */

// When building for a fully static export (e.g. hosting on plain object
// storage or GitHub Pages) run `npm run export`, which sets EXPORT=true.
// On Vercel we leave it unset so next/image optimisation stays enabled.
const isStaticExport = process.env.EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: 'export',
        images: {
          // The built-in optimiser needs a server, so disable it for
          // static export. On Vercel this branch is skipped and next/image
          // serves AVIF/WebP automatically.
          unoptimized: true,
        },
        trailingSlash: true,
      }
    : {
        images: {
          formats: ['image/avif', 'image/webp'],
        },
      }),
};

export default nextConfig;
