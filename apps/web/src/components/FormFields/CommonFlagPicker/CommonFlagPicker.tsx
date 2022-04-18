import React from "react";

import { CommonFlagPicker as UncontrolledCommonFlagPicker } from "../../CommonFlagPicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

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
