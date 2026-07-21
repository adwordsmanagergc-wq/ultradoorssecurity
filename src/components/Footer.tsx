import Link from 'next/link';
import { business, formattedAddress } from '@/config/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  const year = 2026; // Build-time constant; update annually or wire to build date.

  return (
    <footer className="mt-16 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* NAP block — appears on every page, consistent with GBP */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-700 text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
                  <path d="M9.5 12l1.8 1.8 3.4-3.6" />
                </svg>
              </span>
              <span className="text-lg font-extrabold text-white">
                {business.name}
              </span>
            </div>
            <address className="not-italic text-sm leading-relaxed text-brand-200">
              <p className="font-semibold text-white">{business.legalName}</p>
              <p>{business.address.streetAddress}</p>
              <p>
                {business.address.locality}, {business.address.region}
              </p>
              <p>{business.address.postalCode}</p>
              <p className="mt-3">
                <a
                  href={business.phone.href}
                  className="font-semibold text-white hover:text-accent-300"
                >
                  {business.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={business.phone.emergencyHref}
                  className="text-accent-300 hover:text-accent-200"
                >
                  24hr: {business.phone.emergencyDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white"
                >
                  {business.email}
                </a>
              </p>
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-300">
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-brand-200 hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-label="Areas we cover">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-300">
              Areas We Cover
            </h2>
            <ul className="space-y-2 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}/`}
                    className="text-brand-200 hover:text-white"
                  >
                    {l.town}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company + hours */}
          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-300">
              Opening Hours
            </h2>
            <ul className="space-y-1 text-sm text-brand-200">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-brand-100">
                    {h.open === 'Closed'
                      ? 'Closed'
                      : `${h.open}–${h.close}`}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 rounded-md bg-brand-900 px-3 py-2 text-xs font-medium text-accent-300">
              {business.emergencyHoursNote}
            </p>
            <nav aria-label="Company" className="mt-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <li>
                  <Link href="/about/" className="text-brand-200 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="text-brand-200 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faqs/" className="text-brand-200 hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 text-xs text-brand-400">
          <p>
            © {year} {business.legalName}. {formattedAddress()}. All rights
            reserved.
          </p>
          <p className="mt-1">
            Security doors, fire doors, roller shutters, shop front glazing and
            24-hour emergency glazing across Bolton &amp; Greater Manchester.
          </p>
        </div>
      </div>
    </footer>
  );
}
