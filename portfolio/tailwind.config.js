/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ Ensure it scans all files
  theme: {
    extend: {
      fontFamily: {
        custom: ["Afacad Flux", "sans-serif"], // ✅ Add Afacad Flux as a custom font
      },
    },
  },
  plugins: [],
};
