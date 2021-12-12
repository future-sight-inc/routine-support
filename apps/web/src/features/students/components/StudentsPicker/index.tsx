import { Control, Controller } from "react-hook-form";

import { useStudents } from "../../useStudents";
import { StudentsPicker as UncontrolledStudentsPicker } from "./StudentsPicker";

interface StudentsPickerProps {
  // ! Не знаем конечного типа
  control: Control<any>;
  name: string;
}

export const StudentsPicker: React.FC<StudentsPickerProps> = ({
  control,
  name,
}) => {
  const {
    models: { students },
    operations: { getStudents },
  } = useStudents();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <UncontrolledStudentsPicker
          value={field.value}
          opened={field.value?.length}
          students={students}
          actions={{ getStudents, onChange: field.onChange }}
        />
      )}
    />
  );
};
