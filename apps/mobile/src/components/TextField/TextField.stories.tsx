import React from "react";

import { storiesOf } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";

import { Theme } from "../../theme";
import { TextField } from "./TextField";

storiesOf("Components", module).add("TextField", () => {
  return (
    <View style={styles.textField}>
      <TextField placeholder="Some placeholder" style={styles.textField} />
      <TextField value="With value" style={styles.textField} />
      <TextField value="With error" error style={styles.textField} />
      <TextField value="With custom styles" style={[styles.textField, styles.customField]} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { flexDirection: "column" },
  textField: { margin: 8 },
  customField: {
    borderWidth: 0,
    paddingHorizontal: 0,
    fontSize: Theme.fonts.caption4.size,
    fontWeight: Theme.fonts.caption4.weight,
  },
});
