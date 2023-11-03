import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#C778DD",
        "primary-gray": "#ABB2BF",
        "primary-dark-blue": "#282C33",
      },
    },
  },
  plugins: [],
};
export default config;
