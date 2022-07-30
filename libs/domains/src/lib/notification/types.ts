import { DateString, Id } from "@routine-support/types";
import { Moment } from "moment";
import { Activity, ActivitySchema } from "../activity";

export type Notification = {
  _id: Id;
  coachId: Id;
  activity: Activity;
  isViewed: boolean;
  date: Moment;
};

export type NotificationSchema = {
  _id: Id;
  coachId: Id;
  activity: ActivitySchema;
  isViewed: boolean;
  date: DateString;
};

export type NotificationsGroupSchema = {
  date: DateString;
  notifications: NotificationSchema[];
};

export type NotificationsGroup = {
  date: Moment;
  notifications: Notification[];
};
