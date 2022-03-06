import { ChangeEvent, useEffect, useState } from "react";

import { StudentsPickerActions } from "./StudentsPicker";

export const useStudentsPickerComponent = (
  defaultOpened = false,
  actions: StudentsPickerActions
) => {
  useEffect(() => {
    actions.getStudents();
  }, []);

  const [opened, setOpened] = useState(defaultOpened || false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
    actions.onChange([]);
  };

  // ! Баг в TS
  // eslint-disable-next-line
  const handleOpenChange = (event: ChangeEvent<any>) => {
    event.target.checked ? handleOpen() : handleClose();
  };

  // ! Баг в Material
  // eslint-disable-next-line
  const handleChange = (event: any) => {
    actions.onChange(event.target.value);
  };

  return { models: { opened }, operations: { handleChange, handleOpenChange } };
};
