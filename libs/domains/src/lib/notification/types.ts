import { Activity } from "../activity";

export type Notification = {
  _id: string;
  coachId: string;
  activity: Activity;
  isViewed: boolean;
  date: Date;
};

export type NotificationsGroup = {
  date: Date;
  notifications: Notification[];
};
