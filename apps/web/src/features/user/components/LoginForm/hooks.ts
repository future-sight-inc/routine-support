import { useState } from "react";

import { UserLoginDto } from "@routine-support/domains";
import { useForm } from "react-hook-form";

import { LoginFormActions } from "./LoginForm";

export const useLoginFormComponent = (actions: LoginFormActions) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<UserLoginDto>();
  const [submitError, setSubmitError] = useState<string | undefined>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitError(undefined);

      await actions.login(data);
    } catch (error) {
      setSubmitError(error.message);
    }
  });

  return {
    models: { isSubmitting, submitError, control },
    operations: { register, handleSubmit: onSubmit },
  };
};
