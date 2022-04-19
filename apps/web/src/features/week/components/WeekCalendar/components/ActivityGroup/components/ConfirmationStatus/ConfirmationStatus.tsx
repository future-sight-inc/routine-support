import React, { MouseEvent } from "react";

import { Activity, Student } from "@routine-support/domains";
import { Modal } from "apps/web/src/components/Modal";
import { useTranslation } from "react-i18next";

import { useConfirmationStatusComponent } from "./hooks";
import * as S from "./styled";

interface ConfirmationStatusProps {
  activity: Activity;
  students: Student[];
}

export const ConfirmationStatus: React.FC<ConfirmationStatusProps> = ({
  activity,
  students,
}) => {
  const {
    models: { modalOpened, confirmedStudents, assignedStudents },
    operations: { handleModalOpen, handleModalClose },
  } = useConfirmationStatusComponent(activity, students);

  const { t } = useTranslation();

  return (
    <S.Wrapper
      onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
    >
      <S.ConfirmationWrapper onClick={handleModalOpen}>
        <S.CheckedIcon />
        <S.ConfirmedNumber>
          {confirmedStudents.length}/{assignedStudents.length}
        </S.ConfirmedNumber>
      </S.ConfirmationWrapper>
      <Modal isOpened={modalOpened} onClose={handleModalClose}>
        <S.ModalTitle>{t("Activity status")}</S.ModalTitle>
        <S.ModalContent>
          <S.List>
            <S.ConfirmedHeading>{t("Completed")}</S.ConfirmedHeading>
            {confirmedStudents.map((student) => (
              <S.StudentName>{student.name}</S.StudentName>
            ))}
          </S.List>
          <S.List>
            <S.PendingHeading>{t("Pending")}</S.PendingHeading>
            {assignedStudents.map((student) => (
              <S.StudentName>{student.name}</S.StudentName>
            ))}
          </S.List>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};
