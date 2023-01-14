import { create } from "@storybook/theming/create"

export default create({
  base: "dark",

  colorPrimary: "#FEA55F",
  colorSecondary: "#FEA55F",

  // UI
  appBg: "#01080E",
  appContentBg: "#011627",
  appBorderRadius: 6,

  // Typography
  fontBase:
    '"Fira Code", -apple-system, system-ui, BlinkMacSystemFont, sans-serif',

  brandTitle: `Resume - Ramon`,
})
