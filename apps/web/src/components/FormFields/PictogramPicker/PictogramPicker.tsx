import React from "react";

import { PictogramPicker as UncontrolledPictogramPicker } from "../../PictogramPicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const PictogramPicker: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      required={required}
      label={label}
      disabled={disabled}
      render={({ field }) => (
        <UncontrolledPictogramPicker
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
