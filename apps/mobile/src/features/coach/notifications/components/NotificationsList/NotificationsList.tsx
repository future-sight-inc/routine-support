import React from "react";

import {
  NotificationsGroup,
  Notification as NotificationType,
  Student,
} from "@routine-support/domains";
import { isToday } from "@routine-support/utils";
import { Typography } from "apps/mobile/src/components/Typography";
import { FlatList, StyleSheet, View } from "react-native";

import { Notification } from "../Notification";

interface NotificationsListProps {
  notificationsGroups: NotificationsGroup[];
  students: Student[];
  onNotificationDelete: (notification: NotificationType) => void;
}

export const NotificationsList: React.FC<NotificationsListProps> = ({
  notificationsGroups,
  students,
  onNotificationDelete,
}) => {
  return (
    <FlatList
      data={notificationsGroups}
      ListEmptyComponent={
        <Typography variant="text1" color="secondary" style={styles.emptyListText}>
          No students
        </Typography>
      }
      renderItem={({ item }) => (
        <View style={styles.groupWrapper}>
          <Typography style={styles.date} variant="text2" color="secondary">
            {isToday(item.date) ? "Today" : item.date.format("dddd DD MMM")}
          </Typography>
          {item.notifications.map((notification, index) => (
            <Notification
              notification={notification}
              students={students}
              onNotificationDelete={() => onNotificationDelete(notification)}
              key={index}
            />
          ))}
        </View>
      )}
      keyExtractor={(item) => item.date.toString()}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: { height: "100%" },
  groupWrapper: { paddingLeft: 16, paddingTop: 16 },
  date: { marginBottom: 16 },
  emptyListText: {
    marginTop: 16,
    textAlign: "center",
  },
});
