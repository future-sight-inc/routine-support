import React, { ReactNode } from "react";

import * as S from "./styled";

interface CardProps {
  children: ReactNode;
  absoluteCenter?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, absoluteCenter }) => {
  return <S.Wrapper absoluteCenter={absoluteCenter}>{children}</S.Wrapper>;
};
