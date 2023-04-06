import { useState } from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { setFormErrors } from "@routine-support/forms";
import { useForm } from "@routine-support/forms";
import { SubmitErrorData } from "@routine-support/types";
import { AxiosError } from "axios";

import { RegisterActions } from "./Register";

export const useRegisterComponent = (actions: RegisterActions) => {
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
