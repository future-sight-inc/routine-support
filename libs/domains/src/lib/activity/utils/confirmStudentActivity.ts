import { Activity, Student } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { ActivitySchema } from "../types";

export const confirmStudentActivity = ({
  student,
  activity,
  confirmationDate,
}: {
  student: Student;
  activity: Activity | ActivitySchema;
  confirmationDate: DateString;
}) => {
  const firstStudentConfirmed =
    !activity.confirmation[confirmationDate]?.students;

  if (firstStudentConfirmed) {
    activity.confirmation[confirmationDate] = {
      students: [student._id],
      isNotified: false,
    };
  } else {
    if (
      !activity.confirmation[confirmationDate].students.includes(
        // todo Прокидывает ObjectId
        String(student._id)
      )
    ) {
      activity.confirmation[confirmationDate].students.push(student._id);
    }
  }
};
