/**
 * Lightweight inline SVG icons for each service — no icon library, no extra
 * JS payload. Keeps Core Web Vitals lean.
 */
type IconProps = { className?: string };

const base = 'h-8 w-8';

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const cls = `${base} ${className ?? ''}`.trim();
  const common = {
    className: cls,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  switch (name) {
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
          <path d="M9.5 12l1.8 1.8 3.4-3.6" />
        </svg>
      );
    case 'flame':
      return (
        <svg {...common}>
          <path d="M12 3c1 3-2 4-2 7a2 2 0 004 0c0-1 .8-1.8 1.2-1 .9 1.7 1.8 3 1.8 5a5 5 0 01-10 0c0-4 3-6 5-11z" />
        </svg>
      );
    case 'shutter':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M4 8h16M4 11h16M4 14h16M4 17h16" />
        </svg>
      );
    case 'storefront':
      return (
        <svg {...common}>
          <path d="M4 9l1-4h14l1 4" />
          <path d="M4 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0" />
          <path d="M5 11v9h14v-9" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3l9-16z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case 'garage':
      return (
        <svg {...common}>
          <path d="M3 10l9-5 9 5v10H3V10z" />
          <path d="M6 20v-7h12v7" />
          <path d="M6 15h12M6 17.5h12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );
  }
}
