import { Student } from "@routine-support/domains";

export enum NotificationLocatorsEnum {
  Wrapper = "NotificationWrapper",
  NotViewedBadge = "NotificationNotViewedBadge",
  ActivityPictogram = "NotificationActivityPictogram",
  ActivityName = "NotificationActivityName",
  ActivityTime = "NotificationActivityTime",
  StudentBadge = "NotificationStudentBadge",
}

export const createStudentBadgeDataTestId = (student: Student) => {
  return `${NotificationLocatorsEnum.StudentBadge}-${student._id}`;
};
