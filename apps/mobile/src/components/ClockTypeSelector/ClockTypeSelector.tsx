import React, { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { Theme } from "../../theme";
import { Typography } from "../Typography";
import { ClockTypeSelectorLocators, createActiveTypeTestId } from "./locators";

interface ClockTypeSelectorProps {
  value?: boolean;
  onSelect: (value: boolean) => void;
}

export const ClockTypeSelector: React.FC<ClockTypeSelectorProps> = ({
  value: defaultValue = false,
  onSelect,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    handleSelect(defaultValue);
  }, [defaultValue]);

  const handleSelect = (value: boolean) => {
    setValue(value);
    onSelect(value);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => handleSelect(true)}
        testID={createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Digital,
          isSelected: value,
        })}
      >
        <View style={[styles.option, value && styles.selectedOption]}>
          <Typography variant="text1Bold" color={value ? "white" : "secondary"}>
            12:34
          </Typography>
        </View>
      </TouchableOpacity>
      <View style={styles.gap} />
      <TouchableOpacity
        onPress={() => handleSelect(false)}
        testID={createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Analog,
          isSelected: !value,
        })}
      >
        <View style={[styles.option, !value && styles.selectedOption]}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color={value ? Theme.palette.secondary.text : Theme.palette.common.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row" },
  option: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width / 2 - 20,
    borderRadius: Theme.borderRadius.m,
    borderWidth: 1,
    borderColor: Theme.palette.border.normal,
  },
  selectedOption: {
    backgroundColor: Theme.palette.primary.main,
    borderWidth: 0,
  },
  gap: { width: 8 },
});
