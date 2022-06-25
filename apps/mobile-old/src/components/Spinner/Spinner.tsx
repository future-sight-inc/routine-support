import React from "react";

import { Layout, Spinner as UISpinner } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const Spinner: React.FC = () => {
  return (
    <Layout style={styles.wrapper}>
      <UISpinner />
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
});
