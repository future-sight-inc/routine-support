import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Filter: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <MaterialIcons name="people" size={20} />
      <MaterialIcons name="arrow-drop-down" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row" },
});
