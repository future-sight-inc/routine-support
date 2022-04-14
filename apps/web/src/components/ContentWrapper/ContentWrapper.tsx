import React, { ReactNode } from "react";

import * as S from "./styled";

interface ContentWrapperProps {
  loading: boolean;
  error: string | null;
  children: ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  loading,
  error,
  children,
}) => {
  if (loading) {
    return (
      <S.SpinnerWrapper>
        <S.Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (error) {
    return (
      <S.ErrorWrapper>
        <S.ErrorText>{error}</S.ErrorText>
      </S.ErrorWrapper>
    );
  }

  return <div>{children}</div>;
};
