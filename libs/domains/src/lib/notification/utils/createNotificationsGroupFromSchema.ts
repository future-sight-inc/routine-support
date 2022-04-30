import { parseDate } from "@routine-support/utils";
import { NotificationsGroup, NotificationsGroupSchema } from "../types";

export const createNotificationsGroupFromSchema = (
  schema: NotificationsGroupSchema
): NotificationsGroup => {
  return {
    ...schema,
    date: parseDate(schema.date),
  };
};
