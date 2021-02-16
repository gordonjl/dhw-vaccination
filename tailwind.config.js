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
        'covid_splash_md' : "url('/covid_splash/covid_splash_kex5ce_c_scale,w_1400.png')",
        'covid_splash_sm' : "url('/covid_splash/covid_splash_kex5ce_c_scale,w_852.png')",
        'covid_splash' : "url('/covid_splash/covid_splash_kex5ce_c_scale,w_638.png')"
      })

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
