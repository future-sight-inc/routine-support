import React from "react";

import { FormControlLabel } from "@mui/material";
import { Student } from "@routine-support/domains";
import { ActivityFilter as ActivityFilterType } from "@routine-support/domains";
import { useTranslation } from "react-i18next";

import { Theme } from '../../../../styled/theme'
import { useActivityFilterComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFilterActions {
  getWeek: (data: {
    activityFilter: ActivityFilterType;
    config: { silent: boolean };
  }) => void;
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
  } = useActivityFilterComponent(students, actions);

  const { t } = useTranslation();

  if (!Object.keys(activityFilter).length) {
    return null;
  }

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
        label={<S.FilterName>{t("Common")}</S.FilterName>}
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
