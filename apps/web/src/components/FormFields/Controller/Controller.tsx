import React, { ReactElement } from "react";

import {
  ControllerFieldState,
  ControllerRenderProps,
  Controller as FormController,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FormFieldProps } from "../types";
import * as S from "./styled";

export interface ControllerProps extends FormFieldProps {
  render: (arg: {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<unknown>;
  }) => ReactElement;
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
        <S.Wrapper>
          {label && (
            <S.Label ref={field.ref} error={Boolean(fieldState.error)}>
              {label}
            </S.Label>
          )}
          {render({ field, fieldState, formState })}
          {fieldState.error && <S.Error>{fieldState.error.message}</S.Error>}
        </S.Wrapper>
      )}
    />
  );
};
