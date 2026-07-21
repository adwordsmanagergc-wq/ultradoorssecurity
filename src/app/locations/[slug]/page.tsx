import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import MapEmbed from '@/components/MapEmbed';
import TestimonialCard from '@/components/TestimonialCard';
import { locations, getLocation } from '@/data/locations';
import { getService } from '@/data/services';
import { testimonialsForTown } from '@/data/testimonials';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/config/business';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}/`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const townTestimonials = testimonialsForTown(location.town);
  const popular = location.popularServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Areas We Cover', path: '/locations/' },
          { name: location.town, path: `/locations/${location.slug}/` },
        ]}
      />
      <PageHero
        eyebrow={`Serving ${location.town}`}
        title={location.h1}
        intro={location.travel}
      />

      <div className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
          <article className="prose-trade">
            {location.body.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-lg' : undefined}>
                {p}
              </p>
            ))}

            <h2>Districts we cover around {location.town}</h2>
            <p>
              We regularly work across {location.town} and nearby areas
              including {location.areas.slice(0, -1).join(', ')} and{' '}
              {location.areas[location.areas.length - 1]}.
            </p>

            <h2>Services in {location.town}</h2>
            <p>
              Every one of our services is available in {location.town}. The
              most requested locally are:
            </p>
            <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
              {popular.map((s) => (
                <li key={s.slug} className="list-none">
                  <Link
                    href={`/services/${s.slug}/`}
                    className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-300 hover:shadow-md"
                  >
                    <span className="font-bold text-brand-900">{s.name}</span>
                    <span className="mt-1 text-sm text-slate-600">
                      {s.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">
                Free quotes in {location.town}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Local, NVQ-qualified fitters. Call for a free survey or 24-hour
                emergency callout.
              </p>
              <a
                href={business.phone.href}
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-brand-800 px-4 py-3 text-base font-bold text-white hover:bg-brand-900"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 011-2z" />
                </svg>
                {business.phone.display}
              </a>
              <a
                href={business.phone.emergencyHref}
                className="mt-2 block rounded-md border border-brand-200 px-4 py-2.5 text-center text-sm font-semibold text-brand-800 hover:bg-brand-50"
              >
                24hr emergency: {business.phone.emergencyDisplay}
              </a>
              <Link
                href="/contact/"
                className="mt-3 block rounded-md bg-accent-500 px-4 py-3 text-center text-base font-bold text-white hover:bg-accent-600"
              >
                Get a Free Quote
              </Link>
            </div>

            <MapEmbed
              query={`${location.town}, ${business.address.region}`}
              title={`Map of ${location.town}`}
            />
          </aside>
        </div>

        {/* Town testimonials */}
        {townTestimonials.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-extrabold text-brand-900">
              What {location.town} customers say
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {townTestimonials.map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          </section>
        )}

        {/* Nearby areas internal links */}
        <section className="mt-14 rounded-xl bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-brand-900">
            Other areas we cover
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}/`}
                    className="font-medium text-brand-700 hover:text-brand-900 hover:underline"
                  >
                    {l.town}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>

      <CtaBand
        heading={`Get a free quote in ${location.town}`}
        subheading="Local fitters, honest prices and a clear written quote — with 24-hour emergency cover when you need it."
      />
    </>
  );
}
