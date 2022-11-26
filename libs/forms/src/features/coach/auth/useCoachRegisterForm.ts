import { useState } from "react";

import { RegisterCoachDto } from "@routine-support/domains";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { setFormErrors, SubmitErrorData } from "@routine-support/forms";

export const useCoachRegisterForm = (actions: {
  register: (data: RegisterCoachDto) => Promise<void>;
}) => {
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
