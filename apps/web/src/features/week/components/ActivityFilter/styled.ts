import { Checkbox, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-self: flex-start;
    border: 1px solid ${theme.border.color};
    padding: 16px;
    border-radius: ${theme.borderRadius}px;
    background: ${theme.palette.common.lightgrey};
  `}

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterCheckbox = styled(Checkbox).attrs(
  ({ checkboxColor: color }: { checkboxColor: string }) => ({
    sx: {
      color,
      "&.Mui-checked": {
        color,
      },
    },
  })
)<{ checkboxColor: string }>`
  color: black;
`;

export const FilterName = styled(Typography).attrs(() => ({}))`
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.border.color};
`;
