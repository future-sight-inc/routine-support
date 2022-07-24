import React, { ReactNode, useState } from "react";

import DatePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import moment, { Moment } from "moment";

import { InputModal } from "../InputModal";

interface DateSelectorProps {
  pressElement: ReactNode;
  onSelect: (value: Moment) => void;
  value?: Moment;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  pressElement,
  onSelect,
  value: defaultValue,
}) => {
  const [value, setValue] = useState<Moment>(defaultValue || moment());

  const handleChange = (__: DateTimePickerEvent, date?: Date | undefined) => {
    const newValue = moment(date);

    setValue(newValue);
  };

  const handleSelect = () => {
    onSelect(value);
  };

  return (
    <InputModal
      pressElement={pressElement}
      input={
        <DatePicker
          value={value.toDate()}
          onChange={handleChange}
          display="spinner"
          textColor="black"
        />
      }
      onConfirm={handleSelect}
    />
  );
};
