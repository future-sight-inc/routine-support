import React, { useEffect } from "react";

import { useController, useWatch } from "react-hook-form";

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
  const isCommon = useWatch({
    control,
    name: "isCommon",
  });
  const { field } = useController({ control, name: "students" });

  useEffect(() => {
    console.log(isCommon);
    if (isCommon) {
      field.onChange([]);
    }
  }, [isCommon]);

  if (isCommon) {
    return null;
  }

  return (
    <Controller
      name={name}
      control={control}
      label={label}
      required={required}
      disabled={disabled}
      helperText={helperText}
      render={({ field }) => (
        <UncontrolledStudentsSelector
          {...props}
          {...field}
          onSelect={(value) => field.onChange(value)}
        />
      )}
    />
  );
};
