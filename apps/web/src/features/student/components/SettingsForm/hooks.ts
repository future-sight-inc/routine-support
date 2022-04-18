import { useState } from "react";

import { ColorEnum, Student } from "@routine-support/domains";
import { useForm } from "react-hook-form";

import { SettingsFormActions } from "./SettingsForm";

export const useSettingsFormComponent = (
  student: Partial<Student> | null,
  actions: SettingsFormActions
) => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { pinCode: "0000", color: ColorEnum.Purple, ...student },
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(null);

      await actions.updateSettings(values as Student);

      actions.getStudents();
    } catch (error) {
      setSubmitError(error.message);
    }
  });

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError,
    },
    operations: { handleSubmit: onSubmit },
  };
};
