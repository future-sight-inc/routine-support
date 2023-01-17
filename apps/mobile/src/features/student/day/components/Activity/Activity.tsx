import React from "react";

import { getActivityColor } from "@routine-support/ui-theme";
import { ActivityComponent } from "apps/mobile/src/components/Calendar";
import { ConfirmationStatus } from "apps/mobile/src/components/ConfirmationStatus/ConfirmationStatus";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { ActivityLocators } from "./locators";

export const Activity: ActivityComponent = ({ activity, students, style, onActivityPress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onActivityPress()}>
      <View
        style={[styles.wrapper, { backgroundColor: getActivityColor(activity, students) }, style]}
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
    borderRadius: Theme.borderRadius.m,
    backgroundColor: Theme.palette.common.blue,
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
    borderRadius: Theme.borderRadius.s,
  },
  confirmationStatus: { marginLeft: 2 },
});
