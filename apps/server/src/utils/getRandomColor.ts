import { COLORS } from "../constants/Colors";

export const getRandomColor = (): string => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
