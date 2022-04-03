import React from "react";

import { Select as UncontrolledSelect } from "../../Select";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

interface SelectProps extends FormFieldProps {
  multiple?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  name,
  control,
  required,
  disabled,
  label,
  children,
  multiple,
  helperText
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
        <UncontrolledSelect
          value={field.value}
          onChange={field.onChange}
          multiple={multiple}
        >
          {children}
        </UncontrolledSelect>
      )}
    />
  );
};
