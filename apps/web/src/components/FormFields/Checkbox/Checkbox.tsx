import React from "react";

import UICheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { LabelWithHelper } from "../../LabelWithHelper";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const Checkbox: React.FC<FormFieldProps> = ({
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
      helperText={helperText}
      render={({ field }) => (
        <FormControlLabel
          checked={field.value}
          onChange={field.onChange}
          control={<UICheckbox />}
          label={
            label && <LabelWithHelper label={label} helperText={helperText} />
          }
        />
      )}
    />
  );
};
