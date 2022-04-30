import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 55px repeat(7, 1fr);
  background: ${({ theme }) => theme.palette.border.main};
  grid-column-gap: 1px;
`;

export const Cell = styled.div<{ passed?: boolean }>`
  padding: 8px;
  min-height: ${({ theme }) => theme.size.cellHeight};
  box-sizing: border-box;
  background: ${({ theme }) => theme.palette.secondary.main};
  background: white;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    ${({ theme }) =>
    css`
        box-shadow: inset ${theme.palette.primary.main} 0px 1px 1px,
          inset ${theme.palette.primary.main} 0px 0px 0px 1px;
      `}
  }
`;

export const Column = styled.div<{ isWeekend?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto, ${({ theme }) => theme.size.cellHeight});
  grid-row-gap: 1px;
  height: 100%;

  position: relative;

  ${({ isWeekend }) =>
    isWeekend &&
    css`
      & ${Cell} {
        background: ${({ theme }) => theme.palette.common.lightblue};
      }
    `}
`;

export const AbsoluteColumn = styled.div<{ rowsCount: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: grid;

  pointer-events: none;
`;

export const TimeColumn = styled(Column)`
  text-align: center;
  position: relative;
  grid-row-gap: 0;

  & ${Cell} {
    display: flex;

    padding: 0;

    background: white;
    justify-content: center;
    cursor: default;

    &:hover {
      box-shadow: none;
    }
  }
`;

export const Time = styled(Typography).attrs(() => ({
  variant: "text2",
  color: "secondary",
}))`
  margin-top: -8px;
`;

export const TimeLine = styled.div<{ top: number }>`
  position: absolute;

  top: ${({ top }) => top}px;

  left: 0;
  right: 0;
  height: 2px;

  background: ${({ theme }) => theme.palette.primary.main};

  &::before {
    display: block;
    width: 10px;
    height: 10px;
    background: grey;
    margin-top: -4px;
    margin-left: -6px;
    border-radius: 50%;
    content: "";

    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const CurrentTime = styled(Typography).attrs(() => ({
  variant: "text2Bold",
  color: "white",
}))<{ top: number }>`
  position: absolute;

  top: ${({ top }) => top}px;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 35px;

  ${({ theme }) => css`
    padding: 4px;
    background: ${theme.palette.primary.main};
    border-radius: ${theme.borderRadius};
  `}
`;
