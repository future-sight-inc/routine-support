import React, { MouseEvent } from "react";

import { Activity, Student } from "@routine-support/domains";
import { Modal } from "apps/web/src/components/Modal";
import { StudentBadge } from "apps/web/src/components/StudentBadge";
import { useTranslation } from "react-i18next";

import { useConfirmationStatusComponent } from "./hooks";
import {
  ConfirmationStatusLocatorsEnum,
  createConfirmedStudentDataTestId,
  createPendingStudentDataTestId,
} from "./locators";
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
    models: {
      modalOpened,
      confirmedStudents,
      assignedStudents,
      pendingStudents,
    },
    operations: { handleModalOpen, handleModalClose },
  } = useConfirmationStatusComponent(activity, students);

  const { t } = useTranslation();

  const statusCounter = `${confirmedStudents.length}/${assignedStudents.length}`;

  return (
    <S.Wrapper
      onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      data-testid={ConfirmationStatusLocatorsEnum.Wrapper}
    >
      <S.ConfirmationWrapper onClick={handleModalOpen}>
        <S.CheckedIcon />
        <S.ConfirmedNumber data-testid={ConfirmationStatusLocatorsEnum.Counter}>
          {statusCounter}
        </S.ConfirmedNumber>
      </S.ConfirmationWrapper>
      <Modal isOpened={modalOpened} onClose={handleModalClose}>
        <S.ModalContent
          data-testid={ConfirmationStatusLocatorsEnum.ModalContent}
        >
          <S.ModalTitle>{t("Activity status")}</S.ModalTitle>
          {pendingStudents.length > 0 && (
            <S.Section
              data-testid={ConfirmationStatusLocatorsEnum.PendingStudentWrapper}
            >
              <S.SectionTitle>{t("Pending")}</S.SectionTitle>
              <S.StudentsWrapper>
                {pendingStudents.map((student, index) => (
                  <StudentBadge
                    student={student}
                    key={index}
                    isPending
                    dataTestId={createPendingStudentDataTestId(student)}
                  />
                ))}
              </S.StudentsWrapper>
            </S.Section>
          )}
          <S.Section>
            <S.SectionTitle>
              {t("Completed")} {statusCounter}
            </S.SectionTitle>
            <S.StudentsWrapper>
              {confirmedStudents.map((student, index) => (
                <StudentBadge
                  student={student}
                  key={index}
                  dataTestId={createConfirmedStudentDataTestId(student)}
                />
              ))}
            </S.StudentsWrapper>
          </S.Section>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};
