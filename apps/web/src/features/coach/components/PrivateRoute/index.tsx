import { ReactNode } from "react";

import { usePrivateRouteComponent } from "./hooks";
import { PrivateRoute as UncontrolledPrivateRoute } from "./PrivateRoute";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const {
    models: { loading, isLogged, isChecked },
  } = usePrivateRouteComponent();

  return (
    <UncontrolledPrivateRoute loading={loading} isLogged={isLogged} isChecked={isChecked}>
      {children}
    </UncontrolledPrivateRoute>
  );
};
