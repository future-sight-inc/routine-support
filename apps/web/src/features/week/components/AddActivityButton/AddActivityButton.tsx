import React from "react";

import { useTranslation } from 'react-i18next';

import * as S from "./styled";

interface AddActivityButtonProps {
  onClick: () => void;
}

export const AddActivityButton: React.FC<AddActivityButtonProps> = ({
  onClick,
}) => {
  const { t } = useTranslation()

  return <S.Button onClick={onClick}>+ {t("Activity")}</S.Button>;
};
