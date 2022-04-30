import { DateString, Id } from "@routine-support/types";
import { Moment } from "moment";
import { ActivitySchema } from "../activity";

export type Notification = {
  _id: Id;
  coachId: Id;
  activity: ActivitySchema;
  isViewed: boolean;
};

export type NotificationsGroupSchema = {
  date: DateString;
  notifications: Notification[];
};

export type NotificationsGroup = {
  date: Moment;
  notifications: Notification[];
};
