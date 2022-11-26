import React from "react";

import { Student as StudentType } from "@routine-support/domains";
import { useStudentForm, useStudentSettingsForm } from "@routine-support/forms";
import { Button } from "apps/mobile/src/components/Button";
import { Alert } from "react-native";

import { StudentModal } from "./components/StudentModal";
import { StudentSettingsModal } from "./components/StudentSettingsModal";
import { StudentsLayout } from "./components/StudentsLayout";
import { StudentsList } from "./components/StudentsList";
import { useStudent } from "./useStudent";
import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const Students = useStudents();
  const Student = useStudent();
  const StudentForm = useStudentForm(Student.models.student, {
    createStudent: Student.operations.createStudent,
    updateStudent: Student.operations.updateStudent,
    deleteStudent: Student.operations.deleteStudent,
    getStudents: Students.operations.getStudents,
  });
  const StudentSettingForm = useStudentSettingsForm(Student.models.student, {
    updateSettings: Student.operations.updateSettings,
    getStudents: Students.operations.getStudents,
  });

  const handleStudentOpen = (student?: StudentType): void => {
    Student.operations.openStudentModal(student);
  };

  const handleSettingsOpen = (student: StudentType): void => {
    Student.operations.openSettingsModal(student);
  };

  const handleStudentDelete = async (student: StudentType): Promise<void> => {
    Alert.alert(
      "Confirm your action",
      "",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: async () => {
            await Student.operations.deleteStudent(student);
            await Students.operations.getStudents({ silent: true });
          },
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => null,
      }
    );
  };

  return (
    <>
      <StudentsLayout
        // loading={Students.models.loading}
        addButton={<Button text="Student" icon="add" onPress={() => handleStudentOpen()} />}
        studentsList={
          <StudentsList
            loading={Students.models.loading}
            students={Students.models.students}
            onStudentOpen={handleStudentOpen}
            onSettingsOpen={handleSettingsOpen}
            onStudentDelete={handleStudentDelete}
          />
        }
      />
      <StudentModal
        isEdit={Boolean(Student.models.student?._id)}
        isLoading={Student.models.loading}
        isOpened={Student.models.studentModalOpened}
        control={StudentForm.models.control}
        onClose={Student.operations.closeStudentModal}
        onSubmit={StudentForm.operations.onSubmit}
        onDelete={StudentForm.operations.onDelete}
      />
      <StudentSettingsModal
        isLoading={Student.models.loading}
        isOpened={Student.models.settingsModalOpened}
        onClose={Student.operations.closeSettingsModal}
        control={StudentSettingForm.models.control}
        onSubmit={StudentSettingForm.operations.onSubmit}
      />
    </>
  );
};
