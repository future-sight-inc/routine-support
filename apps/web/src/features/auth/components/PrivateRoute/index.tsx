import { RouteProps } from "react-router-dom";
import { usePrivateRouteComponent } from "./hooks";
import { PrivateRoute as UncontrolledPrivateRoute } from "./PrivateRoute";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const {
    models: { loading, isLogged, isChecked },
  } = usePrivateRouteComponent();

  return (
    <UncontrolledPrivateRoute
      loading={loading}
      isLogged={isLogged}
      isChecked={isChecked}
      {...props}
    />
  );
};
