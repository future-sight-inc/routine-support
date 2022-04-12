import React from "react";

import {
  Select as UncontrolledSelect,
  SelectProps as UncontrolledSelectProps,
} from "../../Select";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type SelectProps = FormFieldProps & UncontrolledSelectProps;

export const Select: React.FC<SelectProps> = ({
  name,
  control,
  required,
  disabled,
  label,
  options,
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
      render={({ field, fieldState }) => (
        <UncontrolledSelect
          error={Boolean(fieldState.error)}
          value={field.value}
          onChange={field.onChange}
          options={options}
        />
      )}
    />
  );
};
