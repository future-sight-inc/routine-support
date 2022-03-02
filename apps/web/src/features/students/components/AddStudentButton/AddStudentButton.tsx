import React from "react";

import { Button } from "apps/web/src/styled/components/Button";
import { useTranslation } from 'react-i18next';

interface AddStudentButtonProps {
  onClick: () => void;
}

export const AddStudentButton: React.FC<AddStudentButtonProps> = ({
  onClick,
}) => {
  const { t } = useTranslation()

  return <Button onClick={onClick}>+ {t("Student")}</Button>;
};
