import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { css } from "styled-components";
import styled from "styled-container-query";

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
  gap: 4px;
  margin: 0;

  padding: 8px;

  &:container(max-width: 100px) {
    padding: 4px;
  }

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius}px;
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
  font-size: 14px;

  &:container(max-width: 100px) {
    visibility: hidden;
  }

  &:container(min-width: 160px) {
    font-size: 16px;
  }
`;

export const Name = styled(Typography)`
  font-weight: bold;

  &:container(max-width: 160px) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
