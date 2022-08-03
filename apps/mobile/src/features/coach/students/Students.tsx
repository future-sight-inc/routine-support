import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { Typography } from "apps/mobile/src/components/Typography";

import { MainLayout } from "../coach/MainLayout";
import { StudentsList } from "./components/StudentsList";
import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const {
    models: { students, loading },
  } = useStudents();

  if (loading) {
    return <Typography>loading</Typography>;
  }

  return (
    <MainLayout title="Students" footer={<Button text="Student" icon="add" fullWidth />}>
      <StudentsList students={students} />
    </MainLayout>
  );
};
