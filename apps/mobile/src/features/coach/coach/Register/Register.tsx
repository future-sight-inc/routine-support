import React from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { Dimensions, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import { AuthFormLayout } from "../AuthFormLayout";
import { useRegisterComponent } from "./hooks";

export interface RegisterActions {
  register: (data: RegisterCoachDto) => void;
}

interface RegisterProps {
  actions: RegisterActions;
}

export const Register: React.FC<RegisterProps> = ({ actions }) => {
  const {
    models: { submitError, control },
    operations: { handleSubmit },
  } = useRegisterComponent(actions);

  return (
    <AuthFormLayout
      title="Зарегистрироваться
    в Routine Support"
      submitButtonText="Зарегистрироваться"
      onSubmit={handleSubmit}
    >
      <TextField control={control} name="name" placeholder="Имя" style={styles.textInput} />
      <TextField control={control} name="email" placeholder="Почта" style={styles.textInput} />
      <TextField
        control={control}
        name="password"
        placeholder="Пароль"
        secureTextEntry={true}
        style={styles.textInput}
      />
      {submitError && (
        <Typography variant="text1" color="error">
          {submitError}
        </Typography>
      )}
      <Link to="/coach/login">
        <Typography variant="text1" color="secondary">
          Уже зарегистрированы?{" "}
          <Typography variant="text1" color="primary">
            Войти
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
