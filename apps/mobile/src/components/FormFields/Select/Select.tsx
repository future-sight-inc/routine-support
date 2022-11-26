import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import { Select as UncontrolledSelect, SelectProps as UncontrolledSelectProps } from "../../Select";
import { Controller } from "../Controller";

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
      // eslint-disable-next-line unused-imports/no-unused-vars
      render={({ field: { ref, ...fieldProps }, fieldState }) => (
        <UncontrolledSelect
          {...props}
          {...fieldProps}
          onSelect={(value) => fieldProps.onChange(value)}
          InputProps={{ ...InputProps, error: Boolean(fieldState.error) }}
        />
      )}
    />
  );
};
