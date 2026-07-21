import Link from 'next/link';
import { business } from '@/config/business';

const points = [
  'Free on-site surveys & written quotes',
  'Insurance-rated & certified installations',
  '24-hour emergency callout, 7 days a week',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      {/* Subtle geometric backdrop, pure CSS — no image weight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(249,171,36,0.35), transparent 45%), linear-gradient(135deg, transparent 40%, rgba(15,31,54,0.9))',
        }}
      />
      <div className="relative mx-auto grid max-w-content gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-800/70 px-3 py-1 text-sm font-medium text-accent-300 ring-1 ring-brand-700">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            {business.yearsTradingText} · NVQ-qualified fitters · Bolton based
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Security Doors &amp; Shutters in Bolton &amp; Greater Manchester
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-100">
            Ultra Doors Security supplies and fits security doors, fire doors,
            industrial roller shutters, shop fronts and 24-hour emergency
            glazing for homes and businesses right across Greater Manchester.
          </p>

          <ul className="mt-6 grid gap-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-brand-50">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-accent-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12l4 4 10-10" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent-900/20 hover:bg-accent-600"
            >
              Get a Free Quote
            </Link>
            <a
              href={business.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-6 py-3.5 text-base font-bold text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
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
          </div>
        </div>

        {/* Info card */}
        <div className="rounded-xl bg-white/95 p-6 text-slate-800 shadow-2xl ring-1 ring-white/20">
          <h2 className="text-lg font-bold text-brand-900">
            Fast, local &amp; fully qualified
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            One local team for every kind of door, shutter and glazing job.
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-brand-50 p-3 text-center">
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-600">
                Experience
              </dt>
              <dd className="text-2xl font-extrabold text-brand-900">15+ yrs</dd>
            </div>
            <div className="rounded-lg bg-brand-50 p-3 text-center">
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-600">
                Emergency
              </dt>
              <dd className="text-2xl font-extrabold text-brand-900">24/7</dd>
            </div>
            <div className="rounded-lg bg-brand-50 p-3 text-center">
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-600">
                Google rating
              </dt>
              <dd className="text-2xl font-extrabold text-brand-900">
                {business.aggregateRating.ratingValue.toFixed(1)}★
              </dd>
            </div>
            <div className="rounded-lg bg-brand-50 p-3 text-center">
              <dt className="text-xs font-medium uppercase tracking-wide text-brand-600">
                Quotes
              </dt>
              <dd className="text-2xl font-extrabold text-brand-900">Free</dd>
            </div>
          </dl>
          <a
            href={business.phone.emergencyHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-brand-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-900"
          >
            24hr emergency line: {business.phone.emergencyDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
