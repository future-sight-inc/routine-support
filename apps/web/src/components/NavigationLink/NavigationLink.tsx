import React, { ReactNode } from "react";

import { useHistory } from "react-router-dom";

import * as S from "./styled";

interface NavigationLinkProps {
  isActive?: boolean;
  icon?: ReactNode;
  to?: string;
  children: ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  icon,
  isActive = false,
  to = "/",
  children,
}) => {
  const history = useHistory();

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
