import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleSheet, TextInput, View } from "react-native";

export const Login: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Typography variant='caption4'>Login</Typography>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 32,
  },
});
