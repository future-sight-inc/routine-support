import React from "react";

import { Redirect, RouteProps } from "react-router-native";

import { usePrivateRouteComponent } from "./hooks";
import { PrivateRoute as UncontrolledPrivateRoute } from "./PrivateRoute";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const {
    models: { loading, isLogged, isChecked },
    operations: { logout },
  } = usePrivateRouteComponent();

  if (!isLogged && isChecked) {
    return <Redirect to="/coach/login" />;
  }

  return (
    <UncontrolledPrivateRoute
      loading={loading}
      isLogged={isLogged}
      isChecked={isChecked}
      onLogout={logout}
      {...props}
    />
  );
};
