import React from "react";

import { Student as StudentType } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";

import { StudentModal } from "./components/StudentModal";
import { StudentsLayout } from "./components/StudentsLayout";
import { StudentsList } from "./components/StudentsList";
import { useStudent } from "./useStudent";
import { useStudentForm } from "./useStudentForm";
import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const {
    models: { students, loading },
    operations: { getStudents },
  } = useStudents();

  const {
    models: { student, loading: isStudentLoading, studentModalOpened },
    operations: {
      createStudent,
      updateStudent,
      deleteStudent,
      openStudentModal,
      closeStudentModal,
      openSettingsModal,
    },
  } = useStudent();
  const {
    models: { control },
    operations: { onSubmit, onDelete },
  } = useStudentForm(student, {
    createStudent,
    updateStudent,
    deleteStudent,
    closeModal: closeStudentModal,
    getStudents,
  });

  const handleStudentOpen = (student: StudentType): void => {
    openStudentModal(student);
  };

  const handleSettingsOpen = (student: StudentType): void => {
    openSettingsModal(student);
  };

  const handleStudentDelete = async (student: StudentType): Promise<void> => {
    await deleteStudent(student);
    await getStudents({ silent: true });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StudentsLayout
        addButton={<Button text="Student" icon="add" onPress={() => handleStudentOpen()} />}
        studentsList={
          <StudentsList
            students={students}
            onStudentOpen={handleStudentOpen}
            onSettingsOpen={handleSettingsOpen}
            onStudentDelete={handleStudentDelete}
          />
        }
      />
      <StudentModal
        isEdit={student?._id}
        isLoading={isStudentLoading}
        isOpened={studentModalOpened}
        control={control}
        onClose={closeStudentModal}
        onSubmit={onSubmit}
        onDelete={onDelete}
      />
    </>
  );
};
