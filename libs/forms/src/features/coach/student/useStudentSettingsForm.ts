import { useEffect, useState } from "react";

import { Student } from "@routine-support/domains";
import { useForm } from "react-hook-form";

export const useStudentSettingsForm = (
  student: Partial<Student> | undefined,
  actions: {
    updateSettings: (student: Student) => Promise<void>;
    getStudents: (config?: { silent: boolean }) => void;
  }
) => {
  // todo Костыль
  const { control, handleSubmit, formState, setValue, reset } = useForm<any>({
    defaultValues: student,
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(null);

      await actions.updateSettings(values as Student);

      actions.getStudents({ silent: true });
    } catch (error: any) { // todo Костыль
      setSubmitError(error.message);
    }
  });

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
    operations: { onSubmit },
  };
};
