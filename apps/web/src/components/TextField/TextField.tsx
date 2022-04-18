import React, { InputHTMLAttributes } from "react";

import { RefCallBack } from "react-hook-form";

import * as S from "./styled";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  ref?: RefCallBack;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <S.TextField {...props} />;
};
