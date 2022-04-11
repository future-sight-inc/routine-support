import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  palette: {
    primary: {
      main: "#2F80ED",
      hovered: "#1A6EDE",
      clicked: "#075DD0",
      text: "#000000",
    },
    secondary: {
      main: "#EFEFEF",
      hovered: "#E3E3E3",
      clicked: "#D7D7D7",
      text: "#9A9A9A",
    },
    error: {
      main: "#FFE8E8",
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
  fonts: {
    caption4: {
      size: "20px",
      weight: "bold",
    },
    text1: {
      size: "16px",
      weight: "normal",
    },
    text2: {
      size: "14px",
      weight: "normal",
    },
    text3: {
      size: "12px",
      weight: "normal",
    },
    text1Bold: {
      size: "16px",
      weight: "bold",
    },
    text2Bold: {
      size: "14px",
      weight: "bold",
    },
    text3Bold: {
      size: "12px",
      weight: "bold",
    },
  },
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  boxShadow: {
    normal: "0px 16px 24px rgba(0, 0, 0, 0.1)",
  },
};
