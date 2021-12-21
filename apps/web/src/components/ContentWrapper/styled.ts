import { CircularProgress, Typography } from "@mui/material";
import { Button } from "apps/web/src/styled/components/Button";
import styled, { css } from "styled-components";

export const EmptyText = styled(Typography)`
  padding: 16px;

  ${({ theme }) =>
    css`
      ${theme.position.absoluteCenter}
      border-radius: ${theme.borderRadius}px;
      background: ${theme.palette.common.grey};
      color: ${theme.palette.secondary.contrastText};
      border: ${theme.border.main};
    `};
`;

export const ErrorText = styled(Typography)`
  padding: 16px;

  ${({ theme }) =>
    css`
      ${theme.position.absoluteCenter}
      border-radius: ${theme.borderRadius}px;
      background: ${theme.palette.common.grey};
      color: ${theme.palette.error.main};
      border: ${theme.border.main};
    `};
`;

export const Spinner = styled(CircularProgress)`
  ${({ theme }) => theme.position.absoluteCenter};
`;

export const ReloadButton = styled(Button)`
  margin-left: 16px;
`;
