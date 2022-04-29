import React from "react";

import { Student } from "@routine-support/domains";

import { Theme } from "../../styled/theme";
import { getColor } from "../../utils/getColor";
import * as S from "./styled";

interface StudentBadgeProps {
  student: Student;
  isPending?: boolean;
}

export const StudentBadge: React.FC<StudentBadgeProps> = ({
  student,
  isPending,
}) => {
  return (
    <S.Wrapper
      color={isPending ? Theme.palette.secondary.main : getColor(student.color)}
    >
      <S.Name>{student.name}</S.Name>
    </S.Wrapper>
  );
};
