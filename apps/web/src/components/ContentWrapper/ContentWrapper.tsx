import React, { ReactNode } from "react";


import * as S from "./styled";

interface ContentWrapperProps {
  loading: boolean;
  error: string | null;
  errorText?: string;
  empty?: boolean;
  emptyText?: string;
  onReload?: () => void;
  children: ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  loading,
  error,
  errorText,
  empty,
  emptyText,
  onReload,
  children,
}) => {
  if (loading) {
    return <S.Spinner />;
  }

  if (error) {
    return (
      <S.ErrorText>
        {error || errorText}{" "}
        {onReload && <S.ReloadButton>Перезагрузить</S.ReloadButton>}
      </S.ErrorText>
    );
  }

  if (empty) {
    return <S.EmptyText>{emptyText}</S.EmptyText>;
  }

  return <div>{children}</div>;
};
