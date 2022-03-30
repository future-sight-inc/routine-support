import React from "react";

import { MenuItem, Typography } from "@mui/material";
import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { Select } from "apps/web/src/components/Select";
import { useTranslation } from "react-i18next";

import { useStudentsPickerComponent } from "./hooks";
import * as S from "./styled";

export interface StudentsPickerActions {
  getStudents: () => void;
  onChange: (studentsId?: Id[]) => void;
}

interface StudentsPickerProps {
  value?: Id[];
  students: Student[];
  actions: StudentsPickerActions;
}

export const StudentsPicker: React.FC<StudentsPickerProps> = ({
  value,
  students,
  actions,
}) => {
  const {
    operations: { handleChange },
  } = useStudentsPickerComponent(actions);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <Typography variant="body2">{t("Choose students")}</Typography>
      <Select value={value} multiple onChange={handleChange} defaultValue={[]}>
        {students.map((student) => (
          <MenuItem value={student._id}>{student.name}</MenuItem>
        ))}
      </Select>
    </S.Wrapper>
  );
};
