import React from "react";

import * as S from "./styled";

interface AddStudentCardProps {
  onStudentAdd: () => void;
}

export const AddStudentCard: React.FC<AddStudentCardProps> = ({
  onStudentAdd,
}) => {
  return (
    <S.Card onClick={onStudentAdd}>
      <S.AddIcon />
    </S.Card>
  );
};
