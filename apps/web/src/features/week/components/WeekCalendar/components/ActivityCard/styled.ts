import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

export const Wrapper = styled(Box)<{
  rowStart: number;
  marginTop: number;
  count: number;
  index: number;
  height: number;
  backgroundColor: string;
}>`
  box-sizing: border-box;
  overflow: hidden;

  background: ${({ backgroundColor }) => backgroundColor};

  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius}px;
    padding: 8px;
  `}

  ${({ rowStart, marginTop, count, index, height, theme }) => css`
    top: calc(
      ${rowStart} * ${theme.size.cellHeight} + ${marginTop} *
        ${theme.size.cellHeight} + 1px * ${rowStart}
    );
    height: calc(${height} * ${theme.size.cellHeight} + ${height}px - 1px);
    width: calc(100% / ${count} - 4px);
    left: calc(100% / ${count} * ${index} + 2px);
  `}

  pointer-events: all;
  cursor: pointer;
`;

export const Time = styled(Typography)`
  font-weight: bold;
`;

export const Name = styled(Typography)``;
