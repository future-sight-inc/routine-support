import React from "react";

import { Select as UncontrolledSelect, SelectProps as UncontrolledSelectProps } from "../../Select";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type SelectProps = FormFieldProps & Omit<UncontrolledSelectProps, "onSelect">;

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  control,
  required,
  disabled,
  InputProps,
  helperText,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      helperText={helperText}
      render={({ field, fieldState }) => (
        <UncontrolledSelect
          {...props}
          {...field}
          onSelect={(value) => field.onChange(value)}
          InputProps={{ ...InputProps, error: Boolean(fieldState.error) }}
        />
      )}
    />
  );
};
