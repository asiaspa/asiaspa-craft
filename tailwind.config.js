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
            padding: {
                'edge': 'var(--edge-padding)',
                'screen-sm': 'calc(var(--edge-padding) + var(--margin-screen-sm)) !important',
                'screen-md': 'calc(var(--edge-padding) + var(--margin-screen-md)) !important',
                'screen-lg': 'calc(var(--edge-padding) + var(--margin-screen-lg)) !important',
                'screen-xl': 'calc(var(--edge-padding) + var(--margin-screen-xl)) !important'
            },
            margin: {
                '-edge': 'calc(var(--edge-padding) * -1)',
                '-screen-sm': 'calc(var(--margin-screen-sm) * -1)',
                '-screen-md': 'calc(var(--margin-screen-md) * -1)',
                '-screen-lg': 'calc(var(--margin-screen-lg) * -1)',
                '-screen-xl': 'calc(var(--margin-screen-xl) * -1)'
            },
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
