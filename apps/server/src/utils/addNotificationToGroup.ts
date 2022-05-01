import { Notification, NotificationsGroup } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const addNotificationToGroup = (
  notification: Notification,
  groups: NotificationsGroup[]
) => {
  const groupToAdd = groups.find(
    (group) => stringifyDate(group.date) === stringifyDate(notification.date)
  );

  if (groupToAdd) {
    groupToAdd.notifications.push(notification);
  } else {
    groups.push({
      date: notification.date,
      notifications: [notification],
    });
  }
};
