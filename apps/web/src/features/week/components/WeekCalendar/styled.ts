import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  // todo: use theme
  background: #dedede;
  border: 1px solid #dedede;
  grid-column-gap: 1px;
  border-radius: 8px;
`;

export const Cell = styled(Box)`
  padding: 8px;
  min-height: 40px;
  background: white;
`;

export const Column = styled(Box)<{ today?: boolean }>`
  display: grid;
  grid-row-gap: 1px;

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
        // todo: use theme
        background: #f3f3f3;
      }
    `}
`;

export const TimeColumn = styled(Column)`
  text-align: center;

  & .cell {
    // todo: use theme
    background: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
