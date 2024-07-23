/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": " url('/bg-img.jpg')",
      },
      fontFamily: {
        sans: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
