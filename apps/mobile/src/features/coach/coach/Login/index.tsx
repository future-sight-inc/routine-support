import { useNavigation } from "@react-navigation/native";
import { LinkService } from "apps/mobile/src/services/LinkService";

import { useCoach } from "../useCoach";
import { Login as UncontrolledLogin } from "./Login";

export const Login: React.FC = () => {
  const {
    models: { isLogged, loading },
    operations: { login },
  } = useCoach();
  const navigation = useNavigation();

  if (isLogged) {
    navigation.navigate(LinkService.coach.day(), {});
  }

  return <UncontrolledLogin actions={{ login }} loading={loading} />;
};
