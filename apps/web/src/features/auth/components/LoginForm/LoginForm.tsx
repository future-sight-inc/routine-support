import { Card } from "components/Card";
import { TextField } from "components/FormFields/TextField";
import { UserLoginDto } from "features/auth/types";
import { Button } from "features/week/components/AddActivityButton/styled";
import React from "react";
import * as S from "./styled";
import { useLoginFormComponent } from "./useLoginFormComponent";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { FormHelperText, Typography } from "@mui/material";
import { ErrorText } from "components/ErrorText";

export interface LoginFormActions {
  login: (data: UserLoginDto) => void;
}

interface LoginFormProps {
  actions: LoginFormActions;
}

export const LoginForm: React.FC<LoginFormProps> = ({ actions }) => {
  const {
    models: { isSubmitting, submitError, control },
    operations: { onSubmit },
  } = useLoginFormComponent(actions);
  return (
    <Card absoluteCenter>
      <S.Form onSubmit={onSubmit}>
        <S.Title>Routine Support</S.Title>
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
        <Button type="submit">Войти</Button>
        {submitError && <ErrorText>{submitError}</ErrorText>}
      </S.Form>
    </Card>
  );
};
