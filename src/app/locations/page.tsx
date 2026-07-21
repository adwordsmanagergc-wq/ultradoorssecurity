import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import LocationCard from '@/components/LocationCard';
import MapEmbed from '@/components/MapEmbed';
import CtaBand from '@/components/CtaBand';
import { locations } from '@/data/locations';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/config/business';

export const metadata: Metadata = buildMetadata({
  title: `Areas We Cover | ${business.name}`,
  description:
    'Security doors, fire doors & shutters across Bolton, Manchester, Bury, Burnley, Wigan, Salford & Chorley. Choose your area for a free local quote.',
  path: '/locations/',
});

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Areas We Cover', path: '/locations/' },
        ]}
      />
      <PageHero
        eyebrow="Where we work"
        title="Areas we cover across Bolton & Greater Manchester"
        intro="Based in Bolton, we serve homes and businesses within roughly a 15-mile radius. Choose your town for local information, services and customer reviews."
      />

      <section className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {locations.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
          <div>
            <MapEmbed title="Ultra Doors Security service area centred on Bolton" />
            <p className="mt-3 text-sm text-slate-600">
              Just outside these towns? Call us on{' '}
              <a
                href={business.phone.href}
                className="font-semibold text-brand-700 hover:underline"
              >
                {business.phone.display}
              </a>{' '}
              and we’ll let you know if we can help.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
