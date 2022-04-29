import { useState } from "react";

import { Activity, Student } from "@routine-support/domains";
import { getActivityStatusesFromStudents } from "apps/web/src/utils/getActivityStatusesFromStudents";

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

  const { confirmedStudents, assignedStudents, pendingStudents } =
    getActivityStatusesFromStudents(activity, students);

  return {
    models: {
      modalOpened,
      confirmedStudents,
      assignedStudents,
      pendingStudents,
    },
    operations: { handleModalOpen, handleModalClose },
  };
};
