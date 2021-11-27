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
        green: {
          550: "#1DB954"
        },
        gray: {
          450: "#797979"
        },
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      fontSize:{
          'xx':'8px',
          'vs':'10px',
         },
         boxShadow: {
          lgOuter11: '0px 0px 11px rgba(0, 0, 0, 0.11)',
          lgOuter: '0px 0px 17px rgba(0, 0, 0, 0.07)',
          lgOuter20: '0px 0px 20px rgba(0, 0, 0, 0.07)',
        },    
    },
    
    minHeight: {
      99: "800px",
    },
    
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled", "checked"],
      cursor: ["disabled"],
    },
     
  },
  plugins: [],
};
