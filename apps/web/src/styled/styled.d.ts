import "styled-components";

interface Palette {
  main: string;
  hovered?: string;
  clicked?: string;
  text: string;
}

interface FontVariant {
  size: string;
  weight: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
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
        darkgreen: string;
      };
      primary: Palette;
      secondary: Palette;
      error: Palette;
      border: {
        main: string;
      };
    };
    borderRadius: string;
    size: {
      cellHeight: string;
      maxWidth: string;
    };
    fonts: {
      caption4: FontVariant;
      text1: FontVariant;
      text2: FontVariant;
      text3: FontVariant;
      text1Bold: FontVariant;
      text2Bold: FontVariant;
      text3Bold: FontVariant;
    };
    fontFamily: string;
  }
}
