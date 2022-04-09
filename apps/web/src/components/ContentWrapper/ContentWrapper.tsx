import React, { ReactNode } from "react";

import * as S from "./styled";

interface ContentWrapperProps {
  loading: boolean;
  error: string | null;
  errorText?: string;
  onReload?: () => void;
  children: ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  loading,
  error,
  errorText,
  onReload,
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
      <S.ErrorText>
        {error || errorText}{" "}
        {onReload && <S.ReloadButton>Перезагрузить</S.ReloadButton>}
      </S.ErrorText>
    );
  }

  return <div>{children}</div>;
};
