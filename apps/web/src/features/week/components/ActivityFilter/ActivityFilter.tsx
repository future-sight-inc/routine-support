import React from "react";

import { FormControlLabel } from "@mui/material";
import { Student } from "@routine-support/models";
import { Id } from "@routine-support/types";
import { Theme } from "apps/web/src/styled/theme";

import * as S from "./styled";

interface ActivityFilterActions {
  getWeek: (params: {
    filter: {
      students?: Id[];
      common?: boolean;
    };
  }) => void;
}

interface ActivityFilterProps {
  students: Student[];
  actions: ActivityFilterActions;
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({ students }) => {
  return (
    <S.Wrapper>
      <FormControlLabel
        control={
          <S.FilterCheckbox checkboxColor={Theme.palette.common.green} />
        }
        label="Общие"
      />
      {students.length > 0 && <S.Divider />}
      {students.map((student) => (
        <FormControlLabel
          control={<S.FilterCheckbox checkboxColor={student.color} />}
          label={<S.FilterName>{student.name}</S.FilterName>}
        />
      ))}
    </S.Wrapper>
  );
};
