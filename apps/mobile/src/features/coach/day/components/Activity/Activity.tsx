import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Activity as ActivityType, Student } from "@routine-support/domains";
import { getActivityColor } from "@routine-support/ui-theme";
import { MobileTheme } from "apps/mobile/src/app/app";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleSheet, View } from "react-native";

interface ActivityProps {
  activity: ActivityType;
  students: Student[];
}

export const Activity: React.FC<ActivityProps> = ({ activity, students }) => {
  return (
    <View style={{ ...styles.wrapper, backgroundColor: getActivityColor(activity, students) }}>
      <Typography variant="caption4Normal">{activity.name}</Typography>
      <View style={styles.confirmationStatusWrapper}>
        <MaterialIcons name="check" size={14} />
        <Typography variant="text2Bold" style={styles.confirmationStatus}>
          1/3
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    padding: 8,
    borderRadius: MobileTheme.borderRadius.m,
    backgroundColor: MobileTheme.palette.common.blue,
  },
  confirmationStatusWrapper: {
    position: "absolute",
    bottom: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    paddingHorizontal: 8,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: MobileTheme.borderRadius.s,
  },
  confirmationStatus: { marginLeft: 2 },
});
