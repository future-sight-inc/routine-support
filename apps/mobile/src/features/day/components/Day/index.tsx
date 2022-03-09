import React from "react";

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
  } = useStudent();

  if (!day) {
    // ! add loader
    return null;
  }

  return (
    <UncontrolledDay
      studentId={student?._id}
      day={day}
      loading={loading}
      actions={{ getDay, confirmActivity }}
    />
  );
};
