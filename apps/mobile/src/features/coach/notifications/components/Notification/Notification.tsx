import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { getActivityStatusesFromStudents, Student } from "@routine-support/domains";
import { Notification as NotificationType } from "@routine-support/domains";
import { stringifyDate, stringifyTime } from "@routine-support/utils";
import { Popup } from "apps/mobile/src/components/Popup";
import { StudentBadge } from "apps/mobile/src/components/StudentBadge";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface NotificationProps {
  notification: NotificationType;
  students: Student[];
  showDivider?: boolean;
  onNotificationDelete: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  notification,
  students,
  showDivider,
  onNotificationDelete,
}) => {
  const { pendingStudents, confirmedStudents, assignedStudents } = getActivityStatusesFromStudents(
    notification.activity,
    students
  );

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteWrapper} onPress={onNotificationDelete}>
      <MaterialIcons name="delete" size={30} style={styles.deleteIcon} />
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Popup
        withOpacity={false}
        pressElement={
          <View style={[styles.wrapper, showDivider && styles.divider]}>
            <View style={styles.headWrapper}>
              <Typography variant="caption4Normal">{notification.activity.name}</Typography>
              <View style={styles.status}>
                <Typography variant="text2Bold">
                  {confirmedStudents.length}/{assignedStudents.length}
                </Typography>
              </View>
            </View>
            <Typography variant="text2" color="secondary">
              {stringifyTime(notification.activity.start)} -{" "}
              {stringifyTime(notification.activity.end)}
            </Typography>
          </View>
        }
      >
        <View style={styles.popupContentWrapper}>
          <Typography variant="caption4" style={styles.popupTitle}>
            Activity was missed!
          </Typography>
          <View style={styles.activityInfo}>
            <Typography variant="caption4Normal" style={styles.activityName}>
              {notification.activity.name}
            </Typography>
            <Typography variant="text2" color="secondary">
              {stringifyDate(notification.activity.start)} from{" "}
              {stringifyTime(notification.activity.start)} til{" "}
              {stringifyTime(notification.activity.end)}
            </Typography>
          </View>
          <View>
            <Typography variant="text1">
              Pending {pendingStudents.length}/{assignedStudents.length}
            </Typography>
            <View style={styles.studentsWrapper}>
              {pendingStudents.map((student, index) => (
                <StudentBadge student={student} key={index} />
              ))}
            </View>
          </View>
        </View>
      </Popup>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    backgroundColor: Theme.palette.common.white,
    height: 80,
    paddingRight: 16,
    justifyContent: "center",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.palette.border.light,
  },
  headWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.palette.common.red,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
    borderRadius: Theme.borderRadius.m,
  },
  deleteWrapper: {
    width: 80,
    height: 80,
    backgroundColor: Theme.palette.common.red,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    color: Theme.palette.common.white,
  },
  popupContentWrapper: { flexDirection: "column" },
  popupTitle: { textAlign: "center" },
  activityInfo: { marginVertical: 16 },
  activityName: { marginBottom: 8 },
  studentsWrapper: { flexDirection: "row", marginTop: 8 },
});
