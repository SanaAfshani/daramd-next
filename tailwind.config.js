/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7f4',
          100: '#d7efe7',
          500: '#0f7c5b',
          600: '#0a644a',
          700: '#075c45',
          800: '#064a37',
        },
        accent: {
          500: '#f27321',
          600: '#e76615',
        },
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
