import { useAuth } from "features/auth/hooks/useAuth";
import { useEffect } from "react";

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
