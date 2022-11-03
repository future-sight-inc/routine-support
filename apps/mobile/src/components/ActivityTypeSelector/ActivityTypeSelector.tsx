import React, { useEffect, useState } from "react";

import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { Theme } from "../../theme";
import { Typography } from "../Typography";
import { ActivityTypeSelectorLocators, createActiveTypeTestId } from "./locators";

interface ActivityTypeSelectorProps {
  value?: boolean;
  onSelect: (value: boolean) => void;
}

export const ActivityTypeSelector: React.FC<ActivityTypeSelectorProps> = ({
  value: defaultValue = false,
  onSelect,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
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
          locator: ActivityTypeSelectorLocators.Common,
          isSelected: value,
        })}
      >
        <View style={[styles.option, value && styles.selectedOption]}>
          <Typography variant="text2Bold" color={value ? "white" : "secondary"}>
            Общая
          </Typography>
        </View>
      </TouchableOpacity>
      <View style={styles.gap} />
      <TouchableOpacity
        onPress={() => handleSelect(false)}
        testID={createActiveTypeTestId({
          locator: ActivityTypeSelectorLocators.Individual,
          isSelected: !value,
        })}
      >
        <View style={[styles.option, !value && styles.selectedOption]}>
          <Typography variant="text2Bold" color={!value ? "white" : "secondary"}>
            Индивид.
          </Typography>
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
