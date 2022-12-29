/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xs": "280px",
        "2xs": "320px",
        xs: "360px",
      },
      fontSize: {
        heading: "3.875rem",
        "sub-heading": "2rem",
      },
      boxShadow: {
        game: "1px 5px 11px 0px #02121BB5 inset",
        input: "0px 0px 0px 2px #607B964D",
      },
      colors: {
        primary: {
          black: "#01080E",
          blue: {
            dark: "#011221",
            code: "#5565E8",
            default: "#011627",
          },
        },
        secondary: {
          gray: "#607B96",
          "dark-gray": "#465E77",
          "light-gray": "#1C2B3A",
          green: "#3C9D93",
          purple: "#4D5BCE",
          white: "#FFFFFF",
          "off-white": "#E5E9F0",
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
      },
      spacing: {},
    },
  },
  plugins: [],
}
