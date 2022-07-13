import React from "react";

import { storiesOf } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";

import { TextField } from "./TextField";

storiesOf("Components", module).add("TextField", () => {
  return (
    <View style={styles.textField}>
      <TextField placeholder="Some placeholder" style={styles.textField} />
      <TextField value="With value" style={styles.textField} />
      <TextField value="With error" error style={styles.textField} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { flexDirection: "column" },
  textField: { margin: 8 },
});
