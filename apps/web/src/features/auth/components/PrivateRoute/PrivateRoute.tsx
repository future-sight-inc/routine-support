import { LinkService } from "apps/web/src/services/LinkService";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

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
    // ! Сделать нормальный лоадер
    return <p>loading</p>;
  }

  if (!isLogged && isChecked) {
    return <Redirect to={LinkService.login()} />;
  }

  return <Route {...routeProps} />;
};
