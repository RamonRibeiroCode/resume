import { create } from "@storybook/theming/create"
// import Logo from '../public/logo.svg'

export default create({
  base: "light",

  colorPrimary: "#00419e",
  colorSecondary: "#00419e",

  // UI
  appBg: "#f3f4ff",
  appContentBg: "white",
  appBorderRadius: 6,

  // Typography
  fontBase: '"Lato", -apple-system, system-ui, BlinkMacSystemFont, sans-serif',

  brandTitle: `Resume - Ramon`,
})
