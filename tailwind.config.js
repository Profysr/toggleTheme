/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#fff",
        darkBg: "#1a202c",
        lightText: "#fff",
        darkText: "#000",
      },
    },
  },
  plugins: [],
};
