/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "lt-background-main": "#FFFFFF",
      "lt-background-secondary": "#EAECEF",
      "lt-text-main": "#1E2329",
      "dt-background-main": "#191A20",
      "dt-background-secondary": "#2B3139",
      "dt-text-main": "#EAECEF",
      "accent-color": "#F0B90B",
      "active-accent-color": "#FCD535",
      "negative-color": "#F6465D",
      "positive-color": "#0BCB81",
      "elements-main": "#929AA5",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        main: ["Roboto"],
      },
    },
  },
  plugins: [],
};
