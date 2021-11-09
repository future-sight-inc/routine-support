import { useEffect } from "react";

import { useUser } from "../../useUser";

export const usePrivateRouteComponent = () => {
  const {
    models: { loading, isLogged, isChecked },
    operations,
  } = useUser();

  useEffect(() => {
    if (!isLogged && !isChecked) {
      operations.getUser();
    }
  }, [isLogged, isChecked, operations]);

  return {
    models: { loading, isLogged, isChecked },
  };
};
