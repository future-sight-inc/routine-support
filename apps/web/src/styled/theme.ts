import { css, DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  palette: {
    primary: {
      main: "#2F80ED",
      contrastText: "#000",
    },
    secondary: {
      main: "#F3F3F3",
      contrastText: "#838383",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#d32f2f",
    },
    common: {
      black: "#000",
      white: "#fff",
      grey: "#F3F3F3",
      lightgrey: "#F9F9F9",
      lightblue: "#F5FCFF",
      green: "#95E19B",
      blue: "#A0DBFD",
    },
  },
  borderRadius: 4,
  border: {
    main: "1 px solid #DEDEDE",
    width: 1,
    color: "#DEDEDE",
  },
  position: {
    absoluteCenter: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
  },
};
