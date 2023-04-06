import { stringifyDate } from "@routine-support/utils";
import { NotificationsGroup, NotificationsGroupJson } from "../types";
import { stringifyNotification } from "./stringifyNotification";

export const stringifyNotificationsGroup = (group: NotificationsGroup): NotificationsGroupJson => {
  return {
    ...group,
    date: stringifyDate(group.date),
    notifications: group.notifications.map(stringifyNotification),
  };
};
