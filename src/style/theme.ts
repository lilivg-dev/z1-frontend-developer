const lightTheme = {
  colors: {
    brandColor: '#2F0079',
  },
  fonts: {
    fontDarkColor: '#000000',
    fontLightColor: '#FFFFFF',
    lineHeight: '24px',
  }
}

export const themes = {
  light: lightTheme
};

type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}