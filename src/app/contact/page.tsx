import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import { buildMetadata } from '@/lib/seo';
import { business, formattedAddress } from '@/config/business';
import { servedTowns } from '@/data/locations';

export const metadata: Metadata = buildMetadata({
  title: `Contact Us | ${business.name}`,
  description:
    'Contact Ultra Doors Security in Bolton for a free quote or 24hr emergency callout. Call, email or send an enquiry — serving Greater Manchester.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]}
      />
      <PageHero
        eyebrow="Get in touch"
        title="Contact Ultra Doors Security"
        intro="Free quotes, honest advice and 24-hour emergency callout across Bolton & Greater Manchester. Call us, email us, or send an enquiry below."
      />

      <section className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-extrabold text-brand-900">
              Send us an enquiry
            </h2>
            <p className="mt-2 text-slate-600">
              Tell us what you need and we’ll get back to you, usually the same
              working day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">Call us</h2>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-slate-500">General enquiries</dt>
                  <dd>
                    <a
                      href={business.phone.href}
                      className="text-xl font-extrabold text-brand-800 hover:text-brand-900"
                    >
                      {business.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">
                    24-hour emergency
                  </dt>
                  <dd>
                    <a
                      href={business.phone.emergencyHref}
                      className="text-xl font-extrabold text-accent-600 hover:text-accent-700"
                    >
                      {business.phone.emergencyDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${business.email}`}
                      className="font-semibold text-brand-700 hover:underline"
                    >
                      {business.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">Visit / write</h2>
              <address className="mt-3 not-italic text-sm leading-relaxed text-slate-700">
                <p className="font-semibold text-brand-900">
                  {business.legalName}
                </p>
                <p>{formattedAddress('\n').split('\n').join(', ')}</p>
              </address>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-brand-700">
                Opening hours
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {business.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="font-medium text-slate-800">
                      {h.open === 'Closed' ? 'Closed' : `${h.open}–${h.close}`}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 rounded-md bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
                {business.emergencyHoursNote}
              </p>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-brand-900">
            Where we are
          </h2>
          <p className="mt-2 text-slate-600">
            Based in Bolton, serving {servedTowns.slice(0, -1).join(', ')} and{' '}
            {servedTowns[servedTowns.length - 1]}.
          </p>
          <div className="mt-6">
            <MapEmbed title={`Map showing ${business.name} in ${business.address.locality}`} />
          </div>
        </div>
      </section>
    </>
  );
}
