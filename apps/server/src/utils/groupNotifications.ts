import { Notification, NotificationsGroup } from "@routine-support/domains";
import { addNotificationToGroup } from "./addNotificationToGroup";

export const groupNotifications = (notifications: Notification[]) => {
  const groups: NotificationsGroup[] = [];

  notifications.forEach((notification) =>
    addNotificationToGroup(notification, groups)
  );

  return groups;
};
