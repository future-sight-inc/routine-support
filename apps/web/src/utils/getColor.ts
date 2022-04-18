import { ColorEnum } from "@routine-support/domains";

import { COLORS } from "../constants/Colors";

export const getColor = (color: ColorEnum) => {
  return COLORS.find((colorInfo) => colorInfo.value === color)?.color || "";
};
