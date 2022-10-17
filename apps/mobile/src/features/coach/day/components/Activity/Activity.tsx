import React, { useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Activity as ActivityType,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";
import { getActivityColor } from "@routine-support/ui-theme";
import { ConfirmationStatus } from "apps/mobile/src/components/ConfirmationStatus/ConfirmationStatus";
import { Popup } from "apps/mobile/src/components/Popup";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { ActivityLocators } from "./locators";

interface ActivityProps {
  activity: ActivityType;
  students: Student[];
  style?: Record<string, unknown>;
  onActivityPress: () => void;
  onConfirmationStatusPress: () => void;
}

export const Activity: React.FC<ActivityProps> = ({
  activity,
  students,
  style,
  onActivityPress,
  onConfirmationStatusPress,
}) => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const { assignedStudents, confirmedStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );

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

        <Popup isOpened={isOpened} onClose={handleClose}>
          <ConfirmationStatus activity={activity} students={students} />
        </Popup>
        <TouchableOpacity style={styles.confirmationStatusWrapper} onPress={handleOpen}>
          <MaterialIcons name="check" size={14} />

          <Typography
            variant="text2Bold"
            style={styles.confirmationStatus}
            testID={ActivityLocators.Status}
          >
            {confirmedStudents.length}/{assignedStudents.length}
          </Typography>
        </TouchableOpacity>
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
