import React from "react";

import { FormFieldProps } from "@routine-support/forms";
import { Pictogram } from "@routine-support/types";

import { PictogramPicker as UncontrolledPictogramPicker } from "../../PictogramPicker";
import { Controller } from "../Controller";

type PictogramPickerProps = FormFieldProps & {
  pictograms: Pictogram[];
};

export const PictogramPicker: React.FC<PictogramPickerProps> = ({
  name,
  control,
  required,
  disabled,
  label,
  pictograms,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      required={required}
      label={label}
      disabled={disabled}
      render={({ field }) => (
        <UncontrolledPictogramPicker
          value={field.value}
          onChange={field.onChange}
          pictograms={pictograms}
        />
      )}
    />
  );
};
