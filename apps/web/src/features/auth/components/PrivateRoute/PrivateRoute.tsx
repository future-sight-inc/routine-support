import { CircularProgress } from "@mui/material";
import { LinkService } from "apps/web/src/services/LinkService";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import * as S from "./styled";
interface Props extends RouteProps {
  loading: boolean;
  isLogged: boolean;
  isChecked: boolean;
}

export const PrivateRoute: React.FC<Props> = ({
  loading,
  isLogged,
  isChecked,
  ...routeProps
}) => {
  if (loading) {
    return (
      <S.LoaderWrapper>
        <CircularProgress />
      </S.LoaderWrapper>
    );
  }

  if (!isLogged && isChecked) {
    return <Redirect to={LinkService.login()} />;
  }

  return <Route {...routeProps} />;
};
