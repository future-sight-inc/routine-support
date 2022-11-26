import React, { ReactNode } from "react";

import { CircularProgress } from "@mui/material";
import { LinkService } from "apps/web/src/services/LinkService";
import { Navigate } from "react-router-dom";

import { MainLayout } from "../MainLayout";
import * as S from "./styled";

interface PrivateRouteProps {
  loading: boolean;
  isLogged: boolean;
  isChecked: boolean;
  children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  loading,
  isLogged,
  isChecked,
  children,
}) => {
  if (loading) {
    return (
      <S.LoaderWrapper>
        <CircularProgress />
      </S.LoaderWrapper>
    );
  }

  if (!isLogged && isChecked) {
    return <Navigate to={LinkService.login()} />;
  }

  return <MainLayout>{children}</MainLayout>;
};
