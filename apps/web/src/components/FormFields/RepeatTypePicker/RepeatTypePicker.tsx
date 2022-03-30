import React from "react";

import { RepeatTypePicker as UncontrolledRepeatTypePicker } from "../../RepeatTypePicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const RepeatTypePicker: React.FC<FormFieldProps> = ({
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
        <UncontrolledRepeatTypePicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
