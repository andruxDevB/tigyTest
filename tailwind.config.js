module.exports = {
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-blend-mode')(),
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
  },
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#9a719e',
          50: '#faf8fa',
          100: '#f5f1f5',
          200: '#e6dce7',
          300: '#d7c6d8',
          400: '#b89cbb',
          500: '#9a719e', // Tigy Base Color
          600: '#8b668e',
          700: '#745577',
          800: '#5c445f',
          900: '#4b374d',
        },
        indigo: {
          DEFAULT: '#36AAD3',
          50: '#F2FAFC',
          100: '#DDF1F8',
          200: '#B4DFEE',
          300: '#8ACDE5',
          400: '#60BCDC',
          500: '#36AAD3', // Tigy Blue Base Color
          600: '#268CB0',
          700: '#1D6A86',
          800: '#14495C',
          900: '#0B2832',
        },
        blue: {
          50: '#F2FAFC',
          100: '#DDF1F8',
          200: '#B4DFEE',
          300: '#8ACDE5',
          400: '#60BCDC',
          500: '#36AAD3', // Tigy Blue Base Color
          600: '#268CB0',
          700: '#1D6A86',
          800: '#14495C',
          900: '#0B2832',
        },
      },
    },
  },
  purge: {
    content: ['node_modules/tv-*/dist/tv-*.umd.min.js'],
  },
}
