import React from "react";

import {
  TextField as UncontrolledTextField,
  TextFieldProps as UncontrolledTextFieldProps,
} from "../../TextField";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type TextFieldProps = FormFieldProps & UncontrolledTextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({
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
        <UncontrolledTextField
          error={Boolean(fieldState.error)}
          {...props}
          {...fieldProps}
          onChangeText={(value) => fieldProps.onChange(value)}
        />
      )}
    />
  );
};
