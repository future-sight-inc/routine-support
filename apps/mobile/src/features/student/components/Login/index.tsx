import React from "react";

import { useStudent } from "../../useStudent";
import { Login as UncontrolledLogin } from "./Login";

export const Login: React.FC = () => {
  const {
    models: { student },
    operations: { login },
  } = useStudent();

  return <UncontrolledLogin student={student} actions={{ login }} />;
};
