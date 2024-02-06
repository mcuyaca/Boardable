/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(263, 70%, 50%, 1)",
        "primary-foreground": "hsla(0, 0%, 100%, 1)",
        "muted-foreground": "hsla(0, 0%, 32%, 1)",
        border: "hsla(0, 0%, 83%, 1)",
        ring: "hsla(0, 0%, 83%, 1)",
      },
      fontFamily: {
        welcome: ["Familjen Grotesk Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
