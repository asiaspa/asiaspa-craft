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
            'sans': 'var(--font-sans)',
            'serif': 'var(--font-serif)',
            'headline': 'var(--font-headline)',
            'display': 'var(--font-display)'
        },
        colors: {
            transparent: 'transparent',
            primary: {
                '100': 'var(--color-primary-100)',
                '300': 'var(--color-primary-300)',
                '500': 'var(--color-primary-500)',
                '700': 'var(--color-primary-700)',
            },
            secondary: {
                '100': 'var(--color-secondary-100)',
                '300': 'var(--color-secondary-300)',
                '500': 'var(--color-secondary-500)',
                '700': 'var(--color-secondary-700)',
            },
            gray: {
                '100': 'var(--color-gray-100)',
                '300': 'var(--color-gray-300)',
                '500': 'var(--color-gray-500)',
                '700': 'var(--color-gray-700)',
            },
            black: 'var(--color-black)',
            white: 'var(--color-white)',
        },
        typography: {
            default: {
                css: {
                    lineHeight: 1.5,
                    color: 'var(--color-black)',
                    strong: {
                        fontWeight: '600'                    
                    },
                    h1: {
                        fontWeight: '600',
                        fontFamily: 'var(--font-headline)'
                    },
                    h2: {
                        fontWeight: '600',
                        fontFamily: 'var(--font-headline)'
                    },
                    h3: {
                        fontWeight: '600',
                        fontFamily: 'var(--font-headline)'
                    },
                    h4: {
                        fontWeight: '600',
                        fontFamily: 'var(--font-headline)'
                    },
                    figcaption: {
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--color-gray-500)'
                    },
                    a: {
                        color: 'var(--color-primary-500)',
                        '&:hover': {
                            color: 'var(--color-primary-700)',
                        },
                    },
                },
            },
            'lg': {
                css: {
                    lineHeight: 1.6,
                }
            },
            'xl': {
                css: {
                    lineHeight: 1.6,
                }
            },
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
                '8': '8rem'
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
    experimental: {
        extendedSpacingScale: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true
    }
}
