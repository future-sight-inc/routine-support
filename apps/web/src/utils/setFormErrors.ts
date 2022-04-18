import { FormError, SubmitErrorData } from "@routine-support/types";

export const setFormErrors = (
  submitErrorData: SubmitErrorData = { isValid: true },
  setError: (name: string, error: FormError) => void,
  setSubmitError: (error?: string) => void
) => {
  setSubmitError(submitErrorData?.error);
  submitErrorData.errors?.forEach((error) => {
    setError(error.name, error);
  });
};
