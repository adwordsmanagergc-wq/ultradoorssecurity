import Link from 'next/link';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import TestimonialCard from '@/components/TestimonialCard';
import CtaBand from '@/components/CtaBand';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { testimonials } from '@/data/testimonials';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/config/business';

export const metadata: Metadata = buildMetadata({
  title: `Security Doors Bolton | ${business.name}`,
  description:
    'Security doors, fire doors, roller shutters, shop fronts & 24hr emergency glazing across Bolton & Greater Manchester. NVQ-qualified fitters, free quotes.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />

      {/* Services */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-brand-900">
            Our door, shutter &amp; glazing services
          </h2>
          <p className="mt-3 text-slate-600">
            One local, qualified team for domestic and commercial work — from a
            single security door to a full shop front or a warehouse full of
            roller shutters.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services/"
            className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900"
          >
            View all services
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why us / experience band */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-900">
              A local firm you can actually trust
            </h2>
            <div className="prose-trade mt-4">
              <p>
                Ultra Doors Security has been securing homes and businesses
                across Bolton and Greater Manchester for {business.yearsTradingText}.
                We’re a genuinely local firm with NVQ-qualified fitters, not a
                national chain routing your job through a call centre.
              </p>
              <p>
                Whether you need a reinforced front door after a break-in, fire
                doors bringing up to standard for a block of flats, or a roller
                shutter servicing before it fails, you deal with the same
                experienced team from first call to finished job — with honest
                advice and a clear, written price.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about/"
                className="rounded-md bg-brand-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-800"
              >
                About Ultra Doors
              </Link>
              <Link
                href="/portfolio/"
                className="rounded-md border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-800 hover:bg-white"
              >
                See our work
              </Link>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ['Domestic & commercial', 'Homes, landlords, shops, offices & industrial units.'],
              ['Certified & compliant', 'PAS 24, Secured by Design & certified fire doors.'],
              ['Repairs & new installs', 'We fix and service, not just supply and fit.'],
              ['No pushy sales', 'A fair quote and straight answers — that’s it.'],
            ].map(([t, d]) => (
              <li
                key={t}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-brand-900">{t}</h3>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-brand-900">
            What our customers say
          </h2>
          <p className="mt-3 text-slate-600">
            Real reviews from customers across Bolton, Manchester, Bury, Burnley
            and beyond.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/testimonials/"
            className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900"
          >
            Read more testimonials
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-content px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-brand-900">
              Areas we cover
            </h2>
            <p className="mt-3 text-slate-600">
              Based in Bolton, covering Greater Manchester and the surrounding
              towns within roughly a 15-mile radius.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
