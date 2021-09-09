module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: { "45vw": "4.5vw" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
