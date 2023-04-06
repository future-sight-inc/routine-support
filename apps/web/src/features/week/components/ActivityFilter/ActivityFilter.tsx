import React from "react";

import { ActivityFilter as ActivityFilterType, Student } from "@routine-support/domains";
import { COMMON_ACTIVITY_COLOR, getColor } from "@routine-support/ui-theme";
import { Checkbox } from "apps/web/src/components/Checkbox";
import { useTranslation } from "react-i18next";

import { useActivityFilterComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFilterActions {
  getWeek: (data?: { activityFilter?: ActivityFilterType }) => void;
}

interface ActivityFilterProps {
  students: Student[];
  actions: ActivityFilterActions;
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({ students, actions }) => {
  const {
    models: { activityFilter },
    operations: { handleChange },
  } = useActivityFilterComponent(students, actions);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Title>{t("Filters")}</S.Title>
      <S.FiltersWrapper>
        <S.FilterWrapper>
          <S.Checkbox
            color={COMMON_ACTIVITY_COLOR}
            onChange={(value) => handleChange("common", value)}
            value={activityFilter.includes("common")}
            label={t("Common")}
            labelVariant="text1"
          />
        </S.FilterWrapper>
        {students.map((student) => (
          <S.FilterWrapper>
            <Checkbox
              color={getColor(student.color)}
              onChange={(value) => handleChange(student._id, value)}
              value={activityFilter.includes(student._id)}
              label={student.name}
              labelVariant="text1"
            />
          </S.FilterWrapper>
        ))}
      </S.FiltersWrapper>
    </S.Wrapper>
  );
};
