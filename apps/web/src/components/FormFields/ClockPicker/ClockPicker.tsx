import React from "react";

import { ClockPicker as UncontrolledClockPicker } from "../../ClockPicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const ClockPicker: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      required={required}
      disabled={disabled}
      label={label}
      render={({ field }) => (
        <UncontrolledClockPicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
