import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import { UserLoginDto } from "@routine-support/models";
import { Card } from "apps/web/src/components/Card";
import { ErrorText } from "apps/web/src/components/ErrorText";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { LinkService } from "apps/web/src/services/LinkService";
import { Button } from "apps/web/src/styled/components/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useLoginFormComponent } from "./hooks";
import * as S from "./styled";

export interface LoginFormActions {
  login: (data: UserLoginDto) => void;
}

interface LoginFormProps {
  actions: LoginFormActions;
}

export const LoginForm: React.FC<LoginFormProps> = ({ actions }) => {
  const {
    models: { isSubmitting, submitError, control },
    operations: { handleSubmit },
  } = useLoginFormComponent(actions);
  return (
    <Card absoluteCenter>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Вход</S.Title>
        <TextField
          name="email"
          type="email"
          fullWidth
          control={control}
          required
          // ! Локализация
          placeholder="Почта"
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
          // ! Локализация
          placeholder="Пароль"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit">Отправить</Button>
        {submitError && <ErrorText>{submitError}</ErrorText>}
        <Link to={LinkService.register()}>
          Нет аккаунта? Зарегистрироваться
        </Link>
      </S.Form>
    </Card>
  );
};
