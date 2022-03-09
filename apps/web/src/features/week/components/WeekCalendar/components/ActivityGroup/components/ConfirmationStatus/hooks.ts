import { useState } from "react";

import { Activity, Student } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

import { getPendingStudents, getStudentsByIds } from "./utils";

export const useConfirmationStatusComponent = (
  activity: Activity,
  students: Student[]
) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleModalOpen = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  let confirmedStudents: Student[] = [];
  let assignedStudents = students;

  if (activity.confirmation) {
    confirmedStudents = getStudentsByIds(
      students,
      activity.confirmation[stringifyDate(activity.date)]
    );
  }

  if (activity.students.length) {
    assignedStudents = getStudentsByIds(students, activity.students);
  }

  return {
    models: {
      modalOpened,
      confirmedStudents,
      assignedStudents,
      pendingStudents: getPendingStudents(assignedStudents, confirmedStudents),
    },
    operations: { handleModalOpen, handleModalClose },
  };
};
