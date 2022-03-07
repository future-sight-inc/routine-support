import React from "react";

import { Button } from "apps/web/src/styled/components/Button";

interface AddStudentButtonProps {
  onClick: () => void;
}

export const AddStudentButton: React.FC<AddStudentButtonProps> = ({
  onClick,
}) => {
  return <Button onClick={onClick}>+ Студент</Button>;
};
