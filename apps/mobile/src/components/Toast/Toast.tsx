import React from "react";

import { Layout, Text } from "@ui-kitten/components";
import { Dimensions, StyleSheet } from "react-native";

interface ToastProps {
  title: string;
  description: string;
}

export const Toast: React.FC<ToastProps> = ({ title, description }) => {
  return (
    <Layout style={styles.wrapper}>
      <Text category="h6" style={styles.title}>
        {title}
      </Text>
      <Text category="s1" style={styles.description}>
        {description}
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get("screen").width - 64,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 5,
  },
  title: {
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
});
