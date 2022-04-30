import { useState } from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { setFormErrors } from "apps/web/src/utils/setFormErrors";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import { RegisterFormActions } from "./RegisterForm";

export const useRegisterFormComponent = (actions: RegisterFormActions) => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting },
  } = useForm<RegisterCoachDto>();
  const [submitError, setSubmitError] = useState<string | undefined>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitError(undefined);

      await actions.register(data);
    } catch (error) {
      const data = (error as AxiosError<SubmitErrorData>).response?.data;

      setFormErrors(data, setError, setSubmitError);
    }
  });

  return {
    models: { isSubmitting, submitError, control },
    operations: { register, handleSubmit: onSubmit },
  };
};
