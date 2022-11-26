import React from "react";

import { Dimensions, StyleSheet, View } from "react-native";

import { Theme } from "../../theme";
import { Typography } from "../Typography";

interface ToastProps {
  title: string;
  description: string;
}

export const Toast: React.FC<ToastProps> = ({ title, description }) => {
  return (
    <View style={styles.wrapper}>
      <Typography variant="caption4" style={styles.title}>
        {title}
      </Typography>
      <Typography variant="text1" style={styles.description}>
        {description}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get("screen").width - 64,
    padding: 16,
    backgroundColor: Theme.palette.common.white,
    borderRadius: Theme.borderRadius.m,
  },
  title: {
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
});
