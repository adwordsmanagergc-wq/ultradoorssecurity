import Link from 'next/link';
import { business } from '@/config/business';

/**
 * Reusable call-to-action band. `variant="emergency"` swaps in the
 * emergency line and wording for 24/7 services.
 */
export default function CtaBand({
  heading,
  subheading,
  variant = 'default',
}: {
  heading?: string;
  subheading?: string;
  variant?: 'default' | 'emergency';
}) {
  const emergency = variant === 'emergency';
  const phoneHref = emergency
    ? business.phone.emergencyHref
    : business.phone.href;
  const phoneDisplay = emergency
    ? business.phone.emergencyDisplay
    : business.phone.display;

  return (
    <section className="bg-brand-800">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-4 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {heading ??
              (emergency
                ? 'Need us urgently? We’re here 24/7'
                : 'Get your free, no-obligation quote today')}
          </h2>
          <p className="mt-2 max-w-xl text-brand-100">
            {subheading ??
              (emergency
                ? 'Broken window, forced door or a break-in — call now and we’ll make your property safe.'
                : 'On-site survey, honest advice and a clear written price across Bolton & Greater Manchester.')}
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-bold text-brand-800 shadow-sm hover:bg-brand-50"
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
            {phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-accent-600"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
