/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
