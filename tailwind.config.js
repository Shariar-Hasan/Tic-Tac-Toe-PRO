/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303952",
        secondary: "#1e263b",
      },
    },
  },
  plugins: [],
};
