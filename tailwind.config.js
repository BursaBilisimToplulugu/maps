/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          navyBlue: "#3B71FE",
          blue: "#8BC5E5",
          purple: "#92A5EF",
          green: "#58C27D",
        },
        secondary: {
          lightBlue: "#A4CDE3",
          nude: "#E4D7CF",
          yellow: "#FFD166",
          orange: "#FA8F54",
        },
        neutrals: {
          dark: "#141416",
          navyDark: "#141416",
          darkGrey: "#353945",
          navyGrey: "#777E90",
          grey: "#B1B5C3",
          darkWhite: "#E6E8EC",
          white: "#F4F5F6",
          navyWhite: "#E6E8EC",
        },
      },
    },
  },
  plugins: [],
};
