import { Student } from "@routine-support/domains";

export enum NotificationLocatorsEnum {
  Wrapper = "NotificationWrapper",
  NotViewedBadge = "NotificationNotViewedBadge",
  ActivityName = "NotificationActivityName",
  ActivityTime = "NotificationActivityTime",
  StudentBadge = "NotificationStudentBadge",
}

export const createStudentBadgeDataTestId = (student: Student) => {
  return `${NotificationLocatorsEnum.StudentBadge}-${student._id}`;
};
