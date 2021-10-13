import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 140px repeat(7, 1fr);
  background: ${({ theme }) => theme.border.color};
  border: 1px solid ${({ theme }) => theme.border.main};
  grid-column-gap: 1px;
  border-radius: 8px;
  height: 100%;
`;

export const Cell = styled(Box)`
  padding: 8px;
  min-height: 40px;
  box-sizing: border-box;
  background: white;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Column = styled(Box)<{ today?: boolean; weekend?: boolean }>`
  display: grid;
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

  ${({ weekend }) =>
    weekend &&
    css`
      & ${Cell} {
        background: ${({ theme }) => theme.palette.common.lightblue};
      }
    `}

  ${({ today }) =>
    today &&
    css`
      & ${Cell} {
        background: ${({ theme }) => theme.palette.common.grey};
      }
    `}
`;

export const AbsoluteColumn = styled(Box)<{ rowsCount: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: grid;
  grid-template-rows: repeat(${({ rowsCount }) => rowsCount}, 1fr);

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
