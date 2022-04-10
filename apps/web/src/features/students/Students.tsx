import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { ContentWrapper } from "../../components/ContentWrapper";
import { Modal } from "../../components/Modal";
import { StudentForm } from "../student/components/StudentForm/StudentForm";
import { useStudent } from "../student/useStudent";
import { Layout } from "../students/components/Layout";
import { AddStudentButton } from "./components/AddStudentButton";
import { StudentList } from "./components/StudentList";
import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const { t } = useTranslation();

  const Students = useStudents();
  const Student = useStudent();

  useEffect(() => {
    Students.operations.getStudents();
  }, []);

  return (
    <ContentWrapper
      loading={Students.models.loading}
      error={Students.models.error}
      onReload={Students.operations.getStudents}
    >
      <Helmet>
        <title>{t("Students")}</title>
      </Helmet>
      <Layout
        addStudentButton={
          <AddStudentButton
            onClick={() => Student.operations.openNewStudentModal()}
          />
        }
      >
        <StudentList
          students={Students.models.students}
          actions={{
            openStudentModal: Student.operations.openStudentModal,
            deleteStudent: Student.operations.deleteStudent,
            getStudents: Students.operations.getStudents,
          }}
        />
        <Modal
          opened={Student.models.opened}
          onClose={Student.operations.closeStudentModal}
        >
          <StudentForm
            student={Student.models.student}
            actions={{
              createStudent: Student.operations.createStudent,
              updateStudent: Student.operations.updateStudent,
              deleteStudent: Student.operations.deleteStudent,
              getStudents: Students.operations.getStudents,
            }}
          />
        </Modal>
      </Layout>
    </ContentWrapper>
  );
};
