import { stringifyDate } from "@routine-support/utils";
import { NotificationsGroup, NotificationsGroupSchema } from "../types";
import { createSchemaFromNotification } from "./createSchemaFromNotification";

export const createSchemaFromNotificationGroup = (
  group: NotificationsGroup
): NotificationsGroupSchema => {
  return {
    ...group,
    notifications: group.notifications.map(createSchemaFromNotification),
    date: stringifyDate(group.date),
  };
};
