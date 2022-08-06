import React, { ReactNode, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { MobileTheme } from "../../theme";
import { InputModal } from "../InputModal";
import { Typography } from "../Typography";
import { createOptionTestId } from "./locators";

export type Option = {
  value: string;
  text: string;
  color?: string;
};

type SelectValue = string | undefined | string[];

interface SelectProps {
  pressElement: ReactNode;
  value?: SelectValue;
  options: Option[];
  multiple?: boolean;
  onSelect: (value: SelectValue) => void;
}

export const Select: React.FC<SelectProps> = ({
  pressElement,
  value: defaultValue,
  options,
  multiple,
  onSelect,
}) => {
  const getDefaultValue = () => {
    if (multiple) {
      return defaultValue || [];
    }

    return defaultValue || undefined;
  };
  const [value, setValue] = useState<string | undefined | string[]>(getDefaultValue());

  const isOptionSelected = (option: Option) => {
    if (multiple) {
      return (value as string[]).includes(option.value);
    } else {
      return value === option.value;
    }
  };

  const handleSelect = (option: Option) => {
    const isCurrentOptionSelected = isOptionSelected(option);

    if (multiple) {
      if (isCurrentOptionSelected) {
        setValue((value) => (value as string[]).filter((selected) => selected !== option.value));
      } else {
        setValue([...(value as string[]), option.value]);
      }
    } else {
      if (isCurrentOptionSelected) {
        setValue(undefined);
      } else {
        setValue(option.value);
      }
    }
  };

  const handleConfirm = () => {
    onSelect(value);
  };

  const handleClose = () => {
    setValue(getDefaultValue());
  };

  const getOptionColor = (option: Option): string => {
    return option.color || MobileTheme.palette.primary.main;
  };

  return (
    <InputModal
      pressElement={pressElement}
      input={
        <FlatList
          data={options}
          renderItem={({ item: option }) => (
            <TouchableWithoutFeedback
              onPress={() => handleSelect(option)}
              testID={createOptionTestId({ option, isSelected: isOptionSelected(option) })}
            >
              <View style={styles.optionWrapper}>
                <View
                  style={[
                    styles.checkWrapper,
                    {
                      borderColor: getOptionColor(option),
                      backgroundColor: isOptionSelected(option)
                        ? getOptionColor(option)
                        : MobileTheme.palette.common.white,
                    },
                  ]}
                >
                  <MaterialIcons name="check" size={16} color="white" />
                </View>
                <Typography variant="caption4Normal">{option.text}</Typography>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item) => item.value}
          style={styles.wrapper}
        />
      }
      onConfirm={handleConfirm}
      onClose={handleClose}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: { height: 300, marginTop: 8 },
  optionWrapper: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkWrapper: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
});
