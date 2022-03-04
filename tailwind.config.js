module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      outline: {
        blue: "2px solid #0000ff",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
      outline: ['responsive', 'focus', 'hover', 'active'],
    },
  },
  plugins: [],
};
