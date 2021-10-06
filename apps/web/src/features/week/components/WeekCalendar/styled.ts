import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";
import { Theme } from "styles/theme";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background: ${Theme.palette.border};
  border: 1px solid ${Theme.palette.border};
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
    border: 1px solid ${Theme.palette.primary};
  }
`;

export const Column = styled(Box)<{ today?: boolean; weekend?: boolean }>`
  display: grid;
  grid-row-gap: 1px;
  height: 100%;

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
        background: ${Theme.palette.grey};
      }
    `}

  ${({ weekend }) =>
    weekend &&
    css`
      & ${Cell} {
        background: ${Theme.palette.lightblue};
      }
    `}
`;

export const TimeColumn = styled(Column)`
  text-align: center;

  & ${Cell} {
    background: ${Theme.palette.lightGrey};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: none;
    }
  }
`;

export const Time = styled(Typography).attrs(() => ({ variant: "body2" }))``;
