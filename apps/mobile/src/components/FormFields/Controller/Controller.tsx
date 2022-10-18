import React, { ReactElement } from "react";

import {
  ControllerFieldState,
  ControllerRenderProps,
  Controller as FormController,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FieldWrapper } from "../FieldWrapper";
import { FormFieldProps } from "../types";

export interface ControllerProps extends FormFieldProps {
  render: (arg: {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<unknown>;
  }) => ReactElement;
  row?: boolean;
}

export const Controller: React.FC<ControllerProps> = ({
  name,
  control,
  render,
  label,
  required,
}) => {
  const { t } = useTranslation();

  return (
    <FormController
      name={name}
      control={control}
      rules={{ required: required && t<string>("Required field") }}
      render={({ field, fieldState, formState }) => (
        <FieldWrapper
          label={label && t<string>(label)}
          error={fieldState.error?.message && t<string>(fieldState.error?.message)}
        >
          {render({ field, fieldState, formState })}
        </FieldWrapper>
      )}
    />
  );
};
