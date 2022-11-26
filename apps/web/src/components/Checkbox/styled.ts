import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styled, { css } from "styled-components";


export const CheckIcon = styled(CheckBoxIcon).attrs(() => ({
  sx: { fontSize: 20 },
}))``;

export const Wrapper = styled.div<{ color?: string; width?: number }>`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  height: 40px;

  ${({ theme, color }) => css`
    ${CheckIcon} {
      color: ${color ? color : theme.palette.primary.main};
    }
  `};
`;

export const EmptyIcon = styled(CheckBoxOutlineBlankIcon).attrs(() => ({
  sx: { fontSize: 20 },
}))`
  color: ${({ theme }) => theme.palette.secondary.text};
`;
