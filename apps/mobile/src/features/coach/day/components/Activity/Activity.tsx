import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Activity as ActivityType,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";
import { getActivityColor } from "@routine-support/ui-theme";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { StyleSheet, View } from "react-native";

import { ActivityLocators } from "./locators";

interface ActivityProps {
  activity: ActivityType;
  students: Student[];
  onActivityPress: () => void;
  onConfirmationStatusPress: () => void;
}

export const Activity: React.FC<ActivityProps> = ({
  activity,
  students,
  onActivityPress,
  onConfirmationStatusPress,
}) => {
  const { assignedStudents, confirmedStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );

  return (
    <View
      style={{ ...styles.wrapper, backgroundColor: getActivityColor(activity, students) }}
      onPress={() => onActivityPress()}
    >
      <Typography variant="caption4Normal" testID={ActivityLocators.Name}>
        {activity.name}
      </Typography>
      <View style={styles.confirmationStatusWrapper} onPress={() => onConfirmationStatusPress()}>
        <MaterialIcons name="check" size={14} />
        <Typography
          variant="text2Bold"
          style={styles.confirmationStatus}
          testID={ActivityLocators.Status}
        >
          {confirmedStudents.length}/{assignedStudents.length}
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
