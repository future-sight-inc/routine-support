import React from "react";

import { Student as StudentType } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";

import { StudentsLayout } from "./components/StudentsLayout";
import { StudentsList } from "./components/StudentsList";
import { useStudent } from "./useStudent";
import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const {
    models: { students, loading },
    operations: { getStudents },
  } = useStudents();

  const {
    operations: { deleteStudent, openStudentModal, openSettingsModal },
  } = useStudent();

  const handleStudentOpen = (student: StudentType): void => {
    openStudentModal(student);
  };

  const handleSettingsOpen = (student: StudentType): void => {
    openSettingsModal(student);
  };

  const handleQrOpen = (): void => {
    // deleteStudent(student);
  };

  const handleStudentDelete = async (student: StudentType): Promise<void> => {
    await deleteStudent(student);
    await getStudents({ silent: true });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <StudentsLayout
      addButton={<Button text="Student" icon="add" />}
      studentsList={
        <StudentsList
          students={students}
          onStudentOpen={handleStudentOpen}
          onSettingsOpen={handleSettingsOpen}
          onQrOpen={handleQrOpen}
          onStudentDelete={handleStudentDelete}
        />
      }
    />
  );
};
