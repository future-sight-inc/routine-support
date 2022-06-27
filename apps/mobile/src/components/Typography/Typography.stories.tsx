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
    <Typography variant="caption4" style={styles.text}>
      Caption4/20px/bold
    </Typography>
    <Typography variant="text1" style={styles.text}>
      Text1/16px/normal
    </Typography>
    <Typography variant="text2" style={styles.text}>
      Text2/14px/normal
    </Typography>
    <Typography variant="text3" style={styles.text}>
      Text3/12px/normal
    </Typography>
    <Typography variant="text1Bold" style={styles.text}>
      Text1Bold/16px/bold
    </Typography>
    <Typography variant="text2Bold" style={styles.text}>
      Text2Bold/14px/bold
    </Typography>
    <Typography variant="text3Bold" style={styles.text}>
      Text3Bold/12px/bold
    </Typography>
    <Typography variant="text2" style={styles.text}>
      Normal
    </Typography>
    <Typography variant="text2" color="primary" style={styles.text}>
      Primary
    </Typography>
    <Typography variant="text2" color="secondary" style={styles.text}>
      Secondary
    </Typography>
    <Typography variant="text2" color="error" style={styles.text}>
      Error
    </Typography>
  </View>
));
