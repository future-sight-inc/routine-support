import React, { MouseEvent } from "react";

import { Typography } from "@mui/material";
import { Activity, Student } from "@routine-support/domains";
import { Modal } from "apps/web/src/components/Modal";
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation()

  return (
    <div
      onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
    >
      <S.CheckedButton onClick={handleModalOpen}>
        <S.CheckedIcon />
        <S.Checked>
          {confirmedStudents.length}/{assignedStudents.length}
        </S.Checked>
      </S.CheckedButton>

      <Modal opened={modalOpened} onClose={handleModalClose}>
        <S.ModalTitle>{t("Activity status")}</S.ModalTitle>
        <S.ModalContent>
          <S.List>
            <S.ListHeading>{t("Completed")}</S.ListHeading>
            {confirmedStudents.map((student) => (
              <Typography>{student.name}</Typography>
            ))}
          </S.List>
          <S.List>
            <S.ListHeading>{t("Pending")}</S.ListHeading>
            {assignedStudents.map((student) => (
              <Typography>{student.name}</Typography>
            ))}
          </S.List>
        </S.ModalContent>
      </Modal>
    </div>
  );
};
