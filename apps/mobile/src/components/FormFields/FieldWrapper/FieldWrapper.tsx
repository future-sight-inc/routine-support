import React, { ReactNode } from "react";

import { StyleSheet, View } from "react-native";

import { Typography } from "../../Typography";
import { FieldWrapperLocators } from "./locators";

interface FieldWrapperProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, children, error }) => {
  return (
    <View style={styles.wrapper}>
      {label && (
        <Typography
          variant="text2"
          color="secondary"
          style={styles.label}
          testID={FieldWrapperLocators.Label}
        >
          {label}
        </Typography>
      )}
      {children}
      {error && (
        <Typography
          variant="text2"
          color="error"
          style={styles.error}
          testID={FieldWrapperLocators.Error}
        >
          {error}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  label: {
    marginBottom: 4,
  },
  error: {
    marginTop: 4,
    marginBottom: 8,
  },
});
