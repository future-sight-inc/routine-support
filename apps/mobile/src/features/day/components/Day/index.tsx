import React from "react";
import { useDay } from "../../useDay";
import { Day as UncontrolledDay } from "./Day";

export const Day: React.FC = () => {
  const {
    models: { day },
  } = useDay();

  if (!day) {
    // ! add loader
    return null;
  }

  return <UncontrolledDay day={day} />;
};
