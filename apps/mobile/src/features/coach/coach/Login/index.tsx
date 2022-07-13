import { useEffect } from "react";

import { useHistory } from "react-router-native";

import { useCoach } from "../useCoach";
import { Login as UncontrolledLogin } from "./Login";

export const Login: React.FC = () => {
  const {
    models: { isLogged },
    operations: { login },
  } = useCoach();

  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      // todo use link service
      return history.push("/coach/day");
    }
  }, [isLogged, history]);

  return <UncontrolledLogin actions={{ login }} />;
};
