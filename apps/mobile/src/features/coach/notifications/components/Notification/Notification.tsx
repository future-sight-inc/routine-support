import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { getActivityStatusesFromStudents, Student } from "@routine-support/domains";
import { Notification as NotificationType } from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { StudentBadge } from "apps/mobile/src/components/StudentBadge";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface NotificationProps {
  notification: NotificationType;
  students: Student[];
  onNotificationDelete: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  notification,
  students,
  onNotificationDelete,
}) => {
  const { pendingStudents } = getActivityStatusesFromStudents(notification.activity, students);

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteWrapper} onPress={onNotificationDelete}>
      <MaterialIcons name="delete" size={30} style={styles.deleteIcon} />
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.wrapper}>
        <View style={styles.statusWrapper}>
          {!notification.isViewed && <View style={styles.unreadStatus} />}
          <Typography variant="text1" color="error">
            Событие пропущено!
          </Typography>
        </View>
        <View style={styles.infoWrapper}>
          <Image style={styles.pictogram} source={{ uri: notification.activity.pictogram }} />
          <View>
            <Typography variant="caption4Normal">{notification.activity.name}</Typography>
            <Typography variant="text2" color="secondary" style={styles.time}>
              {stringifyTime(notification.activity.start)} -{" "}
              {stringifyTime(notification.activity.end)}
            </Typography>
            <View style={styles.studentsWrapper}>
              {pendingStudents.map((student) => (
                <StudentBadge student={student} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    backgroundColor: Theme.palette.common.white,
  },
  statusWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoWrapper: {
    flexDirection: "row",
  },
  unreadStatus: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
    backgroundColor: Theme.palette.primary.main,
  },
  pictogram: {
    width: 95,
    height: 95,
    marginRight: 8,
    backgroundColor: "black",
  },
  time: { marginVertical: 8 },
  studentsWrapper: { flexDirection: "row" },
  deleteWrapper: {
    width: 120,
    height: 120,
    backgroundColor: Theme.palette.common.red,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    color: Theme.palette.common.white,
  },
});
