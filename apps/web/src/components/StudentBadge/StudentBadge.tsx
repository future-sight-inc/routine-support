import React from "react";

import { Student } from "@routine-support/domains";
import { Theme } from "@routine-support/ui-theme";

import { getColor } from "../../utils/getColor";
import * as S from "./styled";

interface StudentBadgeProps {
  student: Student;
  isPending?: boolean;
  dataTestId?: string;
}

export const StudentBadge: React.FC<StudentBadgeProps> = ({
  student,
  isPending,
  dataTestId,
}) => {
  return (
    <S.Wrapper
      color={isPending ? Theme.palette.secondary.main : getColor(student.color)}
      data-testid={dataTestId}
    >
      <S.Name>{student.name}</S.Name>
    </S.Wrapper>
  );
};
