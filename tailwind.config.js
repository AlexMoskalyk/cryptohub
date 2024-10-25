/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "lt-background-main": "#FFFFFF",
      "lt-background-secondary": "#EAECEF",
      "lt-elements-main": "#1E2329",
      "dt-background-main": "#191A20",
      "dt-background-secondary": "#2B3139",
      "dt-elements-main": "#EAECEF",
      "accent-color": "#F0B90B",
      "negative-color": "#F6465D",
      "positive-color": "#0BCB81",
    },
    extend: {
      fontFamily: {
        main: ["Roboto"],
      },
    },
  },
  plugins: [],
};
