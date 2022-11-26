import React from "react";

import { FormFieldProps } from "@routine-support/forms";

import { CommonFlagPicker as UncontrolledCommonFlagPicker } from "../../CommonFlagPicker";
import { Controller } from "../Controller";

export const CommonFlagPicker: React.FC<FormFieldProps> = ({
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
        <UncontrolledCommonFlagPicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
