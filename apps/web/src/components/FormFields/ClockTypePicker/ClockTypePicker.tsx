import React from "react";

import { ClockTypePicker as UncontrolledClockTypePicker } from "../../ClockTypePicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const ClockTypePicker: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText
}) => {
  return (
    <Controller
      name={name}
      control={control}
      required={required}
      disabled={disabled}
      label={label}
      helperText={helperText}
      render={({ field }) => (
        <UncontrolledClockTypePicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
