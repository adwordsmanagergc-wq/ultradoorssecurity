import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyQuoteBar from '@/components/StickyQuoteBar';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/seo';
import { business } from '@/config/business';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  applicationName: business.name,
  authors: [{ name: business.name }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#1d3c66',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        {/* LocalBusiness schema on every page */}
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyQuoteBar />
      </body>
    </html>
  );
}
