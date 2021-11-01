import {
  TextField as UncontrolledTextField,
  TextFieldProps as UncontrolledTextFieldProps,
} from "@mui/material";
import React, { ReactNode } from "react";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type TextFieldProps = FormFieldProps & UncontrolledTextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  control,
  required,
  disabled,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <UncontrolledTextField
          error={Boolean(fieldState.error)}
          {...props}
          {...field}
        />
      )}
    />
  );
};
