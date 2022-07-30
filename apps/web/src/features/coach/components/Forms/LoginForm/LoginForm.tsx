import React from "react";

import { LoginCoachDto } from "@routine-support/domains";
import { ErrorText } from "apps/web/src/components/ErrorText";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { LinkService } from "apps/web/src/services/LinkService";
import { useTranslation } from "react-i18next";

import * as S from "../styled";
import { useLoginFormComponent } from "./hooks";
import { LoginFormLocators } from "./locators";

export interface LoginFormActions {
  login: (data: LoginCoachDto) => void;
}

interface LoginFormProps {
  actions: LoginFormActions;
}

export const LoginForm: React.FC<LoginFormProps> = ({ actions }) => {
  const {
    models: { submitError, control },
    operations: { handleSubmit },
  } = useLoginFormComponent(actions);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>{t("Log in")}</S.Title>
        <S.FieldsWrapper>
          <TextField
            name="email"
            type="email"
            control={control}
            required
            placeholder={t("Email")}
          />
          <TextField
            name="password"
            type="password"
            control={control}
            required
            placeholder={t("Password")}
          />
        </S.FieldsWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton type="submit">{t("Submit")}</S.SubmitButton>
          {submitError && <ErrorText>{submitError}</ErrorText>}
        </S.ButtonWrapper>
        <S.LinkText>
          {t("No account yet")}{" "}
          <S.Link to={LinkService.register()} data-testid={LoginFormLocators.LinkToRegister}>
            {t("Create account")}
          </S.Link>
        </S.LinkText>
      </S.Form>
    </S.Wrapper>
  );
};
