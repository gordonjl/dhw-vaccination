module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      colors: {
        dhwBlack: {
          DEFAULT: '#18253C'
        },
        'hero': {
          DEFAULT: 'rgba(9,36,93,0.25)'
        } ,
        secondary: {
          DEFAULT: '#007864'
        },
        tertiary: {
          DEFAULT: '#4D008E'
        },
        social: {
          DEFAULT: '#3b9285'
        }
      },
      container: {
        center: true
      },
      backgroundImage: theme => ({
        'hero-pattern' : "url('/covid_splash.jpg')"
      })

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
