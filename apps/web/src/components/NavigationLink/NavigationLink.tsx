import React, { ReactNode } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styled";

interface NavigationLinkProps {
  icon?: ReactNode;
  to?: string;
  children: ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ icon, to = "/", children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = to === location.pathname;

  const handleClick = () => {
    if (isActive) {
      return;
    }

    navigate(to);
  };

  return (
    <S.Wrapper isActive={isActive} onClick={handleClick}>
      {icon}
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};
