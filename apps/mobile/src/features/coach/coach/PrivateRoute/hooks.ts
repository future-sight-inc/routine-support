import { useEffect } from "react";

import { useCoach } from "../useCoach";

export const usePrivateRouteComponent = () => {
  const {
    models: { loading, isLogged, isChecked },
    operations: { getCoach, logout },
  } = useCoach();

  useEffect(() => {
    if (!isLogged && !isChecked) {
      getCoach();
    }
  }, [isLogged, isChecked]);

  return {
    models: { loading, isLogged, isChecked },
    operations: { logout },
  };
};
