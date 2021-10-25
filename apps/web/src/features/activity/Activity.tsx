import React from "react";

import { useActivity } from "./hooks/useActivity";

export const Activity: React.FC = () => {
  const {
    models,
    operations: { closeActivityModal },
  } = useActivity();

  return null;
};
