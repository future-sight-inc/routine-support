import { LinkService } from "apps/web/src/services/LinkService";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../useAuth";
import { LoginForm as UncontrolledLoginForm } from "./LoginForm";

export const LoginForm: React.FC = () => {
  const {
    models: { isLogged },
    operations: { login },
  } = useAuth();

  const history = useHistory();
  useEffect(() => {
    if (isLogged) {
      return history.push(LinkService.home());
    }
  }, [isLogged]);

  return <UncontrolledLoginForm actions={{ login }} />;
};
