module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  variants: {
    extend: {
      grayscale: ["hover"],
      outline: ["responsive", "focus", "hover", "active"],
    },
  },
  plugins: [],
};
