import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: default;
`;

export const CurrentMonthRow = styled.div`
  height: 30px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentMonth = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))`
  text-transform: capitalize;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${({ theme }) =>
    css`
      border-radius: ${theme.borderRadius};
    `}

  &:hover {
    ${({ theme }) =>
    css`
        background: ${theme.palette.secondary.main};
      `};
  }
`;

export const WeeksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Week = styled.div<{ isCurrent?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 8px;
  cursor: pointer;

  ${({ theme }) =>
    css`
      border-radius: ${theme.borderRadius};
    `}

  &:hover {
    ${({ theme, isCurrent }) =>
    !isCurrent &&
      css`
        background: ${theme.palette.secondary.main};
      `};
  }

  ${({ theme, isCurrent }) =>
    isCurrent &&
    css`
      background: ${theme.palette.primary.main};

      ${Day} {
        color: ${theme.palette.common.white};
      }
    `}
`;

export const Day = styled(Typography)<{ isCurrentMonth?: boolean }>`
  width: 21px;
  text-align: center;

  ${({ theme, isCurrentMonth = true }) =>
    isCurrentMonth
      ? css`
          color: ${theme.palette.primary.text};
        `
      : css`
          color: ${theme.palette.secondary.text};
        `}
`;

export const DayNames = styled(Week)`
  cursor: default;

  &:hover {
    background: none;
  }
`;

export const Today = styled(Typography).attrs(() => ({
  variant: "text2Bold",
  color: "secondary",
}))``;

export const TodayWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: ${theme.borderRadius};
    cursor: pointer;

    background: ${theme.palette.secondary.main};
  `}
`;
