import React from "react";

import { FormFieldProps } from "@routine-support/forms";
import { format } from "date-fns";

import { TextField } from "../../TextField";
import { Controller } from "../Controller";

const HTML_DATE_FORMAT = "yyyy-MM-dd";

export const DatePicker: React.FC<FormFieldProps> = ({
  name,
  label,
  control,
  required,
  disabled,
  helperText,
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
      render={({ field: { value, ref, ...field }, fieldState }) => (
        <TextField
          type="date"
          {...field}
          value={format(value, HTML_DATE_FORMAT)}
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
};
