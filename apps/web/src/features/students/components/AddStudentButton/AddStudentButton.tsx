import { Button } from "apps/web/src/styled/components/Button";
import React from "react";

interface AddStudentButtonProps {
  onClick: () => void;
}

export const AddStudentButton: React.FC<AddStudentButtonProps> = ({
  onClick,
}) => {
  return <Button onClick={onClick}>+ Студент</Button>;
};
