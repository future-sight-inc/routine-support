import React from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { TextField } from "apps/mobile/src/components/FormFields/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

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
    <View style={styles.wrapper}>
      <Typography variant="caption2" style={styles.title}>
        Register
      </Typography>
      <TextField control={control} name="name" placeholder="Name" style={styles.textInput} />
      <TextField control={control} name="email" placeholder="Email" style={styles.textInput} />
      <TextField
        control={control}
        name="password"
        placeholder="Password"
        style={styles.textInput}
      />
      <Button text="Register" fullWidth onPress={handleSubmit} />
      {submitError && (
        <Typography variant="text1" color="error">
          {submitError}
        </Typography>
      )}
      <Link to="/coach/login">
        <Typography variant="text1" color="primary">
          Login
        </Typography>
      </Link>
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
