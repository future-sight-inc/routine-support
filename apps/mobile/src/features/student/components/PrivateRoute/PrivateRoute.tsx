import React from "react";

import { Layout, Spinner } from "@ui-kitten/components";
import { Redirect, Route, RouteProps } from "react-router-native";


interface Props extends RouteProps {
  loading: boolean;
  isLogged: boolean;
  isChecked: boolean;
  onLogout: () => void;
}

export const PrivateRoute: React.FC<Props> = ({
  loading,
  isLogged,
  isChecked,
  onLogout,
  ...routeProps
}) => {
  if (loading) {
    return (
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Spinner />
      </Layout>
    );
  }

  if (!isLogged && isChecked) {
    return <Redirect to="/login" />;
  }

  return <Route {...routeProps} />;
};
