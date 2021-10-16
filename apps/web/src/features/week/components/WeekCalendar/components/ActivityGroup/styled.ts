import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

export const Wrapper = styled(Box)<{
  rowStart: number;
  rowEnd: number;
  rowsCount: number;
}>`
  width: calc(100% - 8px);
  box-sizing: border-box;

  overflow: hidden;

  justify-self: center;

  display: grid;
  grid-template-rows: repeat(${({ rowsCount }) => rowsCount}, 1fr);

  grid-column-gap: 4px;

  ${({ rowStart, rowEnd }) => css`
    grid-row-start: ${rowStart};
    grid-row-end: ${rowEnd};
  `}

  pointer-events: all;
  cursor: pointer;
`;
