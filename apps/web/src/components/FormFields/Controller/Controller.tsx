import React, { ReactElement } from "react";

import Popover from "@mui/material/Popover";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
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
  helperText,
}) => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const { t } = useTranslation();

  return (
    <>
      <FormController
        name={name}
        control={control}
        rules={{ required: required && t<string>("Required field") }}
        render={({ field, fieldState, formState }) => (
          <S.Wrapper>
            {label && (
              <S.Label ref={field.ref} error={Boolean(fieldState.error)}>
                {label}
                {helperText && <S.HelpIcon {...bindTrigger(popupState)} />}
              </S.Label>
            )}
            {render({ field, fieldState, formState })}
            {fieldState.error && <S.Error>{fieldState.error.message}</S.Error>}
          </S.Wrapper>
        )}
      />
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <S.HelperText>{helperText}</S.HelperText>
      </Popover>
    </>
  );
};
