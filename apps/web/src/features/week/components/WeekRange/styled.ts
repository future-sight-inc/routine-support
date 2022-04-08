import Typography from "@mui/material/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`;

export const Day = styled.div<{ today?: boolean }>`
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
      border: 1px solid ${({ theme }) => theme.palette.border.main};
      box-sizing: border-box;
      margin-left: -1px;
      margin-right: -1px;
    `}
`;

export const DayName = styled(Typography).attrs(() => ({
  variant: "body2",
}))`
  margin-right: 4px;
  color: ${({ theme }) => theme.palette.secondary.text};
`;

export const Date = styled(Typography).attrs(() => ({
  variant: "body2",
}))``;
