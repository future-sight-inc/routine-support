import React, { ReactNode } from "react";

import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { Theme } from "../../theme";
import { Typography } from "../Typography";

interface ErrorMessageProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Typography variant="text2" color="error">
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 34,
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Theme.borderRadius.m,
    backgroundColor: Theme.palette.error.main,
  },
});
