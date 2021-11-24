module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#131921',
          850: '#232F3E',
          550: '#29ABE2',
          850: '#102731',
        },
        green: {
          550: '#1DB954',
        },
        gray: {
          430: '#8A9CAC',
          450: '#797979',
          470: '#6F6F6F',
          460: '#717171',
          480: '#767676',
          750: '#313131',
          850: '#2B2B2B',
        },
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },
      fontSize: {
        xs11: '0.688rem',
        sm15: '0.9375rem',
      },
      borderRadius: {
        sml: '0.25rem',
        xl10: '0.625rem',
        xl20: '1.25rem',
      },
    },

    minHeight: {
      99: '800px',
    },
    height: {
      72: '4.5rem',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled', 'checked'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
