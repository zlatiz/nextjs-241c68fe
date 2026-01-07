import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        muted: '#777777',
        accent: '#f5c21a'
      },
      fontFamily: {
        sans: ['Manrope', 'DM Sans', 'Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
