module.exports = {
    purge: {
        // enabled: true,
        content: [
            './templates/*.twig',
            './templates/**/*.twig',
        ],
        options: {
            whitelist: [''],
        },
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
            'sans-display': 'var(--font-sans-display)',
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
                    lineHeight: 1.6,
                    color: 'var(--color-black)',
                    fontWeight: 300,
                    strong: {
                        fontWeight: 600,
                    },
                    h1: {
                        fontFamily: 'var(--font-headline)'
                    },
                    h2: {
                        fontFamily: 'var(--font-headline)'
                    },
                    h3: {
                        fontFamily: 'var(--font-headline)'
                    },
                    h4: {
                        fontFamily: 'var(--font-headline)'
                    },
                    h5: {
                        fontFamily: 'var(--font-headline)'
                    },
                    h6: {
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
                    lineHeight: 1.7,
                }
            },
            'xl': {
                css: {
                    lineHeight: 1.7,
                }
            }
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
        // defaultLineHeights: true,
        extendedFontSizeScale: true
    },
    future: {
        removeDeprecatedGapUtilities: true,
    }
}
