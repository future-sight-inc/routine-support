import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Typography } from "./Typography";

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    flexDirection: "column",
    flexWrap: "wrap",
    width: Dimensions.get("window").width - 32,
  },
  text: {
    paddingBottom: 16,
  },
});

storiesOf("Components", module).add("Typography", () => (
  <View style={styles.layout}>
    <Typography />
  </View>
));
