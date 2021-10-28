import LoadingButton from "@mui/lab/LoadingButton";
import styled, { css } from "styled-components";

export const Button = styled(LoadingButton)<{
  backgroundColor?: string;
  fontColor?: string;
}>`
  ${({ theme }) =>
    ({
      backgroundColor = theme.palette.primary.main,
      fontColor = theme.palette.common.white,
    }) =>
      css`
        height: 40px;
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
