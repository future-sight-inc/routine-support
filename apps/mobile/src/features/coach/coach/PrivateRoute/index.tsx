import React from "react";

import { LinkService } from "apps/mobile/src/services/LinkService";
import { Redirect, RouteProps } from "react-router-native";

import { PrivateRoute as UncontrolledPrivateRoute } from "../../../../components/PrivateRoute";
import { usePrivateRouteComponent } from "./hooks";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const {
    models: { loading, isLogged, isChecked },
    operations: { logout },
  } = usePrivateRouteComponent();

  if (!isLogged && isChecked) {
    return <Redirect to={LinkService.coach.login()} />;
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
