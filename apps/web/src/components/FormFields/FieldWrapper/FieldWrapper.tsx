import React from "react";

import { FieldWrapperProps } from "@routine-support/forms";

import { LabelWithHelper } from "../../LabelWithHelper";
import * as S from "./styled";

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  fieldRef,
  helperText,
  children,
  error,
}) => {
  return (
    <S.Wrapper>
      {label && (
        <LabelWithHelper ref={fieldRef} helperText={helperText}>
          {label}
        </LabelWithHelper>
      )}
      {children}
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
