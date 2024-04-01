/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-ribbon-50": "#edf9ff",
        "blue-ribbon-100": "#d6f1ff",
        "blue-ribbon-200": "#b5e8ff",
        "blue-ribbon-300": "#83dbff",
        "blue-ribbon-400": "#48c5ff",
        "blue-ribbon-500": "#1ea5ff",
        "blue-ribbon-600": "#0686ff",
        "blue-ribbon-700": "#0070fa",
        "blue-ribbon-800": "#0857c5",
        "blue-ribbon-900": "#0d4c9b",
        "blue-ribbon-950": "#0e2f5d",
      },
    },
  },
  plugins: [],
};
