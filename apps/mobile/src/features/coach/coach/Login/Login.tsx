import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { TextField } from "apps/mobile/src/components/TextField";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleSheet, View } from "react-native";

export const Login: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Typography variant="caption2" style={styles.title}>
        Login
      </Typography>

      <TextField placeholder="Email" style={styles.textInput} />
      <TextField placeholder="Password" style={styles.textInput} />

      <Button text="Login" fullWidth />
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
