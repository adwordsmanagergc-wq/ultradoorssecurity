import Link from 'next/link';
import { business } from '@/config/business';

/**
 * Mobile-only sticky bottom bar with Call + Get a Free Quote.
 * Hidden on lg+ where the header CTA is always visible.
 */
export default function StickyQuoteBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-2 px-3 py-2">
        <a
          href={business.phone.href}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-300 px-3 py-2.5 text-sm font-bold text-brand-800"
        >
          <svg
            className="h-4 w-4"
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
          Call now
        </a>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center rounded-md bg-accent-500 px-3 py-2.5 text-sm font-bold text-white"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
