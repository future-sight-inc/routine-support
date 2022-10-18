import React from "react";

import {
  DateSelector as UncontrolledDateSelector,
  DateSelectorProps as UncontrolledDateSelectorProps,
} from "../../DateSelector";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type DateSelectorProps = FormFieldProps & Omit<UncontrolledDateSelectorProps, "onSelect">;

export const DateSelector: React.FC<DateSelectorProps> = ({
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
        <UncontrolledDateSelector
          {...props}
          {...fieldProps}
          onSelect={(value) => fieldProps.onChange(value)}
          InputProps={{ ...InputProps, error: Boolean(fieldState.error) }}
        />
      )}
    />
  );
};
