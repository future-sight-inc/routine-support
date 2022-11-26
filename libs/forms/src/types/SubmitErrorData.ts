import { FormError } from "./FormError";

export interface SubmitErrorData {
  isValid: boolean;
  errors?: FormError[];
  error?: string;
}
