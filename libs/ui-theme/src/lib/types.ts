import { Theme } from "./theme";

export interface Palette {
  main: string;
  hovered?: string;
  clicked?: string;
  message?: string;
  text: string;
}

export type FontWeight = "normal" | "bold";

export interface FontVariant {
  size: string;
  weight: FontWeight;
}

export interface ThemeType {
  palette: {
    common: {
      white: string;
      black: string;
      lightblue: string;
      green: string;
      yellow: string;
      blue: string;
      purple: string;
      pink: string;
      red: string;
      mint: string;
      orange: string;
      brown: string;
      darkGreen: string;
      greyMuted: string;
    };
    primary: Palette;
    secondary: Palette;
    error: Palette;
    border: {
      normal: string;
      light: string;
    };
  };
  borderRadius: {
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  size: {
    cellHeight: string;
    maxWidth: string;
  };
  fonts: {
    caption1: FontVariant;
    caption2: FontVariant;
    caption3: FontVariant;
    caption4: FontVariant;
    caption1Normal: FontVariant;
    caption2Normal: FontVariant;
    caption3Normal: FontVariant;
    caption4Normal: FontVariant;
    text1: FontVariant;
    text2: FontVariant;
    text3: FontVariant;
    text1Bold: FontVariant;
    text2Bold: FontVariant;
    text3Bold: FontVariant;
  };
  fontFamily: string;
  boxShadow: {
    medium: string;
    small: string;
  };
}

export type TypographyVariant = keyof typeof Theme.fonts;

export type TypographyColor =
  | "normal"
  | "secondary"
  | "primary"
  | "white"
  | "error";
