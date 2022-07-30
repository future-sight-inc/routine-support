import { Control } from "react-hook-form";

export interface FormFieldProps {
  name: string;
  // ! Так как не знаем типа полей формы
  // eslint-disable-next-line
  control: Control<any>;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  helperText?: string;
}
