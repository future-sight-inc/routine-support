import React from "react";

import { FormFieldProps } from "@routine-support/forms";
import moment from "moment";

import { TextField } from "../../TextField";
import { Controller } from "../Controller";

const HTML_DATE_FORMAT = "YYYY-MM-DD";

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
      render={({ field: { value, onChange, ref, ...field }, fieldState }) => (
        <TextField
          type="date"
          {...field}
          value={value.format(HTML_DATE_FORMAT)}
          onChange={(event) => onChange(moment(event.target.value, HTML_DATE_FORMAT))}
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
};
