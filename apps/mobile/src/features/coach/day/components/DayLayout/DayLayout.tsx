import React, { ReactNode } from "react";

import { StyleSheet, View } from "react-native";

interface DayLayoutProps {
  daySelect: ReactNode;
  filter: ReactNode;
  calendar: ReactNode;
}

export const DayLayout: React.FC<DayLayoutProps> = ({ daySelect, filter, calendar }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        {daySelect}
        {filter}
      </View>
      <View style={styles.body}>{calendar}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 33,
    marginBottom: 8,
  },
  body: {},
});
