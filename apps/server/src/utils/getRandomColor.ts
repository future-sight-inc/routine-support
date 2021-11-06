import { COLORS } from "../constants/Colors";

export const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
