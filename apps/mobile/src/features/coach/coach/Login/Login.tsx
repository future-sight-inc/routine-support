import React from "react";

import { Link } from "@react-navigation/native";
import { LoginCoachDto } from "@routine-support/domains";
import { useCoachLoginForm } from "@routine-support/forms";
import { AuthFormLayout } from "apps/mobile/src/components/AuthFormLayout";
import { ErrorMessage } from "apps/mobile/src/components/ErrorMessage";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { Dimensions, StyleSheet, View } from "react-native";

export interface LoginActions {
  login: (data: LoginCoachDto) => Promise<void>;
}

interface LoginProps {
  actions: LoginActions;
  loading: boolean;
}

export const Login: React.FC<LoginProps> = ({ actions, loading }) => {
  const {
    models: { submitError, control },
    operations: { handleSubmit },
  } = useCoachLoginForm(actions);

  return (
    <AuthFormLayout
      authRole="coach"
      caption={
        <Link to={{ screen: LinkService.coach.register(), params: {} }}>
          <Typography variant="text1" color="secondary">
            Еще не зарегистрированы?{" "}
            <Typography variant="text1" color="primary">
              Создать аккаунт
            </Typography>
          </Typography>
        </Link>
      }
      submitButtonText="Войти"
      onSubmit={handleSubmit}
      loading={loading}
    >
      <View style={styles.fieldWrapper}>
        <TextField
          control={control}
          name="email"
          placeholder="Почта"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          required
          disabled={loading}
          style={styles.textInput}
        />
      </View>
      <View style={styles.fieldWrapper}>
        <TextField
          control={control}
          name="password"
          placeholder="Пароль"
          required
          secureTextEntry={true}
          disabled={loading}
          style={styles.textInput}
        />
      </View>
      {submitError && <ErrorMessage style={styles.errorMessage}>{submitError}</ErrorMessage>}
    </AuthFormLayout>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: Dimensions.get("screen").width - 32,
  },
  fieldWrapper: {
    marginBottom: 16,
  },
  errorMessage: {
    marginBottom: 16,
  },
});
