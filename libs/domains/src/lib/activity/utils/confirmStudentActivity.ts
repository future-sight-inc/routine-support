import { Activity, Student } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const confirmStudentActivity = ({
  student,
  activity,
  confirmationDate,
}: {
  student: Student;
  activity: Activity;
  confirmationDate: Date;
}) => {
  const stringifiedDate = stringifyDate(confirmationDate);
  const firstStudentConfirmed = !activity.confirmation[stringifiedDate]?.students;

  if (firstStudentConfirmed) {
    activity.confirmation[stringifiedDate] = {
      students: [student._id],
      isNotified: false,
    };
  } else {
    if (!activity.confirmation[stringifiedDate].students.includes(student._id)) {
      activity.confirmation[stringifiedDate].students.push(student._id);
    }
  }
};
