import React, { MouseEvent } from "react";

import { Student } from "@routine-support/domains";
import { getColor } from "@routine-support/ui-theme";

import * as S from "./styled";

interface StudentCardProps {
  student: Student;
  onStudentModalOpen: (student: Student) => void;
  onSettingsModalOpen: (student: Student) => void;
  onQROpen: (student: Student) => void;
  onStudentDelete: (student: Student) => void;
}
export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onStudentModalOpen,
  onSettingsModalOpen,
  onQROpen,
  onStudentDelete,
}) => {
  const handleStudentModalOpen = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onStudentModalOpen(student);
  };

  const handleSettingsModalOpen = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onSettingsModalOpen(student);
  };

  const handleQROpen = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onQROpen(student);
  };

  const handleDelete = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onStudentDelete(student);
  };

  return (
    <S.Card
      studentColor={getColor(student.color)}
      onClick={handleStudentModalOpen}
    >
      <S.Name>{student.name}</S.Name>
      <S.FaceIcon />
      <S.ControlsPanel>
        <S.IconWrapper onClick={handleStudentModalOpen}>
          <S.ModifyIcon />
        </S.IconWrapper>
        <S.IconWrapper onClick={handleSettingsModalOpen}>
          <S.SettingsIcon />
        </S.IconWrapper>
        <S.IconWrapper onClick={handleQROpen}>
          <S.QRCodeIcon />
        </S.IconWrapper>
        <S.IconWrapper onClick={handleDelete}>
          <S.DeleteIcon />
        </S.IconWrapper>
      </S.ControlsPanel>
    </S.Card>
  );
};
