import { parseDate } from "@routine-support/utils";
import { parseActivityJson } from "../../activity";
import { Notification, NotificationJson } from "../types";

export const parseNotificationJson = (json: NotificationJson): Notification => {
  return {
    ...json,
    activity: parseActivityJson(json.activity),
    date: parseDate(json.date),
  };
};
