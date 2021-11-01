import React from "react";

import { User } from "@routine-support/models";
import { LinkService } from "apps/web/src/services/LinkService";

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
          <S.Links>
            <S.Link to={LinkService.home()}>Календарь</S.Link>
            <S.Link to={LinkService.students()}>Студенты</S.Link>
          </S.Links>
          <UserPopup actions={actions} user={user} />
        </S.HeaderInner>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
