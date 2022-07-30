import { Controller } from "apps/web/src/components/FormFields/Controller";
import { FormFieldProps } from "apps/web/src/components/FormFields/types";
import { useStudents } from "apps/web/src/features/students/useStudents";

import { StudentsPicker as UncontrolledStudentsPicker } from "../../StudentsPicker";

export const StudentsPicker: React.FC<FormFieldProps> = ({
  name,
  control,
  required,
  disabled,
  label,
}) => {
  const {
    models: { students },
  } = useStudents();

  return (
    <Controller
      name={name}
      control={control}
      required={required}
      disabled={disabled}
      label={label}
      render={({ field }) => (
        <UncontrolledStudentsPicker
          value={field.value}
          students={students}
          onChange={field.onChange}
        />
      )}
    />
  );
};
