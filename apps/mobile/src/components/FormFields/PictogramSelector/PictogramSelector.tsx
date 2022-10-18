import React from "react";

import { Pictogram } from "@routine-support/types";

import { PictogramSelector as UncontrolledPictogramSelector } from "../../PictogramSelector";
import { Controller } from "../Controller";
import { FormFieldProps } from "../types";

type PictogramSelectorProps = FormFieldProps & {
  pictograms: Pictogram[];
};

export const PictogramSelector: React.FC<PictogramSelectorProps> = ({
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
        <UncontrolledPictogramSelector
          {...props}
          {...fieldProps}
          onSelect={(value) => fieldProps.onChange(value)}
        />
      )}
    />
  );
};
