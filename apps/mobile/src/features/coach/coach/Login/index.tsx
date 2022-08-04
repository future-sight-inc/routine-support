import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Redirect } from "react-router-native";

import { useCoach } from "../useCoach";
import { Login as UncontrolledLogin } from "./Login";

export const Login: React.FC = () => {
  const {
    models: { isLogged, loading },
    operations: { login },
  } = useCoach();
  const insets = useSafeAreaInsets();

  if (isLogged) {
    return <Redirect to="/coach/day" />;
  }

  return <UncontrolledLogin insets={insets} actions={{ login }} loading={loading} />;
};
