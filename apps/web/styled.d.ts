import "styled-components";

interface Palette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: 4;
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
        lightgrey: string;
        lightblue: string;
        green: string;
        blue: string;
      };
      primary: Palette;
      secondary: Palette;
      error: Palette;
    };
    border: {
      main: string;
      width: number;
      color: string;
    };
    position: {
      absoluteCenter: FlattenSimpleInterpolation;
    };
  }
}
