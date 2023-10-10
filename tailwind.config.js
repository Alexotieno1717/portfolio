/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#C778DD',
        'primary-gray': '#ABB2BF',
        'primary-dark-blue': '#282C33',
      },
    },
  },
  plugins: [],
};
