import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SafeAreaDimensions } from "../types";

export const useSafeAreaDimensions = (): SafeAreaDimensions => {
  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get("screen");

  return {
    ...insets,
    bottom: insets.bottom || 16,
    width: width - 32, // todo Стоит вынести отступы в конфиг
    height: height - 78 - 130,
  };
};
