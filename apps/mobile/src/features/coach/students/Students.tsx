import React from "react";

import { ColorEnum, createMockStudent } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";

import { MainLayout } from "../coach/MainLayout";
import { StudentsList } from "./components/StudentsList";

export const Students: React.FC = () => {
  return (
    <MainLayout title="Students" footer={<Button text="Student" icon="add" fullWidth />}>
      <StudentsList
        students={[
          createMockStudent({ name: "Ramona Red", color: ColorEnum.Red }),
          createMockStudent({ name: "Gary Green", color: ColorEnum.DarkGreen }),
          createMockStudent({ name: "Boris Brown", color: ColorEnum.Brown }),
          createMockStudent({ name: "Patrick Purple", color: ColorEnum.Purple }),
        ]}
      />
    </MainLayout>
  );
};
