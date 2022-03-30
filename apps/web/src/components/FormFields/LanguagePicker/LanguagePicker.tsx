import React from "react";

import { LanguagePicker as UncontrolledLanguagePicker } from "../../LanguagePicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

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
