import { create } from "@storybook/theming";

export default create({
  base: "dark",
  colorPrimary: "#1dc0e5",
  colorSecondary: "#1dc0e5",
  // UI
  appBg: "#08498e",
  appContentBg: "#174771",
  appBorderColor: "#000000",
  appBorderRadius: 4,
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  // Text colors
  textColor: "#ffffff",
  textInverseColor: "#000000",
  // Toolbar default and active colors
  barTextColor: "#9A9A9A",
  barSelectedColor: "#1dc0e5",
  barBg: "#000000",
  // Form colors
  inputBg: "transparent",
  inputBorder: "#000000",
  inputTextColor: "#ffffff",
  inputBorderRadius: 4,
  brandTitle: "LatchLabs",
});
