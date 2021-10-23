import React from "react";

import * as S from "./styled";

interface AddActivityButtonProps {
  onClick: () => void;
}

export const AddActivityButton: React.FC<AddActivityButtonProps> = ({
  onClick,
}) => {
  // ! Добавить локализацию
  return <S.Button onClick={onClick}>+ Событие</S.Button>;
};
