import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import { ErrorText } from "apps/web/src/components/ErrorText";

import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";
import { useRegisterFormComponent } from "./useRegisterFormComponent";
import { UserRegisterDto } from "@routine-support/models";
import { LinkService } from "apps/web/src/services/LinkService";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { Card } from "apps/web/src/components/Card";
import { Button } from "apps/web/src/styled/components/Button";

export interface RegisterFormActions {
  register: (data: UserRegisterDto) => void;
}

interface RegisterFormProps {
  actions: RegisterFormActions;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ actions }) => {
  const {
    models: { isSubmitting, submitError, control },
    operations: { onSubmit },
  } = useRegisterFormComponent(actions);
  return (
    <Card absoluteCenter>
      <S.Form onSubmit={onSubmit}>
        <S.Title>Регистрация</S.Title>
        <TextField
          name="name"
          type="text"
          fullWidth
          control={control}
          required
          // ! Локализация
          placeholder="Имя"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
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
        <Link to={LinkService.login()}>Уже есть аккаунт? Вход</Link>
      </S.Form>
    </Card>
  );
};
