import { useEffect, useState } from "react";

import { ColorEnum, Student } from "@routine-support/domains";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useStudentForm = (
  student: Partial<Student> | undefined,
  actions: {
    createStudent: (student: Student) => Promise<void>;
    updateStudent: (student: Student) => Promise<void>;
    deleteStudent: (student: Student) => Promise<void>;
    closeModal: () => void;
    getStudents: (config?: { silent: boolean }) => void;
  }
) => {
  const { control, handleSubmit, formState, setValue, reset } = useForm<any>({
    defaultValues: { pinCode: "0000", color: ColorEnum.Purple, ...student },
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  // const { confirm } = useConfirm();
  // const { t } = useTranslation();

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(null);

      if (values._id) {
        await actions.updateStudent(values as Student);
      } else {
        await actions.createStudent(values as Student);
      }

      actions.getStudents({ silent: true });
    } catch (error: any) {
      setSubmitError(error.message);
    }
  });

  const onDelete = async () => {
    if (student?._id) {
      Alert.alert(
        "Confirm your action",
        "",
        [
          {
            text: "Cancel",

            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: async () => {
              await actions.deleteStudent(student as Student);
              actions.getStudents();
            },
            style: "default",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => null,
        }
      );
    }
  };

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
