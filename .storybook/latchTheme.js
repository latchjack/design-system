import { create } from "@storybook/theming";

export default create({
  base: "dark",
  colorPrimary: "#6B1462",
  colorSecondary: "#6B1462",
  // UI
  appBg: "#1347a4", //6495ed cornflour blue
  appContentBg: "#1e1e2f",
  appBorderColor: "#27293d",
  appBorderRadius: 4,
  // Typography
  fontCode: "monospace",
  // Text colors
  textColor: "#ffffff",
  textInverseColor: "white",
  // Toolbar default and active colors
  barTextColor: "#9A9A9A",
  barSelectedColor: "white",
  barBg: "#6B1462",
  // Form colors
  inputBg: "transparent",
  inputBorder: "#2b3553",
  inputTextColor: "#ffffff",
  inputBorderRadius: 4,
  brandTitle: "Latch Storybook",
});
