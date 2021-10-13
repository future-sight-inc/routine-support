import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

export const Wrapper = styled(Box)<{
  rowStart: number;
  rowEnd: number;
  height: number;
  marginTop: number;
}>`
  box-sizing: border-box;
  width: 95%;

  overflow: hidden;

  background: grey;
  justify-self: center;

  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius}px;
    padding: 8px;
    background: ${theme.palette.common.green};
  `}

  ${({ rowStart, rowEnd, height, marginTop }) => css`
    grid-row-start: ${rowStart};
    grid-row-end: ${rowEnd};
    height: ${height}%;
    margin-top: ${marginTop}%;
    ${marginTop
      ? css`
          transform: translateY(-100%);
        `
      : ""}
  `}

  pointer-events: all;
  cursor: pointer;
`;

export const Time = styled(Typography)`
  font-weight: medium;
`;

export const Name = styled(Typography)`
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
`;
