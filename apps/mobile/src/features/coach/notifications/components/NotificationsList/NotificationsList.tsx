import React from "react";

import {
  NotificationsGroup,
  Notification as NotificationType,
  Student,
} from "@routine-support/domains";
import { Typography } from "apps/mobile/src/components/Typography";
import { format, isToday } from "date-fns";
import { FlatList, StyleSheet, View } from "react-native";

import { Notification } from "../Notification";

interface NotificationsListProps {
  notificationsGroups: NotificationsGroup[];
  students: Student[];
  loading: boolean;
  onNotificationDelete: (notification: NotificationType) => void;
}

export const NotificationsList: React.FC<NotificationsListProps> = ({
  notificationsGroups,
  students,
  loading,
  onNotificationDelete,
}) => {
  return (
    <FlatList
      refreshing={loading}
      data={notificationsGroups}
      ListEmptyComponent={
        <Typography variant="text1" color="secondary" style={styles.emptyListText}>
          No notifications
        </Typography>
      }
      renderItem={({ item }) => (
        <View style={styles.groupWrapper}>
          <Typography style={styles.date} variant="text2" color="secondary">
            {isToday(item.date) ? "Today" : format(item.date, "dddd dd MMM")}
          </Typography>
          {item.notifications.map((notification, index) => (
            <Notification
              notification={notification}
              students={students}
              onNotificationDelete={() => onNotificationDelete(notification)}
              key={index}
              showDivider={index !== item.notifications.length - 1}
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
  groupWrapper: { paddingLeft: 16, paddingTop: 16, marginBottom: 32 },
  date: { marginBottom: 8 },
  emptyListText: {
    marginTop: 8,
    textAlign: "center",
  },
});
