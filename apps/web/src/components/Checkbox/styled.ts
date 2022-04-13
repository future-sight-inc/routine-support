import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styled from "styled-components";

import { LabelWithHelper } from "../LabelWithHelper";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

export const CheckIcon = styled(CheckBoxIcon).attrs(() => ({
  sx: { fontSize: 18 },
}))`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const EmptyIcon = styled(CheckBoxOutlineBlankIcon).attrs(() => ({
  sx: { fontSize: 18 },
}))`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Label = styled(LabelWithHelper).attrs(() => ({
  color: "normal",
}))``;
