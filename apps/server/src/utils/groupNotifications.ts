import { Notification, NotificationsGroup } from "@routine-support/domains";
import { getUnixTime } from "date-fns";
import { addNotificationToGroup } from "./addNotificationToGroup";

export const groupNotifications = (notifications: Notification[]) => {
  const groups: NotificationsGroup[] = [];

  notifications.forEach((notification) => addNotificationToGroup(notification, groups));

  return groups.sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date));
};
