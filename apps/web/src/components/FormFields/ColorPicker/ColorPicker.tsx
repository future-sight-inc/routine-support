import React from "react";

import { ColorPicker as UncontrolledColorPicker } from "../../ColorPicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

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
