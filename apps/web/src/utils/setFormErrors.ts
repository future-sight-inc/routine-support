import { FormError, SubmitErrorData } from "@routine-support/types";

export const setFormErrors = (
  submitErrorData: SubmitErrorData = { isValid: true },
  setError: (name: string, error: FormError) => void,
  // setSubmitError
  setSubmitError: (error: string) => void
) => {
  // если есть ошибка формы ()
  // положи ошибку в submitError
  submitErrorData.error
    ? setSubmitError(submitErrorData.error)
    : setSubmitError("");
  submitErrorData.errors?.forEach((error) => {
    // setSubmitError(error.message);
    setError(error.name, error);
  });
};
