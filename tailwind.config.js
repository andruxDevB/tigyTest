module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/ui'),
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
      },
    },
  },
}
