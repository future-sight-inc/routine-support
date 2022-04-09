import React from "react";

import { FormControlLabel } from "@mui/material";
import { Student } from "@routine-support/domains";
import { ActivityFilter as ActivityFilterType } from "@routine-support/domains";
import { COMMON_ACTIVITY_COLOR } from "apps/web/src/constants/defaultActivityColor";
import { useTranslation } from "react-i18next";

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
      <S.Title>{t("Filters")}</S.Title>
      <S.FilterWrapper>
        <FormControlLabel
          control={
            <S.FilterCheckbox
              checkboxColor={COMMON_ACTIVITY_COLOR}
              name={"common"}
              checked={activityFilter.common}
              onChange={handleChange}
            />
          }
          label={<S.FilterName>{t("Common")}</S.FilterName>}
        />
      </S.FilterWrapper>
      {students.map((student) => (
        <S.FilterWrapper>
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
        </S.FilterWrapper>
      ))}
    </S.Wrapper>
  );
};
