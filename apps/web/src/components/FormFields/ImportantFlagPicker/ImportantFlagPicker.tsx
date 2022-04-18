import React from "react";

import { ImportantFlagPicker as UIImportantFlagPicker } from "../../ImportantFlagPicker/ImportantFlagPicker";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

export const ImportantFlagPicker: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
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
        <UIImportantFlagPicker value={field.value} onChange={field.onChange} />
      )}
    />
  );
};
