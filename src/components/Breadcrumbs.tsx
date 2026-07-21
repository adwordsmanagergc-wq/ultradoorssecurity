import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/seo';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD.
 * Always include Home as the first crumb; the last crumb is the current page.
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-200 bg-slate-50"
      >
        <ol className="mx-auto flex max-w-content flex-wrap items-center gap-1 px-4 py-3 text-sm text-slate-600">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="font-medium text-slate-800">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-brand-700 hover:underline">
                    {c.name}
                  </Link>
                )}
                {!last && (
                  <span aria-hidden className="px-1 text-slate-400">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
