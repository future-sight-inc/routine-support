import { UserLoginDto } from "@routine-support/models";
import { LinkService } from "apps/web/src/services/LinkService";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";

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
      // ! Добавить уже наконец exception service
      setSubmitError(error.message);
    }
  });

  return {
    models: { isSubmitting, submitError, control },
    operations: { register, onSubmit },
  };
};
