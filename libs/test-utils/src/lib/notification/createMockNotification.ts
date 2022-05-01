import { Activity, Notification } from "@routine-support/domains";
import { createMockActivity } from "../activity";
import * as uuid from "uuid";
import moment from "moment";

export const createMockNotification = (
  notificationData?: Partial<Notification>,
  activityData?: Partial<Activity>
): Notification => {
  const activity = createMockActivity(activityData);

  return {
    _id: uuid.v4(),
    coachId: uuid.v4(),
    date: moment(),
    activity,
    isViewed: false,
    ...notificationData,
  };
};
