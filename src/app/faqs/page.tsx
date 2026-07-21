import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { faqs } from '@/data/faqs';
import { buildMetadata, faqSchema } from '@/lib/seo';
import { business } from '@/config/business';

export const metadata: Metadata = buildMetadata({
  title: `FAQs | ${business.name}`,
  description:
    'Answers on security door pricing, fire door compliance, warranties, lead times, materials and emergency callout from Ultra Doors Security in Bolton.',
  path: '/faqs/',
});

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'FAQs', path: '/faqs/' },
        ]}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Your questions answered"
        title="Frequently asked questions"
        intro="Straight answers on pricing, warranties, lead times and materials. Can’t see your question? Just give us a call."
      />

      <section className="mx-auto max-w-3xl px-4 py-14">
        <dl className="divide-y divide-slate-200">
          {faqs.map((f) => (
            <div key={f.question} className="py-6">
              <dt className="text-lg font-bold text-brand-900">{f.question}</dt>
              <dd className="mt-2 leading-relaxed text-slate-700">{f.answer}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="text-lg font-bold text-brand-900">
            Still have a question?
          </h2>
          <p className="mt-1 text-slate-600">
            We’re happy to help — no obligation, no pressure.
          </p>
          <a
            href={business.phone.href}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-800 px-6 py-3 text-base font-bold text-white hover:bg-brand-900"
          >
            Call {business.phone.display}
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
