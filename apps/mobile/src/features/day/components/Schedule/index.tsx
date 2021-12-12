import React from "react";
import { useDay } from "../../useDay";
import { Schedule as UncontrolledSchedule } from "./Schedule";

export const Schedule: React.FC = () => {
  const {
    models: { day, loading },
    operations: { getDay },
  } = useDay();

  if (!day) {
    // ! add loader
    return null;
  }

  return (
    <UncontrolledSchedule day={day} loading={loading} actions={{ getDay }} />
  );
};
