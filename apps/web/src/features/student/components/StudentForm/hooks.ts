import { Student } from "@routine-support/domains";
import { useForm } from "react-hook-form";

import { StudentFormActions } from "./StudentForm";

export const useStudentFormComponent = (
  student: Partial<Student> | null,
  actions: StudentFormActions
) => {
  const { control, handleSubmit, formState, getValues } = useForm({
    defaultValues: student ? student : {},
  });

  const onSubmit = handleSubmit(async (values) => {
    if (values._id) {
      await actions.updateStudent(values as Student);
    } else {
      await actions.createStudent(values as Student);
    }

    actions.getStudents();
  });

  const onDelete = async () => {
    const id = getValues()._id;
    if (window.confirm("Confirm your action") && id) {
      await actions.deleteStudent(id);

      actions.getStudents();
    }
  };

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
    },
    operations: { handleSubmit: onSubmit, onDelete },
  };
};
