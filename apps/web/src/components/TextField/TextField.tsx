import React, { InputHTMLAttributes, MutableRefObject } from "react";

import * as S from "./styled";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  ref?: MutableRefObject<HTMLInputElement | null>;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <S.TextField {...props} />;
};
