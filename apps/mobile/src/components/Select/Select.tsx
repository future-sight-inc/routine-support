import React, { useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { MobileTheme } from "../../theme";
import { InputModal } from "../InputModal";
import { TextField, TextFieldProps } from "../TextField";
import { Typography } from "../Typography";
import { createOptionTestId, SelectLocators } from "./locators";

export type Option = {
  value: string;
  text: string;
  color?: string;
};

type SelectValue = string | undefined | string[];

export interface SelectProps {
  InputComponent?: React.FC<{ value?: string }>;
  InputProps?: TextFieldProps;
  value?: SelectValue;
  options: Option[];
  multiple?: boolean;
  searchable?: boolean;
  onSelect: (value: SelectValue) => void;
}

export const Select: React.FC<SelectProps> = ({
  InputComponent = TextField,
  InputProps,
  value: defaultValue,
  options,
  multiple,
  searchable,
  onSelect,
}) => {
  const getDefaultValue = () => {
    if (multiple) {
      return defaultValue || [];
    }

    return defaultValue || undefined;
  };

  const findOptionByValue = (value: SelectValue) => {
    return options.find((option) => option.value === value);
  };

  const getDefaultDisplayedValue = () => {
    if (multiple) {
      const selectedOptions = (getDefaultValue() as string[]).map(findOptionByValue);

      return selectedOptions.map((option) => option!.text).join(", ");
    } else {
      return findOptionByValue(getDefaultValue())?.text || "";
    }
  };

  const [value, setValue] = useState<string | undefined | string[]>(getDefaultValue());
  const [displayedValue, setDisplayedValue] = useState(getDefaultDisplayedValue());
  const [searchString, setSearchString] = useState("");

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

    if (multiple) {
      const selectedOptions = (value as string[]).map(findOptionByValue);

      setDisplayedValue(selectedOptions.map((option) => option!.text).join(", "));
    } else {
      setDisplayedValue(findOptionByValue(value)?.text || "");
    }
  };

  const handleClose = () => {
    setValue(getDefaultValue());
  };

  const handleSearchStingChange = (newSearchString: string) => {
    setSearchString(newSearchString);
  };

  const getOptionColor = (option: Option): string => {
    return option.color || MobileTheme.palette.primary.main;
  };

  const filterOptions = (options: Option[]) => {
    return options.filter((option) => new RegExp(`^${searchString}`, "i").test(option.text));
  };

  return (
    <InputModal
      pressElement={
        <InputComponent
          {...InputProps}
          value={displayedValue}
          pointerEvents="none"
          testID={SelectLocators.Input}
        />
      }
      input={
        <>
          {searchable && (
            <TextField
              style={styles.searchField}
              value={searchString}
              onChangeText={handleSearchStingChange}
              placeholder="Поиск"
              autoCapitalize="none"
              autoCorrect={false}
              icon={
                <MaterialIcons name="search" size={16} color={MobileTheme.palette.secondary.text} />
              }
              testID={SelectLocators.SearchField}
            />
          )}
          <FlatList
            data={filterOptions(options)}
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
                    {multiple ? (
                      <MaterialIcons name="check" size={16} color="white" />
                    ) : (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Typography variant="caption4Normal">{option.text}</Typography>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={(item) => item.value}
            style={styles.wrapper}
          />
        </>
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
  radioInner: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: MobileTheme.palette.common.white,
  },
  searchField: {
    backgroundColor: MobileTheme.palette.secondary.main,
    marginBottom: 8,
  },
});
