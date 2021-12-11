import React from "react";

import { FormControlLabel } from "@mui/material";
import { Student } from "@routine-support/models";
import { Theme } from "apps/web/src/styled/theme";

import { useActivityFilterComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFilterActions {
  // ! стоит объединить все в один объект для удобства и использовать типизацию
  getWeek: (params: undefined, config: { silent: boolean }) => void;
}

interface ActivityFilterProps {
  students: Student[];
  actions: ActivityFilterActions;
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({
  students,
  actions,
}) => {
  const {
    models: { activityFilter },
    operations: { handleChange },
  } = useActivityFilterComponent(actions);

  return (
    <S.Wrapper>
      <FormControlLabel
        control={
          <S.FilterCheckbox
            checkboxColor={Theme.palette.common.green}
            name={"common"}
            checked={activityFilter.common}
            onChange={handleChange}
          />
        }
        label="Общие"
      />
      {students.length > 0 && <S.Divider />}
      {students.map((student) => (
        <FormControlLabel
          control={
            <S.FilterCheckbox
              checkboxColor={student.color}
              name={student._id as string}
              checked={activityFilter[student._id]}
              onChange={handleChange}
            />
          }
          label={<S.FilterName>{student.name}</S.FilterName>}
        />
      ))}
    </S.Wrapper>
  );
};
