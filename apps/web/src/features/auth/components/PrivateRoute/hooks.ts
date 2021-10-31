import { useEffect } from "react";
import { useAuth } from "../../useAuth";

export const usePrivateRouteComponent = () => {
  const {
    models: { loading, isLogged, isChecked },
    operations,
  } = useAuth();

  useEffect(() => {
    if (!isLogged && !isChecked) {
      operations.getUser();
    }
  }, [isLogged, isChecked]);

  return {
    models: { loading, isLogged, isChecked },
  };
};
