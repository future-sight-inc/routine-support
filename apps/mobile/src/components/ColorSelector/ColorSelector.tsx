import React, { useState } from "react";

import { ColorEnum } from "@routine-support/domains";
import { COLORS } from "@routine-support/ui-theme";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { MobileTheme } from "../../theme";

export interface ColorSelectorProps {
  value?: ColorEnum;
  onSelect?: (value: ColorEnum) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ value: defaultValue, onSelect }) => {
  const [value, setValue] = useState<undefined | ColorEnum>(defaultValue);

  const handleSelect = (value: ColorEnum) => {
    setValue(value);
    onSelect && onSelect(value);
  };

  return (
    <View style={styles.wrapper}>
      {COLORS.map((color, index) => (
        <TouchableWithoutFeedback onPress={() => handleSelect(color.value)} key={index}>
          <View
            style={[
              styles.color,
              { backgroundColor: color.color },
              color.value === value && styles.active,
            ]}
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row", flexWrap: "wrap" },
  color: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: MobileTheme.borderRadius.m,
    marginRight: 8,
    marginBottom: 8,
  },
  active: {
    borderWidth: 2,
    borderColor: MobileTheme.palette.primary.main,
  },
});
