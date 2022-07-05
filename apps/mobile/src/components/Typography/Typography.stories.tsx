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
    <Typography variant="caption1" style={styles.text}>
      Caption1/48px/semi bold
    </Typography>
    <Typography variant="caption2" style={styles.text}>
      Caption2/30px/semi bold
    </Typography>
    <Typography variant="caption3" style={styles.text}>
      Caption3/24px/semi bold
    </Typography>
    <Typography variant="caption4" style={styles.text}>
      Caption4/20px/semi bold
    </Typography>
    <Typography variant="caption1Normal" style={styles.text}>
      Caption1Normal/48px/normal
    </Typography>
    <Typography variant="caption2Normal" style={styles.text}>
      Caption2Normal/30px/normal
    </Typography>
    <Typography variant="caption3Normal" style={styles.text}>
      Caption3Normal/24px/normal
    </Typography>
    <Typography variant="caption4Normal" style={styles.text}>
      Caption4Normal/20px/normal
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
