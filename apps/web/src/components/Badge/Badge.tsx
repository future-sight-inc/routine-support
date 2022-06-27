import React, { ReactNode } from "react";

import { Theme } from "@routine-support/ui-theme";


import * as S from "./styled";

export type BadgeColor = "primary" | "alert";

export type TextColor = "black" | "white";

interface BadgeProps {
  color?: BadgeColor;
  textColor?: TextColor;
  children: ReactNode;
  dataTestId?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  color,
  textColor,
  children,
  dataTestId,
}) => {
  const getColorOfBadge = (color?: BadgeColor) => {
    switch (color) {
    case "primary":
      return Theme.palette.primary.main;
    case "alert":
      return Theme.palette.common.red;
    default:
      return Theme.palette.primary.main;
    }
  };

  const getColorOfText = (textColor?: TextColor) => {
    switch (textColor) {
    case "black":
      return Theme.palette.common.black;
    case "white":
      return Theme.palette.common.white;
    default:
      return Theme.palette.common.white;
    }
  };

  return (
    <S.Wrapper color={getColorOfBadge(color)} data-testid={dataTestId}>
      <S.InnerText textColor={getColorOfText(textColor)}>
        {children}
      </S.InnerText>
    </S.Wrapper>
  );
};
