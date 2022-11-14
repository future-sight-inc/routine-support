import React, { ReactNode } from "react";

import { Dimensions, StyleSheet, View } from "react-native";

interface DayLayoutProps {
  daySelect: ReactNode;
  filter: ReactNode;
  calendar: ReactNode;
}

export const DayLayout: React.FC<DayLayoutProps> = ({ daySelect, filter, calendar }) => {
  return (
    <View>
      <View style={styles.header}>
        {daySelect}
        {filter}
      </View>
      <View style={styles.body}>{calendar}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 33,
    marginBottom: 8,
  },
  body: {
    width: Dimensions.get("screen").width,
  },
});
