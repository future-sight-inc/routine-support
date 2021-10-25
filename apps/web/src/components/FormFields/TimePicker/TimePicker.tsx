import React from "react";

import DefaultTimePicker from "@mui/lab/TimePicker";
import { TextField } from "@mui/material";
import { Moment } from "moment";

import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

interface TimePickerProps extends FormFieldProps {
  minTime?: Moment;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  name,
  control,
  label,
  required,
  disabled,
  minTime,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <DefaultTimePicker
          renderInput={(props) => (
            <TextField {...props} error={Boolean(fieldState.error)} />
          )}
          minTime={minTime}
          disabled={disabled}
          {...field}
        />
      )}
    />
  );
};
