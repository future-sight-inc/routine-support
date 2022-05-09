import { useState } from "react";

import { ColorEnum, Student } from "@routine-support/domains";
import { useConfirm } from "apps/web/src/services/ConfirmationService";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { StudentFormActions } from "./StudentForm";

export const useStudentFormComponent = (
  student: Partial<Student> | undefined,
  actions: StudentFormActions
) => {
  const { control, handleSubmit, formState, getValues } = useForm({
    defaultValues: { pinCode: "0000", color: ColorEnum.Purple, ...student },
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { confirm } = useConfirm();
  const { t } = useTranslation();

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(null);

      if (values._id) {
        await actions.updateStudent(values as Student);
      } else {
        await actions.createStudent(values as Student);
      }

      actions.getStudents();
    } catch (error: any) {
      setSubmitError(error.message);
    }
  });

  const onDelete = async () => {
    const student = getValues() as Student;

    if (student._id) {
      confirm({
        title: t("Confirm your action"),
        description: t("Are you sure you want to delete this student?"),
        onConfirm: async () => {
          await actions.deleteStudent(student);

          actions.getStudents();
        },
      });
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
