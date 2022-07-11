import React from "react";

import { LoginCoachDto } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleSheet, View } from "react-native";

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
    <View style={styles.wrapper}>
      <Typography variant="caption2" style={styles.title}>
        Login
      </Typography>

      <TextField control={control} name="email" placeholder="Email" style={styles.textInput} />
      <TextField
        control={control}
        name="password"
        placeholder="Password"
        style={styles.textInput}
      />

      <Button text="Login" fullWidth onPress={handleSubmit} />
      {submitError && (
        <Typography variant="text1" color="error">
          {submitError}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  title: { marginBottom: 16 },

  textInput: {
    marginBottom: 16,
  },
});
