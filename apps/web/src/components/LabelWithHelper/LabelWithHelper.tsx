import React, { ReactNode, RefCallback } from "react";

import { LabelWithHelperLocators } from "./locators";
import * as S from "./styled";

interface LabelWithHelperProps {
  ref?: RefCallback<any>;
  helperText?: string;
  children: ReactNode;
}

export const LabelWithHelper: React.FC<LabelWithHelperProps> = ({
  children,
  helperText,
}) => {
  return (
    <S.Wrapper>
      <S.Label data-testid={LabelWithHelperLocators.Label}>{children}</S.Label>
      {helperText && (
        <S.HelpIconWrapper data-testid={LabelWithHelperLocators.HelpIcon}>
          <S.HelpIcon />
          <S.HelperText data-testid={LabelWithHelperLocators.HelperText}>
            {helperText}
          </S.HelperText>
        </S.HelpIconWrapper>
      )}
    </S.Wrapper>
  );
};
