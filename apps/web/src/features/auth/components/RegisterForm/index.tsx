import { useAuth } from "../../useAuth";
import { RegisterForm as UncontrolledRegisterForm } from "./RegisterForm";

export const RegisterForm: React.FC = () => {
  const {
    operations: { register },
  } = useAuth();

  return <UncontrolledRegisterForm actions={{ register }} />;
};
