import { stringifyDate } from "@routine-support/utils";
import { createSchemaFromActivity } from "../../activity";
import { Notification, NotificationSchema } from "../types";

export const createSchemaFromNotification = (notification: Notification): NotificationSchema => {
  return {
    ...notification,
    activity: createSchemaFromActivity(notification.activity),
    date: stringifyDate(notification.date),
  };
};
