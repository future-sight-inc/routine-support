import React from "react";

import UncontrolledDatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
import { Moment } from "moment";

import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

interface DatePickerProps extends FormFieldProps {
  minDate?: Moment;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  name,
  label,
  control,
  required,
  disabled,
  minDate,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <UncontrolledDatePicker
          renderInput={(props) => (
            <TextField {...props} error={Boolean(fieldState.error)} />
          )}
          minDate={minDate}
          {...field}
        />
      )}
    />
  );
};
