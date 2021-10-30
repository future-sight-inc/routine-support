import { useAuth } from "../../useAuth";
import { LoginForm as UncontrolledLoginForm } from "./LoginForm";

export const LoginForm: React.FC = () => {
  const {
    operations: { login },
  } = useAuth();

  return <UncontrolledLoginForm actions={{ login }} />;
};
