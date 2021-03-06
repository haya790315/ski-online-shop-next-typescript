module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  variants: {
    extend: {
      outline: ["responsive", "focus", "hover", "active"],
    },
  },
  plugins: [],
};
