import React, { ReactNode } from "react";
import * as S from "./styled";

interface ErrorTextProps {
  children: ReactNode;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  return <S.ErrorText>{children}</S.ErrorText>;
};
