import { parseDate } from "@routine-support/utils";
import { NotificationsGroup, NotificationsGroupSchema } from "../types";
import { createNotificationFromSchema } from "./createNotificationFromSchema";

export const createNotificationsGroupFromSchema = (
  schema: NotificationsGroupSchema
): NotificationsGroup => {
  return {
    ...schema,
    notifications: schema.notifications.map(createNotificationFromSchema),
    date: parseDate(schema.date),
  };
};
