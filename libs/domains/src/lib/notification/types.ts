import { Activity, ActivityJson } from "../activity";

export type Notification = {
  _id: string;
  coachId: string;
  activity: Activity;
  isViewed: boolean;
  date: Date;
};

export type NotificationJson = Omit<Notification, "activity" | "date"> & {
  activity: ActivityJson;
  date: string;
};

export type NotificationsGroup = {
  date: Date;
  notifications: Notification[];
};

export type NotificationsGroupJson = {
  date: string;
  notifications: NotificationJson[];
};
