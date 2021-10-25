import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 140px repeat(7, 1fr);
  background: ${({ theme }) => theme.border.color};
  border: 1px solid ${({ theme }) => theme.border.main};
  grid-column-gap: 1px;
  border-radius: 8px;
  max-height: calc(100vh - 60px - 32px - 40px - 48px);
  overflow-y: scroll;
  position: relative;
`;

export const Cell = styled.div<{ passed?: boolean }>`
  padding: 8px;
  min-height: ${({ theme }) => theme.size.cellHeight};
  box-sizing: border-box;
  background: ${({ theme }) => theme.palette.common.grey};

  ${({ passed }) =>
    passed &&
    css`
      cursor: pointer;
      background: white;

      &:hover {
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
      }
    `}
`;

export const Column = styled.div<{ today?: boolean; weekend?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto, ${({ theme }) => theme.size.cellHeight});
  grid-row-gap: 1px;
  height: 100%;

  position: relative;

  &:first-child ${Cell}:first-child {
    border-radius: 8px 0 0 0;
  }

  &:first-child ${Cell}:last-child {
    border-radius: 0 0 0 8px;
  }

  &:last-child ${Cell}:first-child {
    border-radius: 0 8px 0 0;
  }

  &:last-child ${Cell}:last-child {
    border-radius: 0 0 8px 0;
  }

  ${({ today }) =>
    today &&
    css`
      & ${Cell} {
        background: ${({ theme }) => theme.palette.common.grey};
      }
    `}

  ${({ weekend }) =>
    weekend &&
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

  & ${Cell} {
    background: ${({ theme }) => theme.palette.common.lightgrey};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;

    &:hover {
      border: none;
    }
  }
`;

export const Time = styled(Typography).attrs(() => ({ variant: "body2" }))``;

export const TimeLine = styled.div<{ top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
  right: 0;
  height: 1px;
  background: ${({ theme }) => theme.palette.primary.main};
`;
