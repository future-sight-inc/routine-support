import { ReactNode } from "react";
import { RefCallBack } from "react-hook-form";

export interface FieldWrapperProps {
  label?: string;
  helperText?: string;
  fieldRef?: RefCallBack;
  error?: string;
  children: ReactNode;
}
