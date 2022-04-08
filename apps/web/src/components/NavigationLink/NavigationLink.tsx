import React, { ReactNode } from "react";

import * as S from "./styled";

interface NavigationLinkProps {
  isActive?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  icon,
  isActive = false,
  children,
}) => {
  return (
    <S.Wrapper isActive={isActive}>
      {icon}
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};
