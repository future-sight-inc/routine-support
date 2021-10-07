import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`;

export const Day = styled(Box)<{ today?: boolean }>`
  background: black;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  ${({ today }) =>
    today &&
    css`
      background: white;
      color: black;
    `}
`;

export const DayName = styled(Typography).attrs(() => ({
  variant: "body2",
}))`
  margin-right: 4px;
`;

export const Date = styled(Typography).attrs(() => ({
  variant: "body2",
}))`
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`;
