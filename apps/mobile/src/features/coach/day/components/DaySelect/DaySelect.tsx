import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DateSelector } from "apps/mobile/src/components/DateSelector";
import { Typography } from "apps/mobile/src/components/Typography";
import { Moment } from "moment";
import { StyleSheet, View } from "react-native";

interface DaySelectorProps {
  date: Moment;
  onSelect: (value: Moment) => void;
}

export const DaySelect: React.FC<DaySelectorProps> = ({ date, onSelect }) => {
  return (
    <DateSelector
      value={date}
      onSelect={onSelect}
      InputComponent={() => (
        <View style={styles.wrapper}>
          <View style={styles.dayNumberWrapper}>
            <Typography variant="text1">{date.date()}</Typography>
            <MaterialIcons name="arrow-drop-down" size={20} />
          </View>
          <Typography variant="text3">
            {date.format("MMMM")},{" "}
            <Typography variant="text3" color="secondary">
              {date.format("dd")}
            </Typography>
          </Typography>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  dayNumberWrapper: {
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
