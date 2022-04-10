import React from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { Card } from "apps/web/src/components/Card";
import { ErrorText } from "apps/web/src/components/ErrorText";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { LinkService } from "apps/web/src/services/LinkService";
import { Button } from "apps/web/src/styled/components/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useRegisterFormComponent } from "./hooks";
import * as S from "./styled";

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
    <Card absoluteCenter>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>{t("Sign up")}</S.Title>
        <TextField
          name="name"
          type="text"
          // fullWidth
          control={control}
          required
          placeholder={t("Name")}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <PersonIcon />
          //     </InputAdornment>
          //   ),
          // }}
        />
        <TextField
          name="email"
          type="email"
          // fullWidth
          control={control}
          required
          placeholder={t("Email")}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <EmailIcon />
          //     </InputAdornment>
          //   ),
          // }}
        />
        <TextField
          name="password"
          type="password"
          // fullWidth
          control={control}
          required
          placeholder={t("Password")}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <LockIcon />
          //     </InputAdornment>
          //   ),
          // }}
        />
        <Button type="submit">{t("Submit")}</Button>
        {submitError && <ErrorText>{submitError}</ErrorText>}
        <Link to={LinkService.login()}>{t("Link to sign in")}</Link>
      </S.Form>
    </Card>
  );
};
