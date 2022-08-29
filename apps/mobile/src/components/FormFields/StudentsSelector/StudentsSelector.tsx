import React from "react";

import {
  StudentsSelector as UncontrolledStudentsSelector,
  StudentsSelectorProps as UncontrolledStudentsSelectorProps,
} from "../../StudentsSelector";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";
type StudentsSelectorProps = FormFieldProps & Omit<UncontrolledStudentsSelectorProps, "onSelect">;

export const StudentsSelector: React.FC<StudentsSelectorProps> = ({
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
      // eslint-disable-next-line unused-imports/no-unused-vars
      render={({ field: { ref, ...fieldProps } }) => (
        <UncontrolledStudentsSelector
          {...props}
          {...fieldProps}
          onSelect={(value) => fieldProps.onChange(value)}
        />
      )}
    />
  );
};
