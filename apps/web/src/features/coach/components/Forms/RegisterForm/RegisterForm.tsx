import React from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { ErrorText } from "apps/web/src/components/ErrorText";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { LinkService } from "apps/web/src/services/LinkService";
import { Button } from "apps/web/src/styled/components/Button";
import { useTranslation } from "react-i18next";

import * as S from "../styled";
import { useRegisterFormComponent } from "./hooks";

export interface RegisterFormActions {
  register: (data: RegisterCoachDto) => void;
}

interface RegisterFormProps {
  actions: RegisterFormActions;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ actions }) => {
  const {
    models: { submitError, control },
    operations: { handleSubmit },
  } = useRegisterFormComponent(actions);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>{t("Sign up")}</S.Title>
        <S.FieldsWrapper>
          <TextField
            name="name"
            type="text"
            control={control}
            required
            placeholder={t("Name")}
          />
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
          <Button type="submit">{t("Submit")}</Button>
          {submitError && <ErrorText>{submitError}</ErrorText>}
        </S.ButtonWrapper>
        <S.LinkText>
          Have an account? <S.Link to={LinkService.login()}>Login</S.Link>
        </S.LinkText>
      </S.Form>
    </S.Wrapper>
  );
};
