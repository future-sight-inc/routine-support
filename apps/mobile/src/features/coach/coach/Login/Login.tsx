import React from "react";

import { LoginCoachDto } from "@routine-support/domains";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { Dimensions, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import { AuthFormLayout } from "../AuthFormLayout";
import { useLoginComponent } from "./hooks";

export interface LoginActions {
  login: (data: LoginCoachDto) => void;
}

interface LoginProps {
  actions: LoginActions;
}

export const Login: React.FC<LoginProps> = ({ actions }) => {
  const {
    models: { submitError, control },
    operations: { handleSubmit },
  } = useLoginComponent(actions);

  return (
    <AuthFormLayout
      title="Войти в Routine Support"
      submitButtonText="Войти"
      onSubmit={handleSubmit}
    >
      <TextField
        control={control}
        name="email"
        placeholder="Почта"
        required
        style={styles.textInput}
      />
      <TextField
        control={control}
        name="password"
        placeholder="Пароль"
        required
        secureTextEntry={true}
        style={styles.textInput}
      />
      {submitError && (
        <Typography variant="text1" color="error">
          {submitError}
        </Typography>
      )}
      <Link to="/coach/register" underlayColor="transparent">
        <Typography variant="text1" color="secondary">
          Еще не зарегистрированы?{" "}
          <Typography variant="text1" color="primary">
            Создать аккаунт
          </Typography>
        </Typography>
      </Link>
    </AuthFormLayout>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
    width: Dimensions.get("screen").width - 32,
  },
});
