import Link from 'next/link';
import { business } from '@/config/business';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-accent-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        Sorry, we couldn’t find that page. It may have moved. Try one of the
        links below, or give us a call and we’ll point you in the right
        direction.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-brand-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-800"
        >
          Back to home
        </Link>
        <Link
          href="/services/"
          className="rounded-md border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-800 hover:bg-brand-50"
        >
          Our services
        </Link>
        <a
          href={business.phone.href}
          className="rounded-md border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-800 hover:bg-brand-50"
        >
          Call {business.phone.display}
        </a>
      </div>
    </section>
  );
}
