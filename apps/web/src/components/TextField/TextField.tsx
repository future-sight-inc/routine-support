import React, { InputHTMLAttributes, ReactNode } from "react";

import * as S from "./styled";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  showBorder?: boolean;
  icon?: ReactNode;
  InputElement?: HTMLInputElement;
}

export const TextField: React.FC<TextFieldProps> = ({
  showBorder = true,
  icon,
  InputElement = S.TextField,
  ...props
}) => {
  return (
    <S.Wrapper>
      <InputElement
        {...props}
        showBorder={showBorder}
        withIcon={Boolean(icon)}
      />
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.Wrapper>
  );
};
