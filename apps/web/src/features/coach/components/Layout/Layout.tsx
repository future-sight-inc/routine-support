import React from "react";

import { Coach } from "@routine-support/domains";
import { Footer } from "apps/web/src/components/Footer";
import { Header } from "apps/web/src/components/Header";

import * as S from "./styled";
import { useLayoutComponent } from "./useLayoutComponent";

export interface LayoutActions {
  logout: () => void;
}

interface LayoutProps {
  user: Coach;
  actions: LayoutActions;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, actions }) => {
  const {
    operations: { handleLogout },
  } = useLayoutComponent(actions);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header user={user} onLogout={handleLogout} />
      </S.HeaderWrapper>
      <S.Content>{children}</S.Content>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  );
};
