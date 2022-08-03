import React from "react";

import { Route, RouteProps } from "react-router-native";

import { LoadingScreen } from "../../../../components/LoadingScreen";

interface Props extends RouteProps {
  loading: boolean;
  onLogout: () => void;
}

export const PrivateRoute: React.FC<Props> = ({ loading, ...routeProps }) => {
  if (loading) {
    return <LoadingScreen />;
  }

  return <Route {...routeProps} />;
};
