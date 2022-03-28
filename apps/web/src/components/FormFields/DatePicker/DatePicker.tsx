import React from "react";

import { TextField } from "@mui/material";
import moment from "moment";

import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const DatePicker: React.FC<FormFieldProps> = ({
  name,
  label,
  control,
  required,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      render={({ field: { value, onChange, ...field }, fieldState }) => (
        <TextField
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          {...field}
          // todo make more clear
          value={value.format("YYYY-MM-DD")}
          onChange={(event) =>
            onChange(moment(event.target.value, "YYYY-MM-DD"))
          }
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
};
