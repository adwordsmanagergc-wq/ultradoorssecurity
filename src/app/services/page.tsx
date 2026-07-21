import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import CtaBand from '@/components/CtaBand';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/config/business';

export const metadata: Metadata = buildMetadata({
  title: `Our Services | ${business.name}`,
  description:
    'Security doors, fire doors, industrial roller shutters, shop front glazing, garage doors & 24hr emergency glazing across Bolton & Greater Manchester.',
  path: '/services/',
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
        ]}
      />
      <PageHero
        eyebrow="What we do"
        title="Door, shutter & glazing services across Greater Manchester"
        intro="From security and fire doors to industrial shutters, shop fronts and 24-hour emergency glazing — one qualified local team handles it all, for homes and businesses alike."
      />

      <section className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-content px-4 py-14">
          <h2 className="text-2xl font-extrabold text-brand-900">
            Serving these areas
          </h2>
          <p className="mt-2 text-slate-600">
            Every service above is available across the towns we cover.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
