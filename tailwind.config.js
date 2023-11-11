/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12CDD9',
        'primary-dark': '#1F1D2B',
        secondary: '#FF8700',
        'primary-soft': '#252836',
        grey: '#92929D',
        'dark-grey': '#696974',
        'white-grey': '#EBEBEF',
        'black-20': '#B1B1B1',
        facebook: '#4267B2',
      },
      height: {
        15: '3.75rem',
      },
    },
  },
  plugins: [],
};
