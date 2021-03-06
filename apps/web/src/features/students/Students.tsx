import React from "react";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { ContentWrapper } from "../../components/ContentWrapper";
import { Modal } from "../../components/Modal";
import { SettingsForm } from "../student/components/SettingsForm";
import { StudentForm } from "../student/components/StudentForm/StudentForm";
import { useStudent } from "../student/useStudent";
import { StudentList } from "./components/StudentList";
import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const { t } = useTranslation();

  const Students = useStudents();
  const Student = useStudent();

  return (
    <ContentWrapper loading={Students.models.loading} error={Students.models.error}>
      <Helmet>
        <title>{t("Students")}</title>
      </Helmet>
      <StudentList
        students={Students.models.students}
        actions={{
          openStudentModal: Student.operations.openStudentModal,
          openNewStudentModal: Student.operations.openNewStudentModal,
          openSettingsModal: Student.operations.openSettingsModal,
          deleteStudent: Student.operations.deleteStudent,
          getStudents: Students.operations.getStudents,
        }}
      />
      <Modal
        isOpened={Student.models.studentModalOpened}
        onClose={Student.operations.closeStudentModal}
      >
        <StudentForm
          student={Student.models.student}
          actions={{
            createStudent: Student.operations.createStudent,
            updateStudent: Student.operations.updateStudent,
            deleteStudent: Student.operations.deleteStudent,
            closeModal: Student.operations.closeStudentModal,
            getStudents: Students.operations.getStudents,
          }}
        />
      </Modal>
      <Modal
        isOpened={Student.models.settingsModalOpened}
        onClose={Student.operations.closeSettingsModal}
      >
        <SettingsForm
          student={Student.models.student}
          actions={{
            updateSettings: Student.operations.updateSettings,
            closeModal: Student.operations.closeStudentModal,
            getStudents: Students.operations.getStudents,
          }}
        />
      </Modal>
    </ContentWrapper>
  );
};
