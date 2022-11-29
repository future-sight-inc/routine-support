import React, { ReactElement } from "react";

import {
  ControllerFieldState,
  ControllerRenderProps,
  Controller as FormController,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FieldWrapperProps, FormFieldProps } from "../../types";

interface ControllerProps extends FormFieldProps {
  render: (arg: {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<unknown>;
  }) => ReactElement;
}

export const createController =
  (FieldWrapper: React.FC<FieldWrapperProps>): React.FC<ControllerProps> =>
    ({ name, control, render, label, helperText, required }) => {
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
              helperText={helperText}
              fieldRef={field.ref}
            >
              {render({ field, fieldState, formState })}
            </FieldWrapper>
          )}
        />
      );
    };
