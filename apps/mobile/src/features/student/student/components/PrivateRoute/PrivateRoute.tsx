import React from "react";

import { Redirect, Route, RouteProps } from "react-router-native";

import { Spinner } from "../../../../components/Spinner";

interface Props extends RouteProps {
  loading: boolean;
  isLogged: boolean;
  isChecked: boolean;
  onLogout: () => void;
}

export const PrivateRoute: React.FC<Props> = ({ loading, isLogged, isChecked, ...routeProps }) => {
  if (loading) {
    return <Spinner />;
  }

  if (!isLogged && isChecked) {
    return <Redirect to="/login" />;
  }

  return <Route {...routeProps} />;
};
