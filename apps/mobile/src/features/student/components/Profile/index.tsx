import { useStudent } from "../../useStudent";
import { Profile as UncontrolledProfile } from "./Profile";
import React from "react";

export const Profile: React.FC = () => {
  const {
    models: { student },
    operations: { logout },
  } = useStudent();

  if (!student) {
    return null;
  }

  return <UncontrolledProfile student={student} actions={{ logout }} />;
};
