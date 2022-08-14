import React from "react";

import { ActivityTypeSelector as UncontrolledActivityTypeSelector } from "../../ActivityTypeSelector";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const ActivityTypeSelector: React.FC<FormFieldProps> = ({
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
      render={({ field }) => (
        <UncontrolledActivityTypeSelector
          {...props}
          {...field}
          onSelect={(value) => field.onChange(value)}
        />
      )}
    />
  );
};
