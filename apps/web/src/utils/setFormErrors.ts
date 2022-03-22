import { FormError } from "@routine-support/types";

export const setFormErrors = (
  errors: {
    [key: string]: FormError;
  } = {},
  setError: (name: string, error: FormError) => void
) => {
  Object.keys(errors).forEach((key) => setError(key, errors[key]));
};
