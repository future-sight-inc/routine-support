import { useAuth } from "features/auth/hooks/useAuth";
import { RegisterForm as UncontrolledRegisterForm } from "./RegisterForm";

export const RegisterForm: React.FC = () => {
  const {
    operations: { register },
  } = useAuth();

  return <UncontrolledRegisterForm actions={{ register }} />;
};
