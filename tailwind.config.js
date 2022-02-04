module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "my-red": "#ec7263",
      },
      fontSize: { "45vw": "4.5vw" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
