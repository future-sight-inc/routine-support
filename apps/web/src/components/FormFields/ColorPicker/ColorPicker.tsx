import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import { ColorPicker as UncontrolledColorPicker } from "../../ColorPicker";
import { Controller } from "../Controller";

export const ColorPicker: React.FC<FormFieldProps> = ({
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
        <UncontrolledColorPicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
