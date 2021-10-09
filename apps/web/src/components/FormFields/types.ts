import { Control } from "react-hook-form";

export interface FormFieldProps {
  name: string;
  control: Control;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}
