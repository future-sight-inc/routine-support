import React from "react";

import { TextField } from "@mui/material";
import moment from "moment";

import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

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
      render={({ field: { value, onChange, ...field }, fieldState }) => (
        <TextField
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          {...field}
          value={value.format(HTML_DATE_FORMAT)}
          onChange={(event) =>
            onChange(moment(event.target.value, HTML_DATE_FORMAT))
          }
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
};
