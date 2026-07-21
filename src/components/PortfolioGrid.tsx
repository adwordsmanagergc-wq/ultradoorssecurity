import Image from 'next/image';
import ServiceIcon from './ServiceIcon';
import type { Project } from '@/data/portfolio';
import { getService } from '@/data/services';

/**
 * Portfolio gallery. When a project has a real photo path it's rendered
 * through next/image (AVIF/WebP, lazy-loaded). Where no photo has been
 * added yet, a clean branded tile is shown instead of a broken image — but
 * add real completed-project photos before launch (see data/portfolio.ts).
 */
export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => {
        const service = getService(p.service);
        return (
          <li
            key={`${p.title}-${i}`}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full bg-brand-50">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600"
                  role="img"
                  aria-label={p.alt}
                >
                  {service && <ServiceIcon name={service.icon} className="h-10 w-10" />}
                  <span className="px-4 text-center text-xs font-medium text-brand-500">
                    Photo coming soon
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-brand-900">{p.title}</h3>
                <span className="rounded bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                  {p.town}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
