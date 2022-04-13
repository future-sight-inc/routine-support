import React from "react";

import { Checkbox as UICheckbox } from "../../Checkbox";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type CheckboxProps = FormFieldProps & {
  label: string;
  helperText?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
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
      helperText={helperText}
      render={({ field }) => (
        <UICheckbox
          label={label}
          helperText={helperText}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
