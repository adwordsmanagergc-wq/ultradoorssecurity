import Link from 'next/link';
import type { Location } from '@/data/locations';

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}/`}
      className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
    >
      <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      </span>
      <span>
        <span className="block font-bold text-brand-900">{location.town}</span>
        <span className="block text-sm text-slate-600">{location.summary}</span>
      </span>
    </Link>
  );
}
