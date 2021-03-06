import React, { HTMLAttributes } from "react";

import * as S from "./styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  isLoading,
  disabled,
  children,
  ...props
}) => {
  return (
    <S.Wrapper variant={variant} disabled={disabled} type={type} {...props}>
      {isLoading ? <S.Spinner /> : children}
    </S.Wrapper>
  );
};
