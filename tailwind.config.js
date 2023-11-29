/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          navyBlue: '#3B71FE',
          blue: '#8BC5E5',
          purple: '#92A5EF',
          green: '#58C27D',
          logoPurple: '#242953',
        },
        secondary: {
          lightBlue: '#A4CDE3',
          nude: '#E4D7CF',
          yellow: '#FFD166',
          orange: '#FA8F54',
        },
        neutrals: {
          dark: '#141416',
          navyDark: '#141416',
          darkGrey: '#353945',
          navyGrey: '#777E90',
          grey: '#B1B5C3',
          white: '#F4F5F6',
          navyWhite: '#E6E8EC',
          balticSea: '#23262F',
          milkWhite: '#FCFCFD',
          gray: '#777E91',
        },
        dark: {
          black: '#18191D',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1.25rem'],
        sm: ['0.875rem', '1.5rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.5rem', '2rem'],
        xl: [
          '2rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '2xl': [
          '2.5rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.025em',
            fontWeight: '700',
          },
        ],
        '3xl': [
          '3rem',
          {
            lineHeight: '3.5rem',
            letterSpacing: '-0.06em',
            fontWeight: '700',
          },
        ],
        '4xl': [
          '4rem',
          {
            lineHeight: '4rem',
            letterSpacing: '-0.08em',
            fontWeight: '700',
          },
        ],
        '5xl': [
          '6rem',
          {
            lineHeight: '6rem',
            letterSpacing: '-0.12em',
            fontWeight: '700',
          },
        ],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
