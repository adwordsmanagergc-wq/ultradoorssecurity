import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import PortfolioGrid from '@/components/PortfolioGrid';
import CtaBand from '@/components/CtaBand';
import { projects } from '@/data/portfolio';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/config/business';

export const metadata: Metadata = buildMetadata({
  title: `Our Work | ${business.name}`,
  description:
    'See completed security door, roller shutter, shop front, fire door and garage door projects by Ultra Doors Security across Bolton & Greater Manchester.',
  path: '/portfolio/',
});

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio/' },
        ]}
      />
      <PageHero
        eyebrow="Our work"
        title="Recent projects across Greater Manchester"
        intro="A selection of completed security door, shutter, shop front, fire door and garage door installations for homes and businesses in the areas we cover."
      />

      <section className="mx-auto max-w-content px-4 py-14">
        <PortfolioGrid projects={projects} />
      </section>

      <CtaBand
        heading="Like what you see? Get your free quote"
        subheading="Tell us about your project and we’ll arrange a free on-site survey and a clear written price."
      />
    </>
  );
}
