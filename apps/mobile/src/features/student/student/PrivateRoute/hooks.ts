import { useEffect } from "react";

import { useStudent } from "../useStudent";

export const usePrivateRouteComponent = () => {
  const {
    models: { loading, isLogged, isChecked },
    operations: { getStudent, logout },
  } = useStudent();

  useEffect(() => {
    if (!isLogged && !isChecked) {
      getStudent();
    }
  }, [isLogged, isChecked]);

  return {
    models: { loading, isLogged, isChecked },
    operations: { logout },
  };
};
