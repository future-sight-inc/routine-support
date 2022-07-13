import React from "react";

import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { FlatList, StyleSheet, View } from "react-native";

const DATA = new Array(24).fill("");

export const Calendar: React.FC = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ index }) => (
        <View style={styles.row}>
          <View style={styles.timeColumn}>
            <View />
            <View style={styles.dash} />
            <Typography variant="text3" color="secondary">
              {index + 1}:00
            </Typography>
          </View>
          <View
            style={{ ...styles.bodyColumn, borderBottomWidth: index + 1 === DATA.length ? 0 : 1 }}
          ></View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const ROW_HEIGHT = 120;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    overflow: "scroll",
  },
  row: { flexDirection: "row" },
  timeColumn: {
    width: 45,
    height: ROW_HEIGHT,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dash: {
    height: 1,
    width: 12,
    backgroundColor: MobileTheme.palette.secondary.main,
  },
  bodyColumn: {
    width: "100%",
    borderColor: MobileTheme.palette.border.light,
    marginLeft: 8,
  },
});
