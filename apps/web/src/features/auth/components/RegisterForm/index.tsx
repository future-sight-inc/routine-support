import { LinkService } from "apps/web/src/services/LinkService";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../useAuth";
import { RegisterForm as UncontrolledRegisterForm } from "./RegisterForm";

export const RegisterForm: React.FC = () => {
  const {
    models: {isLogged},
    operations: { register },
  } = useAuth();

  const history = useHistory();
  useEffect(() => {
    if (isLogged) {
      return history.push(LinkService.home());
    }
  }, [isLogged]);

  return <UncontrolledRegisterForm actions={{ register }} />;
};
