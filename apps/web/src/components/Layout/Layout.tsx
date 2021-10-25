import React from "react";

import * as S from "./styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
