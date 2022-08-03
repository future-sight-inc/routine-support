import React from "react";

import { ActivityIndicator, StyleSheet, View } from "react-native";

import { MobileTheme } from "../../theme";

export const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={MobileTheme.palette.primary.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
});
