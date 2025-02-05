/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#001F3F", // ✅ Define navy blue
      },
    },
  },
  plugins: [],
};
