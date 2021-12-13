import React from "react";

import { RouteProps } from "react-router-native";

import { usePrivateRouteComponent } from "./hooks";
import { PrivateRoute as UncontrolledPrivateRoute } from "./PrivateRoute";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const {
    models: { loading, isLogged, isChecked },
    operations: { logout },
  } = usePrivateRouteComponent();

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
