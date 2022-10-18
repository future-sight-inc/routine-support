import React from "react";

import {
  Activity as ActivityType,
  Student,
} from "@routine-support/domains";
import { getActivityColor } from "@routine-support/ui-theme";
import { ConfirmationStatus } from "apps/mobile/src/components/ConfirmationStatus/ConfirmationStatus";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { ActivityLocators } from "./locators";

interface ActivityProps {
  activity: ActivityType;
  students: Student[];
  style?: Record<string, unknown>;
  onActivityPress: () => void;
}

export const Activity: React.FC<ActivityProps> = ({
  activity,
  students,
  style,
  onActivityPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onActivityPress()}>
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: getActivityColor(activity, students),
          ...style,
        }}
      >
        <Typography variant="caption4Normal" testID={ActivityLocators.Name}>
          {activity.name}
        </Typography>
        <ConfirmationStatus activity={activity} students={students} />
      </View>
    </TouchableWithoutFeedback>
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
