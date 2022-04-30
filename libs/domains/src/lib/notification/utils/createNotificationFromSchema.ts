import { parseDate } from "@routine-support/utils";
import { createActivityFromSchema } from "../../activity";
import { Notification, NotificationSchema } from "../types";

export const createNotificationFromSchema = (
  schema: NotificationSchema
): Notification => {
  return {
    ...schema,
    activity: createActivityFromSchema(schema.activity),
    date: parseDate(schema.date),
  };
};
