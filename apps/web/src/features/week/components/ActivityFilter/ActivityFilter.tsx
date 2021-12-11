import React from "react";

import { FormControlLabel } from "@mui/material";
import { Student } from "@routine-support/models";
import { Theme } from "apps/web/src/styled/theme";
import { Controller } from "react-hook-form";

import { useActivityFilterComponent } from "./hooks";
import * as S from "./styled";

export interface ActivityFilterActions {
  getWeek: (params: void, config: { silent: boolean }) => void;
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
    operations: { control },
  } = useActivityFilterComponent(actions);

  return (
    <S.Wrapper>
      <FormControlLabel
        control={
          <Controller
            name="common"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <S.FilterCheckbox
                checkboxColor={Theme.palette.common.green}
                checked={field.value}
                {...field}
              />
            )}
          />
        }
        label="Общие"
      />
      {students.length > 0 && <S.Divider />}
      {students.map((student) => (
        <FormControlLabel
          control={
            <Controller
              name={student._id as string}
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <S.FilterCheckbox
                  checkboxColor={student.color}
                  checked={field.value}
                  {...field}
                />
              )}
            />
          }
          label={<S.FilterName>{student.name}</S.FilterName>}
        />
      ))}
    </S.Wrapper>
  );
};
