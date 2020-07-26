module.exports = {
  purge: {
    // mode: 'all',
    content: ['./templates/**/*.twig'],
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1600px'
    },
    fontFamily: {
      'sans': ["brandon-grotesque", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue","Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ['freight-text-pro', "Georgia, Cambria", "Times New Roman", "Times", "serif"]
    },
    colors: {
      transparent: 'transparent',
      primary: {
        '100': 'var(--color-primary-100)',
        '300': 'var(--color-primary-300)',
        '500': 'var(--color-primary-500)',
        '700': 'var(--color-primary-700)',
        '900': 'var(--color-primary-900)'
      },
      gray: {
        '100': 'var(--color-gray-100)',
        '300': 'var(--color-gray-300)',
        '500': 'var(--color-gray-500)',
        '700': 'var(--color-gray-700)',
        '900': 'var(--color-gray-900)'
      },
      black: 'var(--color-black)',
      white: 'var(--color-white)'
    },
    extend: {
      inset: {
        '1/2': '50%',
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
    require('autoprefixer')
  ],
}
