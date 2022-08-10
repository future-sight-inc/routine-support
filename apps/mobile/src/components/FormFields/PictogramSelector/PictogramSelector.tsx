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
      render={({ field }) => (
        <UncontrolledPictogramSelector
          {...props}
          {...field}
          onSelect={(value) => field.onChange(value)}
        />
      )}
    />
  );
};
