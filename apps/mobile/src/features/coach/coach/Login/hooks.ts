import { useState } from "react";

import { LoginCoachDto } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { setFormErrors } from "apps/mobile/src/utils/setFormErrors";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import { LoginActions } from "./Login";

export const useLoginComponent = (actions: LoginActions) => {
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

      console.log(data);

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
