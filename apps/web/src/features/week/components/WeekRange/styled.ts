import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`;

export const DayNumber = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))`
  margin-right: 8px;
`;

export const DayName = styled(Typography).attrs(() => ({
  variant: "text1",
}))`
  text-transform: capitalize;
`;

export const Day = styled.div<{ isToday?: boolean; isPassed?: boolean }>`
  height: 40px;
  display: flex;
  align-items: center;

  ${({ isPassed, theme }) =>
    isPassed &&
    css`
      ${DayNumber}, ${DayName} {
        color: ${theme.palette.secondary.text};
      }
    `}

  ${({ isToday, theme }) =>
    isToday &&
    css`
      ${DayNumber}, ${DayName} {
        color: ${theme.palette.primary.main};
      }
    `}
`;
