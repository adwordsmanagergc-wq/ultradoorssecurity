'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { business } from '@/config/business';

const PhoneIcon = () => (
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
);

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Areas', href: '/locations/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top trust bar */}
      <div className="hidden bg-brand-900 text-brand-50 md:block">
        <div className="mx-auto flex max-w-content items-center justify-between px-4 py-1.5 text-sm">
          <p className="flex items-center gap-2">
            <span className="font-medium">
              {business.yearsTradingText} of experience
            </span>
            <span aria-hidden className="text-brand-400">
              •
            </span>
            <span>NVQ-qualified fitters</span>
            <span aria-hidden className="text-brand-400">
              •
            </span>
            <span>{business.emergencyHoursNote}</span>
          </p>
          <a
            href={business.phone.emergencyHref}
            className="font-semibold text-accent-300 hover:text-accent-200"
          >
            24hr emergency: {business.phone.emergencyDisplay}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${business.name} home`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-700 text-white">
            <svg
              className="h-6 w-6"
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
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-900">
              Ultra Doors
            </span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-accent-600">
              Security
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-brand-50 text-brand-800'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-brand-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phone.href}
            className="hidden items-center gap-2 rounded-md border border-brand-200 px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50 sm:flex"
          >
            <PhoneIcon />
            <span>{business.phone.display}</span>
          </a>
          <Link
            href="/contact/"
            className="hidden rounded-md bg-accent-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-600 sm:inline-block"
          >
            Get a Free Quote
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <nav
            className="mx-auto max-w-content px-4 py-3"
            aria-label="Mobile"
          >
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                      isActive(item.href)
                        ? 'bg-brand-50 text-brand-800'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={business.phone.href}
                className="flex items-center justify-center gap-2 rounded-md border border-brand-200 px-3 py-2.5 text-sm font-semibold text-brand-800"
              >
                <PhoneIcon />
                Call us
              </a>
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="rounded-md bg-accent-500 px-3 py-2.5 text-center text-sm font-bold text-white"
              >
                Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
