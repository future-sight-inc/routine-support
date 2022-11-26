import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import { RepeatTypePicker as UncontrolledRepeatTypePicker } from "../../RepeatTypePicker";
import { Controller } from "../Controller";

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
          disabled={disabled}
        />
      )}
    />
  );
};
