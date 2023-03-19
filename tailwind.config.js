/* eslint-disable no-undef */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-red': '#AA0000'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' }
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        opacity: 'opacity 0.5s ease-in',
        slideOut: 'slideOut 0.5s ease-out'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
