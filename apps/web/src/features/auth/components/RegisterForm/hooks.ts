import { UserRegisterDto } from "@routine-support/models";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { RegisterFormActions } from "./RegisterForm";

export const useRegisterFormComponent = (actions: RegisterFormActions) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<UserRegisterDto>();
  const [submitError, setSubmitError] = useState<string | undefined>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitError(undefined);

      await actions.register(data);
    } catch (error) {
      // ! Добавить уже наконец exception service
      setSubmitError(error.message);
    }
  });

  return {
    models: { isSubmitting, submitError, control },
    operations: { register, handleSubmit: onSubmit },
  };
};
