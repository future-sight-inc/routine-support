import { Checkbox } from "@mui/material";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-self: flex-start;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))``;

export const FilterWrapper = styled.div`
  padding-left: 8px;
  box-sizing: border-box;

  &:hover {
    ${({ theme }) =>
    css`
        background: ${theme.palette.secondary.main};
        border-radius: ${theme.borderRadius};
      `};
  }
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
  height: 30px;
`;

export const FilterName = styled(Typography).attrs(() => ({
  variant: "text1",
}))`
  width: 118px;
  overflow: hidden;
  white-space: break-word;
  user-select: none;
  padding-right: 8px;
  box-sizing: border-box;
`;
