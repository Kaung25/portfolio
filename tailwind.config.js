/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    screens: {
      // '2xs': '0px',
      // // => @media (min-width: 440px) { ... }

      'xs': '280px',
      // => @media (min-width: 280px) { ... }

      'sm': '380px',
      // => @media (min-width: 640px) { ... }

      'md': '712px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '5em',
      '8xl': '6rem',
      '9xl': '10rem',

     },

    extend: {
      animation: {
        marqux: 'marqux 90s linear infinite',
        marqvd: 'marqvd 90s linear infinite',
      },
      keyframes: {
        marqux: {
          '0%':{ transform: 'translateX(-50%)' },
          '50%':{ transform: 'translateX(0%)' },
        },
        marqvd: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
        }
      },
    },

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
  },
  variants: { // all the following default to ['responsive']
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],

    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },

  plugins: [
    require('tailwindcss-text-fill-stroke') (), // no options to configure
  ],
}