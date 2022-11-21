import { LinkService } from "apps/mobile/src/services/LinkService";
import { Redirect } from "react-router-native";

import { useCoach } from "../useCoach";
import { Register as UncontrolledRegister } from "./Register";

export const Register: React.FC = () => {
  const {
    models: { isLogged, loading },
    operations: { register },
  } = useCoach();

  if (isLogged) {
    return <Redirect to={LinkService.coach.day} />;
  }

  return <UncontrolledRegister actions={{ register }} loading={loading} />;
};
