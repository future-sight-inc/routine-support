import { ThemeType } from "./types";

export const Theme: ThemeType = {
  palette: {
    primary: {
      main: "#2F80ED",
      hovered: "#1A6EDE",
      clicked: "#075DD0",
      message: "#CFE4FF",
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
      normal: "#DEDEDE",
      light: "#EFEFEF",
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
      darkGreen: "#60B667",
      greyMuted: "#F9F9F9",
    },
  },
  borderRadius: {
    s: "5px",
    m: "8px",
    l: "13px",
    xl: "18px",
    xxl: "28px",
  },
  size: {
    cellHeight: "140px",
    maxWidth: "1900px",
  },
  fonts: {
    caption1: {
      size: "48px",
      weight: "600",
    },
    caption2: {
      size: "30px",
      weight: "600",
    },
    caption3: {
      size: "24px",
      weight: "600",
    },
    caption4: {
      size: "20px",
      weight: "600",
    },
    caption1Normal: {
      size: "48px",
      weight: "normal",
    },
    caption2Normal: {
      size: "30px",
      weight: "normal",
    },
    caption3Normal: {
      size: "24px",
      weight: "normal",
    },
    caption4Normal: {
      size: "20px",
      weight: "normal",
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
    medium: "0px 16px 24px rgba(0, 0, 0, 0.1)",
    small: "0px 4px 10px 3px rgba(0, 0, 0, 0.1)",
  },
};
