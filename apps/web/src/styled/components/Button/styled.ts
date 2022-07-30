import { CircularProgress } from "@material-ui/core";
import styled, { css } from "styled-components";

export const Wrapper = styled.button<{
  variant: "primary" | "secondary";
  isLoading?: boolean;
}>`
  height: 40px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  ${({ theme, variant }) => css`
    font-size: ${theme.fonts.text1Bold.size};
    font-weight: ${theme.fonts.text1Bold.weight};
    border-radius: ${theme.borderRadius.m};

    ${variant === "primary" &&
    css`
      background: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};

      &:hover {
        background: ${theme.palette.primary.hovered};
      }

      &:active {
        background: ${theme.palette.primary.clicked};
      }
    `}

    ${variant === "secondary" &&
    css`
      background: ${theme.palette.secondary.main};
      color: ${theme.palette.primary.text};

      &:hover {
        background: ${theme.palette.secondary.hovered};
      }

      &:active {
        background: ${theme.palette.secondary.clicked};
      }
    `}
  `}

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const Spinner = styled(CircularProgress).attrs(() => ({
  size: 16,
  color: "inherit",
}))``;
