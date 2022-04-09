import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`;

export const DayName = styled(Typography).attrs(() => ({
  variant: "text1Bold",
  color: "secondary",
}))`
  text-transform: capitalize;
`;

export const Day = styled.div<{ today?: boolean }>`
  height: 40px;
  display: flex;
  align-items: center;

  ${({ today, theme }) =>
    today &&
    css`
      ${DayName} {
        color: ${theme.palette.primary.main};
      }
    `}
`;
