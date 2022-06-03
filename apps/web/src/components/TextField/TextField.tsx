import React, { InputHTMLAttributes } from "react";

import * as S from "./styled";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <S.TextField {...props} />;
};
