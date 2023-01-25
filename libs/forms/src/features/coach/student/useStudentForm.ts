import { useEffect, useState } from "react";

import { Student } from "@routine-support/domains";
import { useForm } from "react-hook-form";

export const useStudentForm = (
  student: Partial<Student> | undefined,
  actions: {
    createStudent: (data: Student) => Promise<void>;
    updateStudent: (data: Student) => Promise<void>;
    deleteStudent: (data: Student) => Promise<void>;
    getStudents: (config?: { silent: boolean }) => void;
  }
) => {
  const { control, handleSubmit, formState, setValue, reset } = useForm<any>({
    defaultValues: student,
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

      actions.getStudents({ silent: true });
    } catch (error: any) { // todo Костыль
      setSubmitError(error.message);
    }
  });

  const onDelete = async () => {
    if (student?._id) {
      await actions.deleteStudent(student as Student);

      actions.getStudents();
    }
  };

  // todo Костыль
  useEffect(() => {
    if (student) {
      Object.keys(student).forEach((key) => {
        setValue(key, student[key]);
      });
    } else {
      reset();
    }
  }, [student]);

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError,
    },
    operations: { onSubmit, onDelete },
  };
};
