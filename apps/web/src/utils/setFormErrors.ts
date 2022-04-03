import { FormError, SubmitErrorData } from "@routine-support/types";

export const setFormErrors = (
  submitErrorData: SubmitErrorData = { isValid: true },
  setError: (name: string, error: FormError) => void
  // setSubmitError
) => {
  // если есть ошибка формы ()
  // положи ошибку в submitError

  submitErrorData.errors?.forEach((error) => setError(error.name, error));
};
