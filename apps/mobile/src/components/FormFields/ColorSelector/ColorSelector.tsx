import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import {
  ColorSelector as UncontrolledColorSelector,
  ColorSelectorProps as UncontrolledColorSelectorProps,
} from "../../ColorSelector";
import { Controller } from "../Controller";

type ColorSelectorProps = FormFieldProps & UncontrolledColorSelectorProps;

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  name,
  label,
  control,
  required,
  disabled,
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
        <UncontrolledColorSelector
          {...props}
          {...fieldProps}
          onSelect={(value) => fieldProps.onChange(value)}
        />
      )}
    />
  );
};
