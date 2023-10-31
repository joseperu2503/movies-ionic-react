/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12CDD9',
        secondary: '#FF8700',
        'primary-soft': '#252836',
        grey: '#92929D',
        'dark-grey': '#696974',
        'white-grey': '#EBEBEF',
      },
    },
  },
  plugins: [],
};
