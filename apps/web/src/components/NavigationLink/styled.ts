import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 50px;
  width: auto;
  padding: 0 8px;

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      & * {
        color: ${theme.palette.secondary.text};
      }

      &:hover {
        & * {
          color: ${theme.palette.primary.text};
        }
      }
    `}}

    ${({ theme, isActive }) =>
    isActive &&
      css`
        & * {
          color: ${theme.palette.primary.main};
        }
      `}}
`;

export const Text = styled(Typography)``;
