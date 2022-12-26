/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading: "3.875rem",
        "sub-heading": "2rem",
      },
      colors: {
        primary: {
          black: "#01080E",
          blue: {
            dark: "#011221",
            default: "#011627",
          },
        },
        secondary: {
          gray: "#607B96",
          green: "#3C9D93",
          purple: "#4D5BCE",
          white: "#FFFFFF",
        },
        accent: {
          orange: "#FEA55F",
          green: "#43D9AD",
          pink: "#E99287",
          purple: "#C98BDF",
        },
        line: {
          gray: "#1E2D3D",
        },
        gradient: {
          purple: "#4D5BCE",
          green: "#43D9AD",
        },
      },
    },
  },
  plugins: [],
};
