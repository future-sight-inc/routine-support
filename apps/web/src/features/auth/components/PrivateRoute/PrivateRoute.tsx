import { useAuth } from "features/auth/hooks/useAuth";
import React, { useEffect } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { LinkService } from "services/LinkService";

interface Props extends RouteProps {}

export const PrivateRoute: React.FC<Props> = (props) => {
  const {
    models: { loading, isLogged, isChecked },
    operations,
  } = useAuth();

  useEffect(() => {
    if (!isLogged && !isChecked) {
      operations.getUser();
    }
  }, [isLogged, isChecked]);

  if (loading) {
    // ! Сделать нормальный лоадер
    return <p>loading</p>;
  }

  if (!isLogged && isChecked) {
    return <Redirect to={LinkService.login()} />;
  }

  return <Route {...props} />;
};
