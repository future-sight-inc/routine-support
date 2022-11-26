import React from "react";

import { LinkService } from "apps/mobile/src/services/LinkService";
import { RouteProps } from "react-router-native";

import { PrivateRoute as UncontrolledPrivateRoute } from "../../../../components/PrivateRoute";
import { usePrivateRouteComponent } from "./hooks";

export const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const {
    models: { loading, isLogged, isChecked },
  } = usePrivateRouteComponent();

  return (
    <UncontrolledPrivateRoute
      loading={loading}
      isLogged={isLogged}
      isChecked={isChecked}
      redirectPath={LinkService.student.login()}
      {...props}
    />
  );
};
