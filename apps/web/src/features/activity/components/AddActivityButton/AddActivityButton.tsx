import React from "react";

import * as S from "./styled";

interface AddActivityButtonProps {
  onClick: () => void;
}

export const AddActivityButton: React.FC<AddActivityButtonProps> = ({
  onClick,
}) => {
  return <S.Button onClick={onClick}>+ Activity</S.Button>;
};
