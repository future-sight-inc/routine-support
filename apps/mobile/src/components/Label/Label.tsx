import React, { ReactNode } from "react";

import { StyleSheet, View } from "react-native";

import { Typography } from "../Typography";

interface LabelProps {
  text: string;
  children: ReactNode;
}

export const Label: React.FC<LabelProps> = ({ text, children }) => {
  return (
    <View style={styles.wrapper}>
      <Typography style={styles.label} variant="text2" color="secondary">
        {text}
      </Typography>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "column" },
  label: { marginBottom: 4 },
});
