import { SubmitErrorData } from "@routine-support/types";
import { UseFormSetError } from "react-hook-form";

export const setFormErrors = (
  submitErrorData: SubmitErrorData = { isValid: true },
  setError: UseFormSetError<any>,
  setSubmitError: (error?: string) => void
) => {
  setSubmitError(submitErrorData?.error);
  submitErrorData.errors?.forEach((error) => {
    setError(error.name, error);
  });
};
