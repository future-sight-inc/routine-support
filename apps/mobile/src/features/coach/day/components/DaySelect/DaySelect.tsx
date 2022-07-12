import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Typography } from "apps/mobile/src/components/Typography";
import moment from "moment";
import { StyleSheet, View } from "react-native";

export const DaySelect: React.FC = () => {
  const currentDate = moment();

  return (
    <View style={styles.wrapper}>
      <View style={styles.dayNumberWrapper}>
        <Typography variant="text1">{currentDate.date()}</Typography>
        <MaterialIcons name="arrow-drop-down" size={20} />
      </View>
      <Typography variant="text3">
        {currentDate.format("MMMM")},{" "}
        <Typography variant="text3" color="secondary">
          {currentDate.format("dd")}
        </Typography>
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  dayNumberWrapper: {
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dayNumber: {},
});
