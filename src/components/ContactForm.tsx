'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

/**
 * Enquiry form that posts to Formspree — a serverless form handler that
 * works with a fully static site (no PHP, no server needed).
 *
 * SET-UP: create a free form at https://formspree.io, then set
 *   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
 * in your environment (e.g. .env.local or Vercel project settings).
 * Until that is set, the form falls back to opening the visitor's email
 * client so no enquiry is ever lost.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields; humans don't.
    if (data.get('company_website')) return;

    if (!ENDPOINT) {
      // Graceful fallback with no backend configured.
      const body = Array.from(data.entries())
        .filter(([k]) => k !== 'company_website')
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `mailto:info@ultradoorssecurity.co.uk?subject=${encodeURIComponent(
        'Website enquiry',
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('submitting');
    setError('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(
          json?.errors?.[0]?.message ??
            'Something went wrong. Please call us instead.',
        );
        setStatus('error');
      }
    } catch {
      setError('Network error. Please call us instead.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-900"
      >
        <h3 className="text-lg font-bold">Thank you — message received</h3>
        <p className="mt-1 text-sm">
          We’ll get back to you as soon as we can, usually the same working
          day. For anything urgent, please call us.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Your name <span className="text-red-600">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone <span className="text-red-600">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="town" className="mb-1 block text-sm font-medium text-slate-700">
            Town
          </label>
          <select id="town" name="town" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select your area
            </option>
            {locations.map((l) => (
              <option key={l.slug} value={l.town}>
                {l.town}
              </option>
            ))}
            <option value="Other">Other / nearby</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
          What do you need?
        </label>
        <select id="service" name="service" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Emergency callout">Emergency callout</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Details of your enquiry <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="Tell us a little about the property and what you need — the more detail, the more accurate our quote."
        />
      </div>

      {/* Honeypot field, visually hidden from humans */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Leave this field blank</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-md bg-accent-500 px-6 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-accent-600 disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send my enquiry'}
      </button>
      <p className="text-xs text-slate-500">
        We’ll only use your details to respond to your enquiry. Prefer to
        talk? Call us and we’ll help straight away.
      </p>
    </form>
  );
}
