import React from "react";

import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";
import { Typography } from "apps/mobile/src/components/Typography";

import { useStudent } from "../../student/useStudent";
import { useDay } from "../useDay";

export const Day: React.FC = () => {
  const {
    models: {
      day,
      // loading
    },
    // operations: { getDay, confirmActivity },
  } = useDay();
  const {
    models: { student },
    // operations: { logout },
  } = useStudent();

  if (!day || !student) {
    return <LoadingScreen />;
  }

  return <Typography>Well hello</Typography>;
};
