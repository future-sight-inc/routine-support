import React from "react";

import * as S from "./styled";

interface AddStudentCardProps {
  onStudentModalOpen: () => void;
}

export const AddStudentCard: React.FC<AddStudentCardProps> = ({
  onStudentModalOpen,
}) => {
  return (
    <S.Card onClick={onStudentModalOpen}>
      <S.AddIcon />
    </S.Card>
  );
};
