import { useEffect } from "react";

import { LinkService } from "apps/mobile/src/services/LinkService";
import { useHistory } from "react-router-native";

import { useCoach } from "../useCoach";
import { Register as UncontrolledRegister } from "./Register";

export const Register: React.FC = () => {
  const {
    models: { isLogged, loading },
    operations: { register },
  } = useCoach();

  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      return history.push(LinkService.coach.day());
    }
  }, [isLogged, history]);

  return <UncontrolledRegister actions={{ register }} loading={loading} />;
};
