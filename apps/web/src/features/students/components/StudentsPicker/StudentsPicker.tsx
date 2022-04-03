import React from "react";

import { Chip, Menu } from "@mui/material";
import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { getStudentsByIds } from "apps/web/src/utils/getStudentsByIds";
import { useTranslation } from "react-i18next";

import { useStudentsPickerComponent } from "./hooks";
import * as S from "./styled";

export interface StudentsPickerActions {
  getStudents: () => void;
  onChange: (studentsId?: Id[]) => void;
}

interface StudentsPickerProps {
  value: Id[];
  students: Student[];
  actions: StudentsPickerActions;
}

export const StudentsPicker: React.FC<StudentsPickerProps> = ({
  value = [],
  students,
  actions,
}) => {
  const {
    models: { anchorEl, isMenuOpen },
    operations: {
      handleStudentAdd,
      handleStudentDelete,
      handleMenuOpen,
      handleMenuClose,
    },
  } = useStudentsPickerComponent(value, actions);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.OpenButton
        onClick={handleMenuOpen}
        disabled={value.length === students.length}
      >
        {t("Add student")}
      </S.OpenButton>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        {students.map((student) => (
          <S.MenuItem
            value={student._id}
            selected={value.some((studentId) => studentId === student._id)}
            onClick={() => handleStudentAdd(student._id)}
          >
            {student.name}
          </S.MenuItem>
        ))}
      </Menu>
      <S.StudentsWrapper>
        {getStudentsByIds(students, value).map((student) => {
          return (
            <Chip
              variant="outlined"
              onDelete={(event) => {
                event.stopPropagation();
                handleStudentDelete(student._id);
              }}
              key={student._id}
              label={student.name}
            />
          );
        })}
      </S.StudentsWrapper>
    </S.Wrapper>
  );
};
