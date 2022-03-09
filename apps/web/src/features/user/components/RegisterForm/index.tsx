import { useEffect } from "react";

import { NotAuthorizedLayout } from "apps/web/src/components/NotAuthorizedLayout";
import { LinkService } from "apps/web/src/services/LinkService";
import { useHistory } from "react-router-dom";

import { useUser } from "../../useUser";
import { RegisterForm as UncontrolledRegisterForm } from "./RegisterForm";

export const RegisterForm: React.FC = () => {
  const {
    models: { isLogged },
    operations: { register },
  } = useUser();

  const history = useHistory();
  useEffect(() => {
    if (isLogged) {
      return history.push(LinkService.home());
    }
  }, [isLogged, history]);

  return (
    <NotAuthorizedLayout>
      <UncontrolledRegisterForm actions={{ register }} />
    </NotAuthorizedLayout>
  );
};
