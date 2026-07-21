/** Accessible star rating display. */
export default function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span
      className="inline-flex items-center gap-0.5 text-accent-400"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={i < rounded ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={1.4}
          aria-hidden
        >
          <path d="M10 1.8l2.5 5 5.5.8-4 3.9 1 5.5L10 14.4 5 17l1-5.5-4-3.9 5.5-.8L10 1.8z" />
        </svg>
      ))}
    </span>
  );
}
