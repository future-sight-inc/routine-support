import { MouseEvent, useEffect, useState } from "react";

import { StudentsPickerActions } from "./StudentsPicker";

export const useStudentsPickerComponent = (
  studentIds: string[],
  actions: StudentsPickerActions
) => {
  useEffect(() => {
    actions.getStudents();
  }, []);

  const handleStudentDelete = (idToDelete: string) => {
    const updatedIds = studentIds.filter((id) => id !== idToDelete);

    actions.onChange(updatedIds);
  };
  const handleStudentAdd = (idToAdd: string) => {
    studentIds.push(idToAdd);
    actions.onChange(studentIds);
    handleMenuClose();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return {
    models: { anchorEl, isMenuOpen },
    operations: {
      handleStudentDelete,
      handleStudentAdd,
      handleMenuOpen,
      handleMenuClose,
    },
  };
};
