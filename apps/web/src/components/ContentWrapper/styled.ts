import { CircularProgress, Typography } from "@mui/material";
import { Button } from "apps/web/src/styled/components/Button";
import styled, { css } from "styled-components";

export const ErrorText = styled(Typography)`
  padding: 16px;

  ${({ theme }) =>
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: ${theme.borderRadius};
      background: ${theme.palette.secondary.main};
      color: ${theme.palette.error.main};
      border: ${theme.palette.border.main};
    `};
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReloadButton = styled(Button)`
  margin-left: 16px;
`;
