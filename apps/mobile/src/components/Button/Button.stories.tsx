import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Dimensions, StyleSheet, View } from "react-native";

import { Button } from "./Button";

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    width: Dimensions.get("window").width - 32,
  },
  button: {
    marginLeft: 16,
    marginBottom: 8,
  },
});

storiesOf("Components", module).add("Button", () => (
  <>
    <View style={styles.layout}>
      <Button style={styles.button} text="Primary Button" />
      <Button variant="secondary" style={styles.button} text="Secondary Button" />
    </View>
    <View style={styles.layout}>
      <Button style={styles.button} text="Disabled Primary" disabled />
      <Button variant="secondary" style={styles.button} text="Disabled Secondary" disabled />
    </View>
    <View style={styles.layout}></View>
    <View style={styles.layout}>
      <Button style={styles.button} text="With Icon" icon="add" />
    </View>
    <View style={styles.layout}>
      <Button style={styles.button} text="Loading" loading />
      <Button style={styles.button} variant="secondary" text="Loading" loading />
    </View>
  </>
));
