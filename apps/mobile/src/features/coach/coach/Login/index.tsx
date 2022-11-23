import { LinkService } from "apps/mobile/src/services/LinkService";
import { Redirect } from "react-router-native";

import { useCoach } from "../useCoach";
import { Login as UncontrolledLogin } from "./Login";

export const Login: React.FC = () => {
  const {
    models: { isLogged, loading },
    operations: { login },
  } = useCoach();

  if (isLogged) {
    return <Redirect to={LinkService.coach.day()} />;
  }

  return <UncontrolledLogin actions={{ login }} loading={loading} />;
};
