/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    sm: "320px",
    md: "400px",
    lg: "750px",
    xl: "1024px",
    "2xl": "1440px",
    "3xl": "1700px",
  },
  plugins: [],
};
