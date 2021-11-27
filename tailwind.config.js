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
          120: "#D2EAD9",
          140:"#AEE0BF",
          160: "#8AD7A4",
          180:"#65CD89",
          220:"#41C36F",
          550: "#1DB954"
        },
        gray: {
          220: '#EFEFEF',
          230: '#C2C2C2',
          250: '#E2E2E2',
          270: '#A1A1A1',
          430: '#8A9CAC',
          450: '#797979',
          470: '#6F6F6F',
          460: '#717171',
          480: '#767676',
          750: '#313131',
          850: '#2B2B2B',
        },
        yellow: {
          450:"#FFD600",
        },
      },
      backgroundColor: {
        yellow: {
          450:"#FFD600",
        },
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      fontSize:{
          'xx':'8px',
          'vs':'10px',
          xs10: '0.625rem',
          xs11: '0.688rem',
          sm15: '0.9375rem',
     },
     borderRadius: {
      sml: '0.25rem',
      xl7: '0.438rem',
      xl10: '0.625rem',
      xl20: '1.25rem',
      xl30: '1.875rem',
      xl50: '3.125rem',
    },
     margin: {
         30:'121px',
         7.5:'30px',
         33:'8.5rem'
       },
    padding: {
        17.5:'30px',
    },

         boxShadow: {
          lgOuter11: '0px 0px 11px rgba(0, 0, 0, 0.11)',
          lgOuter: '0px 0px 17px rgba(0, 0, 0, 0.07)',
          lgOuter20: '0px 0px 20px rgba(0, 0, 0, 0.07)',
        },
        
        left: {
          30:'7rem',
          24:'5rem',
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
