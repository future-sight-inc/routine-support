import React from "react";
import { ActivityForm } from "./components/ActivityForm";
import { ActivityModal } from "./components/ActivityModal";
import { useActivity } from "./hooks/useActivity";

export const Activity: React.FC = () => {
  const {
    models,
    operations: { closeActivityModal },
  } = useActivity();

  return (
    <ActivityModal opened={models.opened} actions={{ closeActivityModal }}>
      <ActivityForm activity={models.activity} actions={{}} />
    </ActivityModal>
  );
};
