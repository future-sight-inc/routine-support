import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import { LanguagePicker as UncontrolledLanguagePicker } from "../../LanguagePicker";
import { Controller } from "../Controller";

export const LanguagePicker: React.FC<FormFieldProps> = ({
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
        <UncontrolledLanguagePicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
