import Link from 'next/link';
import ServiceIcon from './ServiceIcon';
import type { Service } from '@/data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <span className="mb-4 grid h-14 w-14 place-items-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="text-lg font-bold text-brand-900">
        {service.name}
        {service.emergency && (
          <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wide text-accent-600">
            24hr
          </span>
        )}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
        Learn more
        <svg
          className="h-4 w-4 transition-all"
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
      </span>
    </Link>
  );
}
