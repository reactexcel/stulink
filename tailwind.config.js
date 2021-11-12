module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#131921",
          850: "#232F3E",
          550: "#29ABE2",
          850: "#102731",
        },
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      bg: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
