import { RouteProps } from "react-router-dom";
import { PrivateRoute as UncontrolledPrivateRoute } from "./PrivateRoute";
import { usePrivateRouteComponent } from "./usePrivateRouteComponent";

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
