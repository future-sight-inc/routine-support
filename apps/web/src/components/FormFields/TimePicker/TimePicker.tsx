import React from "react";

import { parseTime, stringifyTime } from "@routine-support/utils";

import { TextField } from "../../TextField";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const TimePicker: React.FC<FormFieldProps> = ({
  name,
  control,
  label,
  required,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      // eslint-disable-next-line unused-imports/no-unused-vars
      render={({ field: { value, onChange, ref, ...field }, fieldState }) => (
        <TextField
          type="time"
          {...field}
          value={stringifyTime(value)}
          onChange={(event) => onChange(parseTime(event.target.value))}
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
};
