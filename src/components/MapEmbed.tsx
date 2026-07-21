import { business } from '@/config/business';

/**
 * Embedded Google Map. Uses the keyless Google Maps embed endpoint (the
 * same `output=embed` URL a share link produces), so no API key or billing
 * account is required. The iframe is lazy-loaded to protect page speed.
 *
 * Pass a `query` (e.g. a town name) to centre the map elsewhere; defaults
 * to the business address.
 */
export default function MapEmbed({
  query,
  title,
  className,
}: {
  query?: string;
  title?: string;
  className?: string;
}) {
  const q =
    query ??
    `${business.address.streetAddress}, ${business.address.locality}, ${business.address.postalCode}`;
  const src = `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

  return (
    <div
      className={`overflow-hidden rounded-lg border border-slate-200 ${className ?? ''}`}
    >
      <iframe
        title={title ?? `Map showing ${q}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full border-0 md:h-80"
        allowFullScreen
      />
    </div>
  );
}
