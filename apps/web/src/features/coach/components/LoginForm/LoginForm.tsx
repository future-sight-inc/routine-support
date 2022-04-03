import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import { LoginCoachDto } from "@routine-support/domains";
import { Card } from "apps/web/src/components/Card";
import { ErrorText } from "apps/web/src/components/ErrorText";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { LinkService } from "apps/web/src/services/LinkService";
import { Button } from "apps/web/src/styled/components/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useLoginFormComponent } from "./hooks";
import * as S from "./styled";

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
    <Card absoluteCenter>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>{t("Log in")}</S.Title>
        <TextField
          name="email"
          type="email"
          fullWidth
          control={control}
          required
          placeholder={t("Email")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password"
          type="password"
          fullWidth
          control={control}
          required
          placeholder={t("Password")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit">{t("Submit")}</Button>
        {submitError && <ErrorText>{submitError}</ErrorText>}
        <Link to={LinkService.register()}>{t("Link to register")}</Link>
      </S.Form>
    </Card>
  );
};
