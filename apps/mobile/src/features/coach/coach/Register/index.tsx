import { useEffect } from "react";

import { useHistory } from "react-router-native";

import { useCoach } from "../useCoach";
import { Register as UncontrolledRegister } from "./Register";

export const Register: React.FC = () => {
  const {
    models: { isLogged },
    operations: { register },
  } = useCoach();

  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      // todo use link service
      return history.push("/coach/day");
    }
  }, [isLogged, history]);

  return <UncontrolledRegister actions={{ register }} />;
};
