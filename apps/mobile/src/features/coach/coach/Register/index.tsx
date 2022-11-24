import { useNavigation } from "@react-navigation/native";
import { LinkService } from "apps/mobile/src/services/LinkService";

import { useCoach } from "../useCoach";
import { Register as UncontrolledRegister } from "./Register";

export const Register: React.FC = () => {
  const {
    models: { isLogged, loading },
    operations: { register },
  } = useCoach();
  const navigation = useNavigation();

  if (isLogged) {
    navigation.navigate(LinkService.coach.day(), {});
  }

  return <UncontrolledRegister actions={{ register }} loading={loading} />;
};
