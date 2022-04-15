import React from "react";

import { Student } from "@routine-support/domains";

import * as S from "./styled";

interface StudentCardProps {
  student: Student;
  onStudentModify: () => void;
  onStudentSettings: () => void;
  onQROpen: () => void;
  onStudentDelete: () => void;
}
export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onStudentModify,
  onStudentSettings,
  onQROpen,
  onStudentDelete,
}) => {
  return (
    <S.Card studentColor={student.color} onClick={onStudentModify}>
      <S.Name>{student.name}</S.Name>
      <S.FaceIcon />
      <S.ControlsPanel>
        <S.IconWrapper
          onClick={(event) => {
            event.stopPropagation();
            onStudentModify();
          }}
        >
          <S.ModifyIcon />
        </S.IconWrapper>
        <S.IconWrapper
          onClick={(event) => {
            event.stopPropagation();
            onStudentSettings();
          }}
        >
          <S.SettingsIcon />
        </S.IconWrapper>
        <S.IconWrapper
          onClick={(event) => {
            event.stopPropagation();
            onQROpen();
          }}
        >
          <S.QRCodeIcon />
        </S.IconWrapper>
        <S.IconWrapper
          onClick={(event) => {
            event.stopPropagation();
            onStudentDelete();
          }}
        >
          <S.DeleteIcon />
        </S.IconWrapper>
      </S.ControlsPanel>
    </S.Card>
  );
};
