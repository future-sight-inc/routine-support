import React, { ReactNode, RefCallback } from "react";

import { TypographyVariant } from "@routine-support/ui-theme";

import { LabelWithHelperLocators } from "./locators";
import * as S from "./styled";

interface LabelWithHelperProps {
  ref?: RefCallback<any>;
  helperText?: string;
  color?: "secondary" | "normal";
  children: ReactNode;
  variant?: TypographyVariant;
}

export const LabelWithHelper: React.FC<LabelWithHelperProps> = ({
  color = "secondary",
  variant = "text2",
  children,
  helperText,
}) => {
  return (
    <S.Wrapper>
      <S.Label color={color} data-testid={LabelWithHelperLocators.Label} variant={variant}>
        {children}
      </S.Label>
      {helperText && (
        <S.HelpIconWrapper data-testid={LabelWithHelperLocators.HelpIcon}>
          <S.HelpIcon />
          <S.HelperText data-testid={LabelWithHelperLocators.HelperText} variant={variant}>
            {helperText}
          </S.HelperText>
        </S.HelpIconWrapper>
      )}
    </S.Wrapper>
  );
};
