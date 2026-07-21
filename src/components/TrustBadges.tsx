import { business } from '@/config/business';

const badges = [
  {
    title: 'NVQ-Qualified Fitters',
    text: 'Time-served, qualified installers on every job.',
    icon: (
      <path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 15.5 7.5 18.2l1-5.5-4-3.9L10 8 12 3z" />
    ),
  },
  {
    title: `${business.yearsTradingText} Experience`,
    text: 'Trusted across Bolton & Greater Manchester since 2009.',
    icon: <path d="M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" />,
  },
  {
    title: 'Free, No-Obligation Quotes',
    text: 'On-site survey and a clear written price, free of charge.',
    icon: (
      <>
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      </>
    ),
  },
  {
    title: '24-Hour Emergency Callout',
    text: 'Break-in or breakage? We make you safe, day or night.',
    icon: (
      <>
        <path d="M12 8v4l2 2" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section
      aria-label="Why choose us"
      className="border-y border-slate-200 bg-white"
    >
      <ul className="mx-auto grid max-w-content grid-cols-2 gap-px overflow-hidden px-0 lg:grid-cols-4">
        {badges.map((b) => (
          <li
            key={b.title}
            className="flex flex-col items-center gap-2 bg-white p-6 text-center"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {b.icon}
              </svg>
            </span>
            <h3 className="text-sm font-bold text-brand-900">{b.title}</h3>
            <p className="text-xs leading-relaxed text-slate-600">{b.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
