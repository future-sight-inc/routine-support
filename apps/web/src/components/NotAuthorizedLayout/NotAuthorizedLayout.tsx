import React, { ReactNode } from "react";

import { Footer } from "../Footer";
import * as S from "./styled";

interface NotAuthorizedLayoutProps {
  children: ReactNode;
}

export const NotAuthorizedLayout: React.FC<NotAuthorizedLayoutProps> = ({
  children,
}) => {
  return (
    <S.Wrapper>
      {children}
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  );
};
