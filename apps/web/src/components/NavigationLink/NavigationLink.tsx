import React, { ReactNode } from "react";

import { useHistory, useLocation } from "react-router-dom";

import * as S from "./styled";

interface NavigationLinkProps {
  icon?: ReactNode;
  to?: string;
  children: ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  icon,
  to = "/",
  children,
}) => {
  const history = useHistory();
  const location = useLocation();
  const isActive = to === location.pathname;

  const handleClick = () => {
    if (isActive) {
      return;
    }

    history.push(to);
  };

  return (
    <S.Wrapper isActive={isActive} onClick={handleClick}>
      {icon}
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};
