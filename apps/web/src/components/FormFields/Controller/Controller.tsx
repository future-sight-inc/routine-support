import React, { ReactElement } from "react";

import {
  ControllerFieldState,
  ControllerRenderProps,
  Controller as FormController,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";

import { LabelWithHelper } from "../../LabelWithHelper";
import { FormFieldProps } from "../types";
import * as S from "./styled";
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
  helperText,
}) => {
  const { t } = useTranslation();

  return (
    <FormController
      name={name}
      control={control}
      rules={{ required: required && t<string>("Required field") }}
      render={({ field, fieldState, formState }) => (
        <S.Wrapper>
          {label && (
            <LabelWithHelper ref={field.ref} helperText={helperText}>
              {label}
            </LabelWithHelper>
          )}
          {render({ field, fieldState, formState })}
          {fieldState.error?.message && (
            <S.Error>{t(fieldState.error.message)}</S.Error>
          )}
        </S.Wrapper>
      )}
    />
  );
};
