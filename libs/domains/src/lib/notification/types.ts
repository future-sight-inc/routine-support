import { Id } from "@routine-support/types";
import { Activity } from "../activity";

export type Notification = {
  _id: Id;
  coachId: Id;
  activity: Activity;
  isViewed: boolean;
  date: Date;
};

export type NotificationsGroup = {
  date: Date;
  notifications: Notification[];
};
