import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import { ClockTypePicker as UncontrolledClockTypePicker } from "../../ClockTypePicker";
import { Controller } from "../Controller";

export const ClockTypePicker: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
  label,
  helperText,
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
