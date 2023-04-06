import { stringifyActivity } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { Notification, NotificationJson } from "../types";

export const stringifyNotification = (notification: Notification): NotificationJson => {
  return {
    ...notification,
    activity: stringifyActivity(notification.activity),
    date: stringifyDate(notification.date),
  };
};
