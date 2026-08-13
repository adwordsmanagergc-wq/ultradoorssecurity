/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // Brand colours are defined as CSS variables in global.css and mapped
      // here so Tailwind utilities (bg-navy, text-accent, …) stay in sync.
      colors: {
        navy: 'var(--navy)',
        ink: 'var(--ink)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        muted: 'var(--muted)',
        panel: 'var(--panel)',
        cream: 'var(--cream)',
        emergency: {
          DEFAULT: 'var(--emergency)',
          hover: 'var(--emergency-hover)',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: [
          '"Plus Jakarta Sans Variable"',
          '"Inter Variable"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(2,13,26,0.04), 0 8px 24px -12px rgba(2,13,26,0.18)',
        'card-hover':
          '0 2px 4px rgba(2,13,26,0.06), 0 18px 40px -16px rgba(2,13,26,0.30)',
      },
      maxWidth: {
        content: '80rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
