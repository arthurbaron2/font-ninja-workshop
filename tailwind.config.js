/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          fill: "#EE585A",
        },
        background: {
          light: "#F7F6F6",
          dark: "#181818",
        },
        white: "#FEFEFE",
        black: "#121212",
        desactivated: "#8E8E93",
        "desactivated-stoke": "#D7D7DB",
        button: {
          primary: "#EE585A",
        },
        card: {
          light: "#FFFFFF",
          dark: "#2C2C2E",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
