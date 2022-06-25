import React from "react";

import { Spinner } from "../../../../components/Spinner";
import { useStudent } from "../../../student/useStudent";
import { useDay } from "../../useDay";
import { Day as UncontrolledDay } from "./Day";

export const Day: React.FC = () => {
  const {
    models: { day, loading },
    operations: { getDay, confirmActivity },
  } = useDay();
  const {
    models: { student },
    operations: { logout },
  } = useStudent();

  if (!day || !student) {
    return <Spinner />;
  }

  return (
    <UncontrolledDay
      student={student}
      day={day}
      loading={loading}
      actions={{ getDay, confirmActivity, logout }}
    />
  );
};
