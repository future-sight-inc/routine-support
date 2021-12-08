import React from "react";

import { SelectProps } from "@mui/material";

import * as S from "./styled";

export const Select: React.FC<SelectProps> = ({ ...props }) => {
  return <S.Select {...props} />;
};
