import React, { ReactElement } from "react";

import {
  Controller as FormController,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";

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
  // todo: Пока не нашлось применения в контроллере
  // disabled,
}) => {
  return (
    <FormController
      name={name}
      control={control}
      // ! Добавить локализацию
      rules={{ required: required && `Обязательное поле` }}
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
