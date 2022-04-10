import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  palette: {
    primary: {
      main: "#2F80ED",
      hovered: "#0F43D2",
      clicked: "#0030B6",
      text: "#000000",
    },
    secondary: {
      main: "#EFEFEF",
      hovered: "#D8D8D8",
      clicked: "#C5C5C5",
      text: "#9A9A9A",
    },
    error: {
      main: "#d32f2f",
      text: "#d32f2f",
    },
    border: {
      main: "#DEDEDE",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
      lightblue: "#F5FCFF",
      green: "#95E19B",
      yellow: "#FFD74A",
      blue: "#D0ECFF",
      purple: "#A08EFF",
      pink: "#FFC1E6",
      red: "#FF9191",
      mint: "#7EF5F5",
      orange: "#FF9A6F",
      brown: "#B59388",
      darkgreen: "#60B667",
    },
  },
  borderRadius: "5px",
  // todo разобраться в структуре, постараться выпилить
  size: {
    cellHeight: "140px",
    maxWidth: "1900px",
  },
};
