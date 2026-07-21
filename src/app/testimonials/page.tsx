import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import TestimonialCard from '@/components/TestimonialCard';
import CtaBand from '@/components/CtaBand';
import Stars from '@/components/Stars';
import JsonLd from '@/components/JsonLd';
import { testimonials } from '@/data/testimonials';
import { buildMetadata, reviewSchema } from '@/lib/seo';
import { business } from '@/config/business';

export const metadata: Metadata = buildMetadata({
  title: `Customer Reviews | ${business.name}`,
  description:
    'Read genuine reviews from Ultra Doors Security customers across Bolton, Manchester, Bury, Burnley, Salford & Wigan. Rated for quality, value & service.',
  path: '/testimonials/',
});

export default function TestimonialsPage() {
  const { ratingValue, reviewCount } = business.aggregateRating;

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials/' },
        ]}
      />
      <JsonLd data={reviewSchema()} />
      <PageHero
        eyebrow="Customer reviews"
        title="What our customers across Greater Manchester say"
      >
        <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/20">
          <Stars rating={ratingValue} />
          <span className="text-sm font-medium text-white">
            {ratingValue.toFixed(1)} average from {reviewCount} reviews
          </span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
