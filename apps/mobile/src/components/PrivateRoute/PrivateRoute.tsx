import React, { ReactNode } from "react";

import { Redirect, Route, RouteProps } from "react-router-native";

import { LoadingScreen } from "../LoadingScreen";

interface Props extends RouteProps {
  isLogged: boolean;
  isChecked: boolean;
  loading: boolean;
  children: ReactNode;
  redirectPath: string;
}

export const PrivateRoute: React.FC<Props> = ({
  isLogged,
  isChecked,
  loading,
  children,
  redirectPath,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={() => {
        if (loading) {
          return <LoadingScreen />;
        }

        if (!isLogged && isChecked) {
          return <Redirect to={redirectPath} />;
        }

        return children;
      }}
    />
  );
};
