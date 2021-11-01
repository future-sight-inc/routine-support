import { User } from "@routine-support/models";
import React from "react";
import { UserPopup } from "./components/UserPopup";

import * as S from "./styled";

interface UserPopupActions {
  logout: () => void;
}

interface LayoutProps {
  user: User;
  actions: UserPopupActions;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, actions }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInner>
          <UserPopup actions={actions} user={user} />
        </S.HeaderInner>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
