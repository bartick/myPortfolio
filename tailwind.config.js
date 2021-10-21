/* eslint-disable no-undef */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      'base': '1rem',
      '1xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '5xl': '3rem',
      '6xl': '3.5rem'
    },
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      purple: colors.purple
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
    fill: [],
    extend: {
      float:['hover', 'focus', 'active'],
      padding:['hover', 'focus', 'active'],
      margin: ['hover', 'focus', 'active'],
      justifyContent: ['hover', 'focus', 'active'],
      overflow: ['hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      textAlign: ['hover', 'focus', 'active'],
      textDecoration: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      whitespace: ['hover', 'focus', 'active'],
    }
  },
  plugins: [
  ]
}