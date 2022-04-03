import { useEffect } from "react";

import { useCoach } from "../../useCoach";

export const usePrivateRouteComponent = () => {
  const {
    models: { loading, isLogged, isChecked },
    operations,
  } = useCoach();

  useEffect(() => {
    if (!isLogged && !isChecked) {
      operations.getCoach();
    }
  }, [isLogged, isChecked, operations]);

  return {
    models: { loading, isLogged, isChecked },
  };
};
