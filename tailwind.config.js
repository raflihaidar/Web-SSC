/* eslint-disable no-undef */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-red': '#AA0000'
      },
      fontWeight: {
        custom: '400'
      },
      fontFamily: {
        quickSand: ['Quicksand']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
