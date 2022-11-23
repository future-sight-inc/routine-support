import React from "react";

import { Typography } from "apps/mobile/src/components/Typography";

import { useStudent } from "../useStudent";
import { Login as UncontrolledLogin } from "./Login";

export const Login: React.FC = () => {
  const {
    models: { student },
    operations: { login },
  } = useStudent();

  console.log('login')

  return <Typography>Fuck</Typography>;
  return <UncontrolledLogin student={student} actions={{ login }} />;
};
