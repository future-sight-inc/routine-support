import React from "react";

import { Controller } from "../Controller";
import { FormFieldProps } from "../types";
import * as S from "./styled";

export const ActivityNameInput: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      required={required}
      disabled={disabled}
      render={({ field }) => <S.Input {...field} placeholder={placeholder} />}
    />
  );
};
