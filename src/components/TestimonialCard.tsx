import Stars from './Stars';
import type { Testimonial } from '@/data/testimonials';
import { getService } from '@/data/services';

export default function TestimonialCard({ t }: { t: Testimonial }) {
  const service = t.service ? getService(t.service) : undefined;
  return (
    <figure className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <Stars rating={t.rating} />
      <blockquote className="mt-3 flex-1 text-slate-700">
        <p>“{t.quote}”</p>
      </blockquote>
      <figcaption className="mt-4 border-t border-slate-100 pt-3 text-sm">
        <span className="font-semibold text-brand-900">{t.name}</span>
        <span className="text-slate-500">
          {' '}
          — {t.town}
          {service ? ` · ${service.name}` : ''}
        </span>
      </figcaption>
    </figure>
  );
}
