import {
  Activity,
  createMockActivity,
  Notification,
} from "@routine-support/domains";
import moment from "moment";
import * as uuid from "uuid";

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
