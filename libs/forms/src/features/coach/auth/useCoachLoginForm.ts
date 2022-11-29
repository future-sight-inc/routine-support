import { useState } from "react";

import { LoginCoachDto } from "@routine-support/domains";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { setFormErrors } from "@routine-support/forms";
import { SubmitErrorData } from "@routine-support/types";

export const useCoachLoginForm = (actions: { login: (data: LoginCoachDto) => Promise<void> }) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting },
  } = useForm<LoginCoachDto>();
  const [submitError, setSubmitError] = useState<string | undefined>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitError(undefined);

      await actions.login(data);
    } catch (error) {
      const data = (error as AxiosError<SubmitErrorData>).response?.data;

      setFormErrors(data, setError, setSubmitError);
    }
  });

  return {
    models: { isSubmitting, submitError, control },
    operations: { handleSubmit: onSubmit },
  };
};
