import React, { useState } from "react";

import DatePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { stringifyDate, stringifyTime } from "@routine-support/utils";

import { InputModal } from "../InputModal";
import { TextField, TextFieldProps } from "../TextField";
import { DateSelectorLocators } from "./locators";

type DateSelectorMode = "date" | "time";

export interface DateSelectorProps {
  InputComponent?: React.FC<{ value?: string }>;
  InputProps?: TextFieldProps;
  onSelect: (value: Date) => void;
  value?: Date;
  mode?: DateSelectorMode;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  InputComponent = TextField,
  InputProps,
  onSelect,
  value: defaultValue,
  mode = "date",
}) => {
  const [value, setValue] = useState<Date>(defaultValue || new Date());
  const [displayedValue, setDisplayedValue] = useState<Date>(value);

  const handleChange = (__: DateTimePickerEvent, value?: Date | undefined) => {
    if (value) {
      setValue(value);
    }
  };

  const handleConfirm = () => {
    onSelect(value);
    setDisplayedValue(value);
  };

  const handleClose = () => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  };

  const stringifyDisplayedValue = () => {
    if (mode === "date") {
      return stringifyDate(displayedValue);
    }

    if (mode === "time") {
      return stringifyTime(displayedValue);
    }
  };

  return (
    <InputModal
      pressElement={
        <InputComponent
          {...InputProps}
          value={stringifyDisplayedValue()}
          pointerEvents="none"
          testID={DateSelectorLocators.Input}
        />
      }
      input={
        <DatePicker
          value={value}
          onChange={handleChange}
          display="spinner"
          textColor="black"
          themeVariant="light"
          mode={mode}
        />
      }
      onConfirm={handleConfirm}
      onClose={handleClose}
    />
  );
};
