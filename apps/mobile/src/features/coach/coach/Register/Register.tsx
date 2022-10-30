import React from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { ErrorMessage } from "apps/mobile/src/components/ErrorMessage";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { Dimensions, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import { AuthFormLayout } from "../AuthFormLayout";
import { useRegisterComponent } from "./hooks";

export interface RegisterActions {
  register: (data: RegisterCoachDto) => void;
}

interface RegisterProps {
  actions: RegisterActions;
  loading: boolean;
}

export const Register: React.FC<RegisterProps> = ({ actions, loading }) => {
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
      loading={loading}
    >
      <View style={styles.fieldWrapper}>
        <TextField
          control={control}
          name="name"
          placeholder="Имя"
          required
          style={styles.textInput}
          disabled={loading}
        />
      </View>
      <View style={styles.fieldWrapper}>
        <TextField
          control={control}
          name="email"
          placeholder="Почта"
          required
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          disabled={loading}
        />
      </View>
      <View style={styles.fieldWrapper}>
        <TextField
          control={control}
          name="password"
          placeholder="Пароль"
          required
          secureTextEntry={true}
          style={styles.textInput}
          disabled={loading}
        />
      </View>
      {submitError && <ErrorMessage style={styles.errorMessage}>{submitError}</ErrorMessage>}
      <Link to={LinkService.coach.login()} underlayColor="transparent">
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
  fieldWrapper: {
    marginBottom: 16,
  },
  errorMessage: {
    marginBottom: 16,
  },
});
