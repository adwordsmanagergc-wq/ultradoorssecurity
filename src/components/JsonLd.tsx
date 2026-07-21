/**
 * Renders a JSON-LD <script> block. Used for LocalBusiness, BreadcrumbList,
 * Review, FAQ and Service structured data. The data is serialised at build
 * time (SSG) so there is no client-side cost.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Structured data must be raw JSON in the DOM.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
