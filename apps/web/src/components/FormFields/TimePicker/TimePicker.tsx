import React from "react";

import { TextField } from "@mui/material";
import { parseTime, stringifyTime } from "@routine-support/utils";
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
      render={({ field: { value, onChange, ...field }, fieldState }) => (
        <TextField
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          {...field}
          value={stringifyTime(value)}
          onChange={(event) => onChange(parseTime(event.target.value))}
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
};
