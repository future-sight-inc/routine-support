import { useEffect } from "react";

import { StudentsPickerActions } from "./StudentsPicker";

export const useStudentsPickerComponent = (actions: StudentsPickerActions) => {
  useEffect(() => {
    actions.getStudents();
  }, []);

  // ! Баг в Material
  // eslint-disable-next-line
  const handleChange = (event: any) => {
    actions.onChange(event.target.value);
  };

  return { operations: { handleChange } };
};
