import DefaultButton from "@mui/material/Button";
import styled, { css } from "styled-components";

import { Theme } from "./theme";

export const Button = styled(DefaultButton)<{
  backgroundColor: string;
  fontColor: string;
}>`
  ${({
    backgroundColor = Theme.palette.primary,
    fontColor = Theme.palette.white,
  }) => css`
    height: 40px;
    width: calc(50% - 0.5px);
    box-sizing: border-box;
    background: ${backgroundColor};
    color: ${fontColor};
    transition: all 0.5s;

    &:first-child {
      margin-right: 1px;
    }

    &:hover {
      background: ${backgroundColor};
      opacity: 0.8;
    }

    &:disabled {
      background: ${backgroundColor};
      color: ${fontColor};
      opacity: 0.7;
    }
  `}
`;
