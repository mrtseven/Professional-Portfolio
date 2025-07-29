/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/provider/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/components/**/*.{js,jsx,md,mdx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': {'background-position': '100%'},
          '100%': {'background-position': '-100%'},
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
}

