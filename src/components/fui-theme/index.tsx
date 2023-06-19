import {
  Theme,
  webLightTheme,
  webDarkTheme
} from "@fluentui/react-components";

export const lightTheme: Theme = {
  ...webLightTheme,
  colorBrandBackground: "var(--ifm-color-primary)" // overriden token
};

export const darkTheme: Theme = {
  ...webDarkTheme,
  colorBrandBackground: "#555" // overriden token
};
