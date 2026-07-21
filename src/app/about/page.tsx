import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import TrustBadges from '@/components/TrustBadges';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/config/business';
import { servedTowns } from '@/data/locations';

export const metadata: Metadata = buildMetadata({
  title: `About Us | ${business.name}`,
  description:
    'Bolton-based, NVQ-qualified door and shutter specialists with 15+ years’ experience securing homes and businesses across Greater Manchester.',
  path: '/about/',
});

const milestones = [
  ['15+ years', 'Trading and securing properties across Greater Manchester.'],
  ['NVQ-qualified', 'Time-served, qualified fitters on every installation.'],
  ['Domestic & commercial', 'Homes, landlords, shops, offices and industrial units.'],
  ['24/7 emergency', 'Round-the-clock make-safe and boarding-up service.'],
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ]}
      />
      <PageHero
        eyebrow="About Ultra Doors Security"
        title="A Bolton door & security specialist you can rely on"
        intro="Qualified, local and genuinely experienced — securing homes and businesses across Greater Manchester for over 15 years."
      />

      <section className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
          <article className="prose-trade">
            <h2>Who we are</h2>
            <p>
              Ultra Doors Security is a Bolton-based, family-run business that
              has specialised in security doors, fire doors, industrial roller
              shutters, shop front glazing and emergency glazing for{' '}
              {business.yearsTradingText}. What began as a small local outfit
              has grown into a trusted name across Greater Manchester, but we’ve
              deliberately stayed the kind of firm where you deal with the same
              people from first call to finished job.
            </p>
            <p>
              We work for homeowners, landlords, letting agents, shopkeepers,
              office managers and industrial businesses — roughly an even split
              between domestic and commercial work. That range means whatever
              you need securing, it’s something we do week in, week out.
            </p>

            <h2>Qualified, certified and compliant</h2>
            <p>
              Our fitters are NVQ-qualified and time-served, so every
              installation is done properly — measured, fitted and finished to a
              standard that lasts. We install security doors to recognised
              standards such as PAS 24 and Secured by Design, and supply and fit
              certified FD30 and FD60 fire doors with the correct seals, hinges
              and closers to meet the Fire Safety (England) Regulations 2022.
            </p>
            <p>
              Getting fire doors and security installations wrong carries real
              risk, so we don’t cut corners. Where a job needs certification and
              documentation — for insurers, landlords or responsible persons —
              we provide it.
            </p>

            <h2>How we work</h2>
            <p>
              It’s simple: we turn up when we say we will, give honest advice
              rather than a hard sell, and quote a clear written price with no
              surprises added later. Most quotes follow a free on-site survey so
              the figure is accurate to your property. And if disaster strikes —
              a break-in, a smashed window or a shutter that’s failed — our
              24-hour emergency line means help is only a call away.
            </p>

            <h2>The area we cover</h2>
            <p>
              From our base in Bolton we cover Greater Manchester and the
              surrounding towns, including {servedTowns.slice(0, -1).join(', ')}{' '}
              and {servedTowns[servedTowns.length - 1]}, within roughly a
              15-mile radius. Because we’re genuinely local, response times are
              quick and there’s never a long-distance callout premium.
            </p>
            <p>
              <Link href="/contact/" className="font-semibold text-brand-700 hover:underline">
                Get in touch for a free quote
              </Link>{' '}
              or call us on{' '}
              <a href={business.phone.href} className="font-semibold text-brand-700 hover:underline">
                {business.phone.display}
              </a>
              .
            </p>
          </article>

          <aside>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-brand-700">
                At a glance
              </h2>
              <dl className="mt-4 space-y-4">
                {milestones.map(([t, d]) => (
                  <div key={t}>
                    <dt className="text-lg font-extrabold text-brand-900">{t}</dt>
                    <dd className="text-sm text-slate-600">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <TrustBadges />
      <CtaBand />
    </>
  );
}
