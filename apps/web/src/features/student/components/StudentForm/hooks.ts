import { useState } from "react";

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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(null);

      if (values._id) {
        await actions.updateStudent(values as Student);
      } else {
        await actions.createStudent(values as Student);
      }

      actions.getStudents();
    } catch (error) {
      setSubmitError(error.message);
    }
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
      submitError,
    },
    operations: { handleSubmit: onSubmit, onDelete },
  };
};
