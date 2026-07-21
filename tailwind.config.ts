import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Trade-business palette: deep steel navy + a confident safety amber.
        brand: {
          50: '#eff5fb',
          100: '#d8e6f4',
          200: '#b0cce9',
          300: '#7fa9d7',
          400: '#4d7fbf',
          500: '#2f5f9e',
          600: '#234a7d',
          700: '#1d3c66',
          800: '#182f4f',
          900: '#0f1f36',
          950: '#0a1626',
        },
        accent: {
          50: '#fff8eb',
          100: '#feefc7',
          200: '#fddd8a',
          300: '#fbc44d',
          400: '#f9ab24',
          500: '#f38a0b',
          600: '#d76806',
          700: '#b24809',
          800: '#90390e',
          900: '#77300f',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
