import React from "react";

import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { Select } from "apps/web/src/components/Select";
import { useTranslation } from 'react-i18next';

import { useStudentsPickerComponent } from "./hooks";
import * as S from "./styled";

export interface StudentsPickerActions {
  getStudents: () => void;
  onChange: (studentsId?: Id[]) => void;
}

interface StudentsPickerProps {
  opened?: boolean;
  value?: Id[];
  students: Student[];
  actions: StudentsPickerActions;
}

export const StudentsPicker: React.FC<StudentsPickerProps> = ({
  opened: defaultOpened,
  value,
  students,
  actions,
}) => {
  const {
    models: { opened },
    operations: { handleOpenChange, handleChange },
  } = useStudentsPickerComponent(defaultOpened, actions);
  
  const { t } = useTranslation()

  return (
    <S.Wrapper opened={opened}>
      <FormControlLabel
        control={<Checkbox onChange={handleOpenChange} checked={opened} />}
        label={t("Individual activity")}
      />
      {opened && (
        <>
          <Typography variant="body2">
            {t("Choose students")}
          </Typography>
          <Select
            value={value}
            multiple
            onChange={handleChange}
            defaultValue={[]}
          >
            {students.map((student) => (
              <MenuItem value={student._id}>{student.name}</MenuItem>
            ))}
          </Select>
        </>
      )}
    </S.Wrapper>
  );
};
