import { useEffect } from "react";

import { NotAuthorizedLayout } from "apps/web/src/components/NotAuthorizedLayout";
import { LinkService } from "apps/web/src/services/LinkService";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { useCoach } from "../../../useCoach";
import { RegisterForm as UncontrolledRegisterForm } from "./RegisterForm";

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    models: { isLogged },
    operations: { register },
  } = useCoach();

  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      return history.push(LinkService.home());
    }
  }, [isLogged, history]);

  return (
    <NotAuthorizedLayout>
      <Helmet>
        <title>{t("Sign up")}</title>
      </Helmet>
      <UncontrolledRegisterForm actions={{ register }} />
    </NotAuthorizedLayout>
  );
};
