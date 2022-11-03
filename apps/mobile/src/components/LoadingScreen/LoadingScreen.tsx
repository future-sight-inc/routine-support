import React from "react";

import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Theme } from "../../theme";

export const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={Theme.palette.primary.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
});
