import React from "react";

import { Route, RouteProps } from "react-router-native";

import { Spinner } from "../../../../components/Spinner";

interface Props extends RouteProps {
  loading: boolean;

  onLogout: () => void;
}

export const PrivateRoute: React.FC<Props> = ({ loading, ...routeProps }) => {
  if (loading) {
    return <Spinner />;
  }

  return <Route {...routeProps} />;
};
