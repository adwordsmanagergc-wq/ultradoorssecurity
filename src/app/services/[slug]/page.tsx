import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import JsonLd from '@/components/JsonLd';
import { services, getService } from '@/data/services';
import { locations } from '@/data/locations';
import { buildMetadata, serviceSchema } from '@/lib/seo';
import { business } from '@/config/business';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  // Link each service to a spread of location pages (internal linking).
  const linkedLocations = locations.slice(0, 6);

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: service.name, path: `/services/${service.slug}/` },
        ]}
      />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/services/${service.slug}/`,
        })}
      />
      <PageHero eyebrow="Service" title={service.h1} />

      <div className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          {/* Main content */}
          <article className="prose-trade">
            {service.intro.map((p, i) => (
              <p key={i} className="text-lg">
                {p}
              </p>
            ))}

            <h2>Why choose Ultra Doors Security</h2>
            <ul>
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {service.sections.map((sec) => (
              <section key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}

            <h2>Available across Greater Manchester</h2>
            <p>
              We provide {service.name.toLowerCase()} throughout Bolton and the
              surrounding towns. Choose your area for local details and
              examples of our work:
            </p>
            <ul className="not-prose grid gap-2 sm:grid-cols-2">
              {locations.map((l) => (
                <li key={l.slug} className="list-none">
                  <Link
                    href={`/locations/${l.slug}/`}
                    className="font-medium text-brand-700 hover:text-brand-900 hover:underline"
                  >
                    {service.name} in {l.town} →
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">
                {service.emergency ? 'Need us urgently?' : 'Free quote'}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {service.emergency
                  ? 'Our emergency line is open 24 hours a day, 7 days a week.'
                  : 'Book a free, no-obligation on-site survey and written quote.'}
              </p>
              <a
                href={
                  service.emergency
                    ? business.phone.emergencyHref
                    : business.phone.href
                }
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
                {service.emergency
                  ? business.phone.emergencyDisplay
                  : business.phone.display}
              </a>
              <Link
                href="/contact/"
                className="mt-3 block rounded-md bg-accent-500 px-4 py-3 text-center text-base font-bold text-white hover:bg-accent-600"
              >
                Get a Free Quote
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-brand-700">
                Popular areas
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {linkedLocations.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}/`}
                      className="text-brand-700 hover:text-brand-900 hover:underline"
                    >
                      {l.town}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Related services */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-content px-4 py-14">
          <h2 className="text-2xl font-extrabold text-brand-900">
            Other services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant={service.emergency ? 'emergency' : 'default'} />
    </>
  );
}
