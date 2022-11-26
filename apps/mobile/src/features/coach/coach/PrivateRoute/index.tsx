import React, { FC } from "react";

import { LinkService } from "apps/mobile/src/services/LinkService";

import { PrivateRoute as UncontrolledPrivateRoute } from "../../../../components/PrivateRoute";
import { usePrivateRouteComponent } from "./hooks";

interface PrivateRouteProps {
  name: string;
  component: FC;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ name, component }) => {
  const {
    models: { loading, isLogged, isChecked },
  } = usePrivateRouteComponent();

  return (
    <UncontrolledPrivateRoute
      name={name}
      component={component}
      loading={loading}
      isLogged={isLogged}
      isChecked={isChecked}
      redirectPath={LinkService.coach.login()}
    />
  );
};
