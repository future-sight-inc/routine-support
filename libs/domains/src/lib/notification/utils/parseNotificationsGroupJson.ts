import {
  NotificationsGroup,
  NotificationsGroupJson,
  parseNotificationJson,
} from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";

export const parseNotificationsGroupJson = (json: NotificationsGroupJson): NotificationsGroup => {
  return {
    date: parseDate(json.date),
    notifications: json.notifications.map(parseNotificationJson),
  };
};
