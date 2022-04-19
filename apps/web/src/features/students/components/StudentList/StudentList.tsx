import React from "react";

import { Student } from "@routine-support/domains";
import { Modal } from "apps/web/src/components/Modal";
import { useTranslation } from "react-i18next";

import { AddStudentCard } from "../AddStudentCard";
import { StudentCard } from "../StudentCard";
import { useStudentListComponent } from "./hooks";
import * as S from "./styled";

export interface StudentListActions {
  openStudentModal: (student: Student) => void;
  openSettingsModal: (student: Student) => void;
  openNewStudentModal: () => void;
  deleteStudent: (student: Student) => void;
  getStudents: () => void;
}

interface StudentListProps {
  students: Student[];
  actions: StudentListActions;
}

export const StudentList: React.FC<StudentListProps> = ({
  students,
  actions,
}) => {
  const {
    models: { qr, currentStudent },
    operations: { onStudentDelete, onQrOpen, onQrClose },
  } = useStudentListComponent(actions);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <AddStudentCard onStudentModalOpen={actions.openNewStudentModal} />
      {students.map((student, index) => (
        <StudentCard
          key={index}
          student={student}
          onStudentModalOpen={actions.openStudentModal}
          onStudentDelete={onStudentDelete}
          onSettingsModalOpen={actions.openSettingsModal}
          onQROpen={onQrOpen}
        />
      ))}
      <Modal isOpened={Boolean(qr)} onClose={onQrClose}>
        <S.ModalContent>
          <S.ModalText>
            {t("QR code for")} {currentStudent?.name}
          </S.ModalText>
          {qr && <S.Qr src={qr} />}
          <S.ModalText>
            {t("QR instructions start")}
            <br />
            {t("QR instructions end")}
          </S.ModalText>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};
