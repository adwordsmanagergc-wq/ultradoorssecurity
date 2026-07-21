import { ReactNode } from 'react';

/** Compact hero band for inner pages (below the breadcrumb). */
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
      <div className="mx-auto max-w-content px-4 py-12 md:py-16">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-300">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
