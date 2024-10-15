/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firstFont: '"Space Mono", monospace',
        secondFont: '"Prata", serif',
      },
    },
  },
  plugins: [],
};
