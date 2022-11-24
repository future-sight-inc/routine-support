import React, { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Redirect } from "react-router-native";

import { LoadingScreen } from "../LoadingScreen";

interface Props {
  name: string;
  isLogged: boolean;
  isChecked: boolean;
  loading: boolean;
  component: FC;
  redirectPath: string;
}

const Stack = createNativeStackNavigator();

export const PrivateRoute: React.FC<Props> = ({
  name,
  isLogged,
  isChecked,
  loading,
  component: Component,
  redirectPath,
  ...routeProps
}) => {
  const renderInner = () => {
    if (loading) {
      return <LoadingScreen />;
    }

    if (!isLogged && isChecked) {
      return <Redirect to={redirectPath} />;
    }

    return <Component />;
  };

  return <Stack.Screen name={name} {...routeProps} component={renderInner} />;
};
